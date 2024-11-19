# Задание 2. Сервис работы с пользователями

## Комментарии к решению
Таблицы в базе создавались cредствами ORM. Заполнение базы производилось при помощи инструментария <code>@snaplet/seed</code> и <code>@snaplet/copycat</code>:
```bash
$ prisma db seed
```

К решению приложена коллекция для Postman <code>/postman/test_2.postman_collection.json</code>

В рамках решения был создан роут:

<li> <code>PATCH /api/users</code> - меняет значение столбца problem на false для переданного массива id пользователей и возвращает количество пользователей с значение true в столбце problem.

Body: 

```json
number[]
```
<br>


## Инструментарий

Typescript, Nest.js, Prisma.
