const express = require('express');
const loginRouter = express.Router();
const loginValidation = require("../middlewares/loginValidation.js");
const loginController = require("../controllers/loginController.js");

loginRouter.post("/", loginValidation, loginController);

module.exports = loginRouter;