const db = require("../database/db.js");

async function userInfoController(req, res) {
  // Get decoded token in id param
  const { id } = req.user;
  const query =
    "SELECT nombre, Apaterno, Amaterno, correo FROM usuario WHERE id = ?";

  try {
    // Search in database the user
    const [rows] = await db.query(query, [id]);

    // Validation if don't exist the user
    if (rows.length === 0) {
      return res.status(404).json({msg:"User Not Found"});
    }

    // Return data of the user
    return res.status(200).json(rows[0]);
  } catch (err) {
    // If server its out of order or the query fail
    return res.status(500).json({ msg: "Server error" });
  }
}

module.exports = userInfoController;
