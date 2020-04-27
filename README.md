# GoBarber API

GoBarber API

## Installation

First you need to install NodeJS, Yarn and PostgreSQL

1. Install all dependencies.
   1. > $ yarn

2. Create an empty database in postgres with name "gobarber".

3. Export all env vars:
   1. GOBARBER_DB_HOST: database host.
   2. GOBARBER_DB_USERNAME: database authentication username.
   3. GOBARBER_DB_PASSWORD: database authentication password.
   4. GOBARBER_DB_NAME: database name, if you did follow step 2 will be "gobarber".
   5. GOBARBER_JWT_SECRET_KEY: just an unique in the world and secure string, i recommend a hash of this string.

4. Migrate database.
   1. > $ yarn sequelize db:migrate

## Usage

> $ yarn start or yarn dev

Now api will listen on [http://localhost:3333](http://localhost:3333)
