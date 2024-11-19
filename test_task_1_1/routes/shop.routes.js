const Router = require('express');
const router = new Router();
const shopController = require('../controllers/shop.controller');

router.post('/shop', shopController.createShop);
router.get('/shops', shopController.getShops);
router.get('/shop/:name', shopController.getOneShop);
router.delete('/shop/:name', shopController.deleteShop);

module.exports = router;