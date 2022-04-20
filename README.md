## Getting started

### 1. Install dependencies

Inside the folder project install dependencies:

```
npm install
```

### 2. Configure environment variables on .env

Create a .env file and follow the .env.example file to configure environment variables such as the application port and database details:

```
PORT=3001

POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

### 3. Start the REST API server

```
npm start
```

The server is now running on `http://localhost:3001`.

## API Endpoints

You can access the following endpoints:

## - Persons

`GET /persons - Response example`

```json
[
  {
    "id": "6551efb5-eb7e-4a02-9982-1a461920ab43",
    "created_at": "2022-04-19T23:19:58.038Z",
    "updated_at": "2022-04-19T23:49:28.196Z",
    "name": "Rafael Kammer",
    "cpf": "012.345.678-99",
    "nickname": "Rafael",
    "gender": "Male",
    "phone": "(41)12345-6789",
    "address": "Rua Curitiba, 123, Curitiba - Paraná",
    "comments": "comentários extras",
    "profile_picture": "https://picsum.photos/400/300"
  }
]
```

`POST /persons - Body request example`

```json
{
  "name": "Rafael Kammer",
  "cpf": "012.345.678-99",
  "nickname": "Rafael",
  "gender": "Male",
  "phone": "(41)12345-6789",
  "address": "Rua Curitiba, 123, Curitiba - Paraná",
  "comments": "comentários extras",
  "profile_picture": "https://picsum.photos/400/300"
}
```

`POST /persons - Response example`

```json
{
  "name": "Rafael Kammer",
  "cpf": "012.345.678-99",
  "nickname": "Rafael",
  "gender": "Male",
  "phone": "(41)12345-6789",
  "address": "Rua Curitiba, 123, Curitiba - Paraná",
  "comments": "comentários extras",
  "profile_picture": "https://picsum.photos/400/300",
  "id": "82b748e8-87c7-48cb-895b-15397a7685f9",
  "created_at": "2022-04-19T23:54:56.084Z",
  "updated_at": "2022-04-19T23:54:56.084Z"
}
```

`PUT /persons/:id - Body request example`

```json
PUT - /persons/82b748e8-87c7-48cb-895b-15397a7685f9

{
	"name": "Rafael Kammer de Campos",
	"cpf": "012.345.678-99",
	"nickname": "Rafa",
	"gender": "Male",
	"phone": "(41)12345-6789",
	"address": "Rua Curitiba, 123, Curitiba - Paraná",
	"comments": "comentários extras",
	"profile_picture": "https://picsum.photos/400/300"
}
```

`PUT /persons/:id - Body request example`

```json
{
  "message": "Person updated"
}
```

`DELETE /persons/:id - Request example`

```json
DELETE - /persons/82b748e8-87c7-48cb-895b-15397a7685f9

{
  "message": "Person deleted"
}
```
