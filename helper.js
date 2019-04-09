exports.sendJsonResp = (req, res) =>
  res.send({ error: "", data: res.locals.response })
