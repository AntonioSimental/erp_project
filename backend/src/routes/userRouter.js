const express = require("express");
const { authPlugins } = require("mysql2");
const authToken = require("../middlewares/authJwt");
const userInfoController = require("../controllers/userInfoController");
const logoutController = require("../controllers/logoutController");
const userRouter = express.Router();

userRouter.get("/profile", authToken, userInfoController);
userRouter.post("/logout", authToken, logoutController);

module.exports = userRouter;
