const axios = require('axios'); 

const logService = axios.create({
  baseURL: process.env.LOG_BASE_URL || "http://127.0.0.1:3001/api/",
});

module.exports = logService;