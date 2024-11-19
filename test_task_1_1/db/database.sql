'''DROP TABLE IF EXISTS customers;'''

create TABLE goods(
  plu VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

create TABLE shops(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

create TABLE store(
  shelf_qty INTEGER,
  order_qty INTEGER,
  good_plu VARCHAR(255),
  shop_id INTEGER,
  last_change TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT pk_store 
    PRIMARY KEY (good_plu, shop_id),
  CONSTRAINT fk_goods
      FOREIGN KEY(good_plu)
        REFERENCES goods(plu),
  CONSTRAINT fk_shops
      FOREIGN KEY(shop_id)
        REFERENCES shops(id)
);