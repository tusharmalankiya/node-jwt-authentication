const express = require('express')
const { home_get, protected_get } = require('./../controllers/commonControllers');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', requireAuth ,home_get)

router.get('/protected', requireAuth , protected_get)

module.exports = router;