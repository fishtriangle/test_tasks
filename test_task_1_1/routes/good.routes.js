const Router = require('express');
const router = new Router();
const goodController = require('../controllers/good.controller');

// cоздание товара
router.post('/good', goodController.createGood);
// получение товара по фильтрам
router.get('/goods', goodController.getGoods);

module.exports = router;