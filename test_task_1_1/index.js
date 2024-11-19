const express = require('express');
const goodsRouter = require('./routes/good.routes');
const shopsRouter = require('./routes/shop.routes');
const storeRouter = require('./routes/store.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', goodsRouter);
app.use('/api', shopsRouter);
app.use('/api', storeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});