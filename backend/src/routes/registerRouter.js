const express = require('express');
const registerRouter = express.Router();
const registerAuth = require('../middlewares/registerValidation.js');
const registerController = require('../controllers/registerController.js');

registerRouter.post('/', registerAuth, registerController);

module.exports = registerRouter;