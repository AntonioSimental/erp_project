require("dotenv").config();
const express = require("express");
const app = express();
const registerRouter = require("./src/routes/registerRouter.js");
const loginRouter = require("./src/routes/loginRouter.js");
const cookieParser = require("cookie-parser");
const userRouter = require("./src/routes/userRouter.js");
const cors = require("cors")

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
	if (err) {
    throw err;
  }
  console.log(`http://localhost:${PORT}`);
});
