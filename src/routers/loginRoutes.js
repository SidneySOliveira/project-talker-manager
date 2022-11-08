const express = require('express');
const crypto = require('crypto');
const { emailValidation, passwordValidation } = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, async (_req, res) => {
    const token = crypto.randomBytes(8).toString('hex');
    res.status(200).json({ token });
});

module.exports = router;