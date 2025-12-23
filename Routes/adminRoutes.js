const express = require('express');
const { createAdmin, loginAdmin, getTotals } = require('../Controller/adminController');

const router = express.Router();

// POST /admin/create
router.post('/create', createAdmin);

// POST /admin/login
router.post('/login', loginAdmin);

// GET /admin/totals
router.get('/totals', getTotals);

module.exports = router;