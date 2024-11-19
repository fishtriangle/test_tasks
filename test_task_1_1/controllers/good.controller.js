const query = require('../db/query');

class GoodController {
  // создание товара
  async createGood (req, res) {
    try {
      const {plu, name} = req.body;
      const newGood = await query(
        `INSERT INTO goods (plu, name) values ($1, $2) RETURNING *`,
        [plu, name],
      );
      res.json(newGood.rows[0]);
    } catch(error) {
      console.log(error);
      res.json(error);
    }
  }

  // получение товара по фильтрам
  async getGoods(req, res) {
    try {
      const {
        plu,
        name,
      } = req.query;

      let goods;

      if (plu) {
        goods = await query(`SELECT * FROM goods WHERE plu = $1`, [plu]);
      } else if (name) {
        goods = await query(`SELECT * FROM goods WHERE name = $1`, [name])
      } else {
        goods = await query('SELECT * FROM goods');
      }
    res.json(goods.rows);
    } catch(error) {
      console.log(error);
      res.json(error);
    }
  } 
}

module.exports = new GoodController();