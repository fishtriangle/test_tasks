
const db = require('./db');
const logService = require('../config/axios');

async function query(queryString, params, isLogged) {
  try {
    const dbResponse = await db.query(queryString, params);

  if (isLogged) {
    logService
      .post('/statistics', {
        action: dbResponse.command,
        date: dbResponse.rows[0].last_change,
        shop_id: dbResponse.rows[0].shop_id,
        plu: dbResponse.rows[0].good_plu,
        raw_log: JSON.stringify(dbResponse),
      })
      .catch((err) => console.log(error));
  }

  return dbResponse;
  } catch (error) {
    console.error(error);
  }
  
}

module.exports = query;