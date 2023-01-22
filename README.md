# Price Table Manager (PTM)

## About

PTM is an API that aims for easy access to items and prices, according to interest rates that can be added later.

## Routes

### Create an item `POST /item`

Body:

```json
"name": "name",
"price": 10000
```

### Get all items `GET /items`

Returns a list of all items.

Result:

```json
[
  {
    "id": 1,
    "name": "item",
    "price": 10000
  }
]
```

### Get an item and fees `GET /item/:id?fee=id`

Get an item passing an item id through params and it's costs based on the fee id passed using query.

Result:

```json
{
  "id": 2,
  "name": "item",
  "price": 1090,
  "fees": [
    {
      "id": 1,
      "totalMonths": 1,
      "valuePerMonth": 10520
    },
    {
      "id": 2,
      "totalMonths": 2,
      "valuePerMonth": 5533.52
    }
```

### Create an institution `POST /institution`

Institutions are in charge of fees.

Body:

```json
"name": "institution name"
```

### Get all institutions `GET /institutions`

Returns a list of all institutions

### Get institution's fees `GET /institution/:id`

Returns institution info and a list of available fees.

- If the instutition has no fees registered, returns 404.

```json
{
  "id": 2,
  "name": "Institution Name",
  "fees": [
    {
      "id": 1,
      "name": "Credit 1x-12x",
      "InitialFee": 0,
      "monthlyFee": 1.1,
      "maxNumOfInstallments": 12
    }
  ]
}
```

### Create a fee `POST /fee`

body:

```json
  "institution_id": 1,
  "initial_fee": 0,
  "monthly_fee": 1,
  "name": "Credit Card 1-12x",
  "max_num_installments": 12
```

### Update a fee `POST /fee/:id`

body:

```json
  "initial_fee": 0,
  "monthly_fee": 1,
  "name": "Credit Card 1-12x",
  "max_num_installments": 12
```

### Delete a fee `DELETE /fee/:id`

Returns OK, HTTP Status 200.
