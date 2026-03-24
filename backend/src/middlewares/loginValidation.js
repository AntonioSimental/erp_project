function loginValidation(req, res, next) {
  // Function to validate email format
  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const fields = ["correo", "contrasena"];
  const sanitizedBody = Object.create(null);

  // For to travel the array and execute the validations for all fields
  for (let field of fields) {
    const value = req.body[field];
    if (typeof value !== "string" || !value.trim()) {
      return res.status(400).json({ msg: `Invalid ${field}` });
    }

    if (field === "correo" && !validateEmail(value)) {
      return res.status(400).json({ msg: "Invalid mail" });
    }

    // Eliminate spaces of all data
    sanitizedBody[field] = value.trim();
  }
  req.body = sanitizedBody;
  next();
}

module.exports = loginValidation;
