'use strict'
const requestLogger = (req, res, next) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = new Date(new Date().getTime())
  console.log(`Solicitud recibida en: ${now}, desde la dirección IP: ${ipAddress}`);
  next();
};
  
  const errorLogger = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  };
  
  module.exports = {
    requestLogger,
    errorLogger,
  };