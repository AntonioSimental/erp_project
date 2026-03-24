function logoutController(req, res) {
  res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      signed: true
    })
  return res.status(200).json({msg:"Session closed"});
}

module.exports = logoutController;