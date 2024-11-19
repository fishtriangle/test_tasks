const query = require('../db/query');

class ShopController {
  async createShop (req, res) {
    const {name} = req.body;
    const newShop = await query(
      `INSERT INTO shops (name) values ($1) RETURNING *`,
      [name],
    );
    res.json(newShop.rows[0]);
  }

  async getShops(req, res) {
    const shops = await query('SELECT * FROM shops');
    res.json(shops.rows);
  } 

  async getOneShop(req, res) {
    const name = req.params.name;
    const shop = await query(
      'SELECT * FROM shops where name = $1', 
      [name],
    );
    res.json(shop.rows[0]);
  }

  async deleteShop(req, res) {
    const name = req.params.name;
    const shop = await query(
      'DELETE FROM shops where name = $1 RETURNING *', 
      [name],
    );
    res.json(shop.rows[0]);
  }
}

module.exports = new ShopController();