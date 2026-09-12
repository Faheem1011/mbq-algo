const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const checkoutRoutes = require('./backend/routes/checkout');
const webhookRoutes = require('./backend/routes/webhook');
const licenseRoutes = require('./backend/routes/license');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/checkout', checkoutRoutes);
app.use('/api/webhook', webhookRoutes);
app.use('/api/license', licenseRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'MBQ ALGO Trading Intelligence API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// Serve compiled static frontend for Hostinger / Production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback for Single Page Application routing (Express 5 compatible)
app.use((req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  🚀 MBQ ALGO Server running on http://localhost:${PORT}`);
  console.log(`  📊 Hostinger Production Mode Ready`);
  console.log(`====================================================`);
});
