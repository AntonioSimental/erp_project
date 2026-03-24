const dotenv = require("dotenv")
const db = require("../database/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginController(req, res) {
  const { correo, contrasena } = req.body;
  const query = `SELECT * FROM usuario WHERE correo = ?`;

  try {
    // Query to database
    const [rows] = await db.query(query, [correo]);

    // Validation if exist user
    if (rows.length === 0) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const validatePass = await bcrypt.compare(contrasena, rows[0].contrasena);

    // Validation of password
    if (!validatePass) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const payload = {
      id: rows[0].id
    }
    const sign = process.env.JWT_SIGN

    // Generate token
    const token = jwt.sign(payload, sign, {expiresIn: "1h"});

    // Make the cookie with a token
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 3600000,
      signed: true
    });

    return res.status(200).json({ msg: "Successful" });
  } catch (err) {
    // Message if a server error occurs
    return res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = loginController;
