# Welcome to the Supporting APIs for TypeScript Fundamentals

This project was created to support https://github.com/DuncanEdwards/ts-fundamentals

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## What apis are supported

### Employees API

`GET /employees-api/employees`\
It can also be called with an optional `search` query string parameter:

![alt text](image.png)\
which does a case insensitive search on first name, surname and address.

### Farm Challenge API

`GET /farm-api/animals`\
Can be called with the following params:
`GET /farm-api/animals?name=Tina&type=cow&order=age`\
which allows filtering by:

- name
- type
  and sorting (ASC) by any animal property:\
  <img src="image-1.png" width="600"/>

`GET /farm-api/animal-types`\
(no querystring params)

`GET /farm-api/animal-sort-options`\
(no querystring params)

### Chef API

`GET /chefs/available`\
(no querystring params)\
<img src="image-2.png" width="400"/>

`GET /chefs/job-titles`\
(no querystring params)

`POST /chefs/promote`\
(no querystring params)
(body is a list of chef Ids - eg `[2, 7]`)

### Accounts API

`POST /accounts/login`
(unsecured)
example body:

```
{
    "email":"MiguelBBingham@rhyta.com",
    "password":"*****"
}
```

`GET /accounts/transactions`
(needs a Bearer token)

`GET /accounts/admin`
(needs a Bearer token of admin level)
