function idParamsValidation(req, res, next) {
  const {id} = req.params
  const idNumber = Number(id)

  if (idNumber <= 0 || !Number.isInteger(idNumber)) {
    return res.status(400).json({msg:"Bad request"});
  }
  next()
}

module.exports = idParamsValidation;