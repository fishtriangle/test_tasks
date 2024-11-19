# Задание 1. Сервис истории действий с товарами

## Комментарии к решению
Таблицы в базе создавались cредствами ORM.</code>

К решению приложена коллекция для Postman <code>/postman/test_1_2.postman_collection.json</code>

В рамках решения были созданы следующие роуты:

<li> <code>POST /api/statistics</code> - Внесение новой записи в статистику

Body: 

```json
{
  "action": string,
  "date": Date,
  "shop_id": number,
  "plu": string,
  "raw_log": string
}
```
<br>
<li> <code>GET /api/statistics</code> - Получение статистики по фильтрам и с учетом пагинации

Params: 

```
shopId
action
dateAfter
dateBefore
plu
page
perPage
```
<br>


## Инструментарий

Typescript, Express.js, Prisma.
