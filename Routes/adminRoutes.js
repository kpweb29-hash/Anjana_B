const express = require('express');
const { createAdmin, loginAdmin } = require('../Controller/adminController');

const router = express.Router();

// POST /admin/create
router.post('/create', createAdmin);

// POST /admin/login
router.post('/login', loginAdmin);

module.exports = router;