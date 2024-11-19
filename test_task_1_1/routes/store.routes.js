const Router = require('express');
const router = new Router();
const storeController = require('../controllers/store.controller');

// cоздание остатка
router.post('/createbalance', storeController.createBalance);
// увеличение остатка
router.patch('/increasebalance', storeController.increaseBalance);
// уменьшение остатка
router.patch('/decreasebalance', storeController.decreaseBalance);
// получение остатков по фильтрам
router.get('/balance', storeController.getBalance);

module.exports = router;