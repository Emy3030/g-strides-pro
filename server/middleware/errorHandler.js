export function errorHandler(err, req, res, next) {
  console.error(err.stack)
  const status  = err.statusCode || 500
  const message = err.message    || 'Internal Server Error'
  res.status(status).json({ error: message })
}

export function notFound(req, res) {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` })
}
