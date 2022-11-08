const express = require('express');

const talkerRoutes = require('./talkerRoutes');
const loginRoutes = require('./loginRoutes');

const routers = express.Router();

routers.use('/talker', talkerRoutes);
routers.use('/login', loginRoutes);

module.exports = routers;