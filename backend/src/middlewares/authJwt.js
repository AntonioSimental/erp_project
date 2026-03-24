const jwt = require("jsonwebtoken");

function authToken(req, res, next) {
  const token = req.signedCookies.token;

  // Validation if don't exist token
  if (!token) {
    return res.status(401).json({ msg: "Token is required" });
  }

  try {
    // Decode JWT and save JWT decoded in req.user
    const decoded = jwt.verify(token, process.env.JWT_SIGN);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
}

module.exports = authToken;
