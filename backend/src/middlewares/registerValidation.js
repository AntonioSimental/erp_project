function registerAuth(req, res, next) {
  const fields = ["nombre", "correo", "contrasena"];

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const sanitizedBody = Object.create(null);

  for (let field of fields) {
    const value = req.body[field];
    if (typeof value !== "string" || !value.trim()) {
      return res.status(400).json({ msg: `Invalid ${field}` });
    }

    if (field === "correo" && !validateEmail(value)) {
      return res.status(400).json({ msg: "Invalid mail" });
    }

    sanitizedBody[field] = value.trim();
  }
  req.body = sanitizedBody;
  next();
}

module.exports = registerAuth;
