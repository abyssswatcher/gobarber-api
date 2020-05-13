# GoBarber API

GoBarber API

## Installation

First of all you need to install NodeJS, Yarn, PostgreSQL, MongoDB and Redis

1. Install all dependencies.

   ```console
   $ yarn
   ```

2. Create an empty database in postgres with name "gobarber".

3. Export all env vars:
   * GOBARBER_DB_HOST: database host.
   * GOBARBER_DB_USERNAME: database authentication username.
   * GOBARBER_DB_PASSWORD: database authentication password.
   * GOBARBER_DB_NAME: database name, if you did follow step 2 will be "gobarber".
   * GOBARBER_JWT_SECRET_KEY: just an unique in the world and secure string, i recommend a hash of this string.

4. Migrate database.

   ```console
   $ yarn sequelize db:migrate
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
