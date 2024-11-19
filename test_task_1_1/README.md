# Задание 1. Сервис остатков товаров в магазине

Решение выполнено в соответствии с заданием. 

## Комментарии к решению
Таблицы в базе создавались через непосредственное выполнение sql команд и приведены в файле <code>/db/database.sql</code>

К решению приложена коллекция для Postman <code>/postman/test_1_1.postman_collection.json</code>

В рамках решения были созданы следующие роуты:

<li> <code>POST /api/good</code> - Создание товара

Body: 

```json
{
    "plu": string,
    "name": string
}
```
<br>
<li> <code>POST /api/createbalance</code> - Создание остатка

Body: 

```json
{
    "goodPlu": string, 
    "shopId": number,
    "shelfQty": number,
    "orderQty": number
}
```
<br>
<li> <code>PATCH /api/increasebalance</code> - Увеличение остатка

Body: 

```json
{
    "goodPlu": string, 
    "shopId": number,
    "shelfQty": number?,
    "orderQty": number?
}
```
<br>
<li> <code>PATCH /api/decreasebalance</code> - Уменьшение остатка

Body: 

```json
{
    "goodPlu": string, 
    "shopId": number,
    "shelfQty": number?,
    "orderQty": number?
}
```
<br>
<li> <code>GET /api/balance</code> - Получение остатков по фильтрам

Params: 

```
plu
shopId
minShelfQty
maxShelfQty
minOrderQty
maxOrderQty
```
<br>
<li> <code>GET /api/goods</code> - Получение товаров по фильтрам

Params: 

```
plu
name
```
<br>


## Инструментарий

Express.js, pg, axios, nodemon.
