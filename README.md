# GoBarber API

GoBarber API

## Installation

First of all you need to install NodeJS, Yarn, PostgreSQL, MongoDB and Redis

1. Install all dependencies.

   ```console
   $ yarn
   ```

2. Create an empty database in postgreSQL with name "gobarber".

3. Create a .env file in root directory, use .env.example file for env vars keys.

4. Migrate database.

   ```console
   $ yarn sequelize db:migrate
   ```

## Testing

First setup your test env:

1. Create a .env.test file in root directory, use .env.example file for env vars keys.

2. Replace all lines into #Database section for DB_DIALECT=sqlite.

Now run tests:

```console
$ yarn test
```

## Usage

First you need to start dbs services (PostgreSQL, MongoDB and Redis).

```console
$ yarn queue
```

and

```console
$ yarn dev
```

Now api will listen on [http://localhost:3333](http://localhost:3333)
