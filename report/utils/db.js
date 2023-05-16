'use strict'

const mongoose = require('mongoose');
const moment = require('moment-timezone');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos');
    moment.tz.setDefault('America/Mexico_City');

  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB
};