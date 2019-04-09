exports.apiErrorMiddleware = (err, req, res, next) => {
  if (!res.headersSent) {
    res.status(400)
  }

  res.json({
    error: err.message || "Unknown Error",
    data: res.locals.response || {}
  })
  next(err)
}
