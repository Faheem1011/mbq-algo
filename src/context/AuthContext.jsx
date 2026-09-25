import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY_SESSION = 'mbq_active_session';
const STORAGE_KEY_USERS = 'mbq_registered_users';

function generateRandomHex(length = 4) {
  const chars = '0123456789ABCDEF';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateLicenseKey(planName = 'Pro') {
  const tierSuffix = planName.includes('Lifetime') 
    ? 'VIP' 
    : planName.includes('Elite') 
      ? 'ELITE' 
      : planName.includes('Starter') 
        ? 'STD' 
        : 'PRO';
  return `MBQ-${generateRandomHex(4)}-${generateRandomHex(4)}-${generateRandomHex(4)}-${tierSuffix}`;
}

export function AuthProvider({ children }) {
  // Read active session on mount
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SESSION);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse active session:', e);
    }
    return null;
  });

  // Get all registered users from storage
  const getRegisteredUsers = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_USERS);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  };

  const saveRegisteredUsers = (users) => {
    try {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to save users:', e);
    }
  };

  const saveActiveSession = (userData) => {
    setUser(userData);
    try {
      if (userData) {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(userData));
      } else {
        localStorage.removeItem(STORAGE_KEY_SESSION);
      }
    } catch (e) {
      console.error('Failed to update session:', e);
    }
  };

  // Sign up / Activate new license
  const signup = async ({ tvUsername, email, password, plan = 'Pro Quarterly' }) => {
    const cleanTv = tvUsername.trim().replace(/^@/, '');
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanTv) throw new Error('TradingView username is required.');
    if (!cleanEmail || !cleanEmail.includes('@')) throw new Error('Valid email address is required.');

    const existingUsers = getRegisteredUsers();
    const conflict = existingUsers.find(
      u => u.tvUsername.toLowerCase() === cleanTv.toLowerCase() || u.email.toLowerCase() === cleanEmail
    );

    if (conflict) {
      throw new Error(`An account with this ${conflict.tvUsername.toLowerCase() === cleanTv.toLowerCase() ? 'TradingView username' : 'email'} already exists. Please sign in.`);
    }

    const tierCode = plan.includes('Lifetime') ? 'VIP' : plan.includes('Elite') ? 'ELITE' : plan.includes('Starter') ? 'STD' : 'PRO';
    const allowedSlots = plan.includes('Starter') ? 1 : plan.includes('Elite') ? 5 : plan.includes('Lifetime') ? 10 : 3;

    // Renewal date logic
    let nextRenewal = '3 Months';
    if (plan.includes('Lifetime')) {
      nextRenewal = 'Lifetime (Never Expires)';
    } else if (plan.includes('Annual')) {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 1);
      nextRenewal = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } else if (plan.includes('Quarterly')) {
      const d = new Date();
      d.setMonth(d.getMonth() + 3);
      nextRenewal = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } else {
      const d = new Date();
      d.setMonth(d.getMonth() + 1);
      nextRenewal = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    const newUser = {
      id: `usr_mbq_${Math.floor(10000 + Math.random() * 90000)}`,
      tvUsername: cleanTv,
      email: cleanEmail,
      password: password || 'auto_assigned_pwd',
      plan: plan,
      tierCode: tierCode,
      licenseKey: generateLicenseKey(plan),
      status: 'Active',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      nextRenewal: nextRenewal,
      allowedSlots: allowedSlots,
      usedSlots: 1,
      activePairs: ['BTC/USDT', 'EUR/USD', 'NAS100'],
      webhookCount: 0,
    };

    const updated = [...existingUsers, newUser];
    saveRegisteredUsers(updated);
    saveActiveSession(newUser);
    return newUser;
  };

  // Sign In
  const login = async ({ identifier, password }) => {
    const cleanId = identifier.trim().toLowerCase().replace(/^@/, '');
    if (!cleanId) throw new Error('Please enter your TradingView username or email.');

    const existingUsers = getRegisteredUsers();
    const found = existingUsers.find(
      u => u.tvUsername.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );

    if (!found) {
      throw new Error('Account not found. Please sign up or verify your credentials.');
    }

    if (password && found.password && found.password !== password) {
      throw new Error('Incorrect password. Please try again.');
    }

    saveActiveSession(found);
    return found;
  };

  // Instant Test-Drive Mode for evaluation
  const loginDemoTrader = () => {
    const demoUser = {
      id: `usr_mbq_${Math.floor(10000 + Math.random() * 90000)}`,
      tvUsername: 'alpha_trader',
      email: 'alpha_trader@terminal.io',
      plan: 'Pro Quarterly',
      tierCode: 'PRO',
      licenseKey: generateLicenseKey('Pro Quarterly'),
      status: 'Active',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      nextRenewal: 'Nov 24, 2026',
      allowedSlots: 3,
      usedSlots: 2,
      activePairs: ['BTC/USDT', 'EUR/USD'],
      webhookCount: 142,
    };
    saveActiveSession(demoUser);
    return demoUser;
  };

  // Logout
  const logout = () => {
    saveActiveSession(null);
  };

  // Update TradingView Username
  const updateTvUsername = async (newTv) => {
    const clean = newTv.trim().replace(/^@/, '');
    if (!clean || !user) return;

    const updatedUser = { ...user, tvUsername: clean };
    saveActiveSession(updatedUser);

    // Also update in registered list
    const existing = getRegisteredUsers();
    const updatedList = existing.map(u => u.id === user.id ? updatedUser : u);
    saveRegisteredUsers(updatedList);
    return updatedUser;
  };

  // Register and activate directly from Checkout Modal
  const checkoutAndActivate = async ({ email, tvUsername, planName, password }) => {
    const cleanTv = tvUsername.trim().replace(/^@/, '');
    const cleanEmail = email.trim().toLowerCase();

    const existingUsers = getRegisteredUsers();
    // Check if exists, if so log in and upgrade plan
    const foundIndex = existingUsers.findIndex(
      u => u.tvUsername.toLowerCase() === cleanTv.toLowerCase() || u.email.toLowerCase() === cleanEmail
    );

    let activeUser;
    if (foundIndex >= 0) {
      activeUser = {
        ...existingUsers[foundIndex],
        plan: planName,
        status: 'Active',
      };
      existingUsers[foundIndex] = activeUser;
      saveRegisteredUsers(existingUsers);
    } else {
      activeUser = await signup({
        tvUsername: cleanTv,
        email: cleanEmail,
        password: password || 'mbq_pass_' + Math.random().toString(36).substring(2, 7),
        plan: planName,
      });
    }

    saveActiveSession(activeUser);
    return activeUser;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signup,
        login,
        loginDemoTrader,
        logout,
        updateTvUsername,
        checkoutAndActivate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
