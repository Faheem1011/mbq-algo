const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'data_store.json');

// Initial schema structure
const initialData = {
  users: [],
  orders: [],
  licenses: [],
  tvAccessLogs: []
};

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading database file:', err);
    return initialData;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing database file:', err);
  }
}

const db = {
  getOrders: () => readDb().orders,
  getOrderById: (orderId) => readDb().orders.find(o => o.orderId === orderId),
  createOrder: (order) => {
    const data = readDb();
    data.orders.push(order);
    writeDb(data);
    return order;
  },
  updateOrderStatus: (orderId, status, transactionId = null) => {
    const data = readDb();
    const order = data.orders.find(o => o.orderId === orderId);
    if (order) {
      order.status = status;
      if (transactionId) order.transactionId = transactionId;
      order.updatedAt = new Date().toISOString();
      writeDb(data);
    }
    return order;
  },
  getLicenseByKey: (licenseKey) => readDb().licenses.find(l => l.licenseKey === licenseKey),
  createLicense: (license) => {
    const data = readDb();
    data.licenses.push(license);
    writeDb(data);
    return license;
  },
  updateTvUsername: (licenseKey, newTvUsername) => {
    const data = readDb();
    const license = data.licenses.find(l => l.licenseKey === licenseKey);
    if (license) {
      license.tvUsername = newTvUsername;
      license.updatedAt = new Date().toISOString();
      writeDb(data);
    }
    return license;
  },
  logTvAccess: (log) => {
    const data = readDb();
    data.tvAccessLogs.push({ ...log, timestamp: new Date().toISOString() });
    writeDb(data);
  }
};

module.exports = db;
