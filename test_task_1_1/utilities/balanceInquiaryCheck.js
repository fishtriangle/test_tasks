const db = require('../db/db');
const isInteger = require('./isInteger');

async function balanceInquiaryCheck(goodPlu, shopId, shelfQty, orderQty) {
  if (!isInteger(shelfQty) || !isInteger(orderQty)) {
    return 'Количество товара на полке и количество товара в заказе должно быть целочисленным числом!';
  } 
  if (shelfQty < 0 || orderQty < 0) {
    return 'Количество товара на полке и количество товара в заказе должно быть больше 0!';
  }

  const good = await db.query(
    'SELECT * FROM goods where plu = $1', 
    [goodPlu],
  );
  if (good.rows.length === 0) {
    return 'Такого товара не существует в базе!';
  }

  const shop = await db.query(
    'SELECT * FROM shops where id = $1', 
    [shopId],
  );
  if (shop.rows.length === 0) {
    return ('Такого магазина не существует в базе!');
  }

  return false;
}

module.exports = balanceInquiaryCheck;