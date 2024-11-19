const query = require('../db/query');
const balanceInquiaryCheck = require('../utilities/balanceInquiaryCheck');

class StoreController {
  // создание остатка
  async createBalance (req, res) {
    try {
      const {goodPlu, shopId, shelfQty, orderQty} = req.body;
      const check = await balanceInquiaryCheck(goodPlu, shopId, shelfQty, orderQty);

      if (!check) {
        const newBalance = await query(
          `INSERT INTO store (shelf_qty, order_qty, good_plu, shop_id) values ($1, $2, $3, $4) RETURNING *`,
          [shelfQty, orderQty, goodPlu, shopId],
          true,
        );
        res.json(newBalance.rows[0]);
      } else {
        res.json(check);
      }
    } catch(error) {
      console.log(error);
      res.json(error);
    }
  }

  // увеличение остатка
  async increaseBalance(req, res) {
    try {
      let response;
      const {goodPlu, shopId, shelfQty, orderQty} = req.body;
      const check = await balanceInquiaryCheck(goodPlu, shopId, shelfQty, orderQty);
      
      if (!check) {
        const currentBalance = await query(
          'SELECT * FROM store WHERE good_plu = $1 AND shop_id = $2', 
          [goodPlu, shopId],
          true,
        );
        if (currentBalance.rows[0].shelf_qty > shelfQty
          || currentBalance.rows[0].order_qty > orderQty) {
            response = 'Новое значение остатков должно быть больше старого!';
          } else {
            response = (await query(
              'UPDATE store SET shelf_qty = $1, order_qty = $2, last_change = CURRENT_TIMESTAMP WHERE good_plu = $3 AND shop_id = $4 RETURNING *',
              [shelfQty, orderQty, goodPlu, shopId],
              true,
            )).rows[0];
          }
          res.json(response);
      } else {
        res.json(check);
      }
    } catch(error) {
      console.log(error);
      res.json(error);
    }
  }

  // уменьшение остатка
  async decreaseBalance(req, res) {
    try {
      let response;
      const {goodPlu, shopId, shelfQty, orderQty} = req.body;
      const check = await balanceInquiaryCheck(goodPlu, shopId, shelfQty, orderQty);
      
      if (!check) {
        const currentBalance = await query(
          'SELECT * FROM store WHERE good_plu = $1 AND shop_id = $2', 
          [goodPlu, shopId],
          true,
        );
        if (currentBalance.rows[0].shelf_qty < shelfQty
          || currentBalance.rows[0].order_qty < orderQty) {
            response = 'Новое значение остатков должно быть меньше старого!';
          } else {
            response = (await query(
              'UPDATE store SET shelf_qty = $1, order_qty = $2, last_change = CURRENT_TIMESTAMP WHERE good_plu = $3 AND shop_id = $4 RETURNING *',
              [shelfQty, orderQty, goodPlu, shopId],
              true,
            )).rows[0];
          }
          res.json(response);
      } else {
        res.json(check);
      }
    } catch(error) {
      console.log(error);
      res.json(error);
    }
  }

  // получение остатков по фильтрам
  async getBalance(req, res) {
    try {
      const {
        plu,
        shopId,
        minShelfQty,
        maxShelfQty,
        minOrderQty,
        maxOrderQty
      } = req.query;
  
      let conditions = [];
      let inquiary = 'SELECT * FROM store';
  
      if (plu) {
        conditions.push(['good_plu', '=', `'${plu}'`]);
      }
      if (shopId) {
        conditions.push(['shop_id', '=', shopId]);
      }
      if (minShelfQty) {
        conditions.push(['shelf_qty', '>', minShelfQty]);
      }
      if (maxShelfQty) {
        conditions.push(['shelf_qty', '<', maxShelfQty]);
      }
      if (minOrderQty) {
        conditions.push(['order_qty', '>', minOrderQty]);
      }
      if (maxOrderQty) {
        conditions.push(['order_qty', '<', maxOrderQty]);
      }
  
      if (conditions.length > 0) {
        inquiary = 'SELECT * FROM store WHERE ' + conditions.map(
          (condition) => condition.join(' ')
        ).join(' AND ');
      }
      
      const balances = await query(inquiary, undefined, false);
      res.json(balances.rows);
    } catch(error) {
      console.log(error);
      res.json(error);
    }
  } 
}

module.exports = new StoreController();