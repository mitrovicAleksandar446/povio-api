# Povio API

1. `npm i`
2. Create `.env` with only one parameter `NODE_ENV` and assign it env you want to work in, 
if it is `development` for example, then create also `.env.development` and populate it with values according to `.env.example`
3. Create database with your parameters, no need to run migrations as `TypeORM` will automatically sync your database with entities in code.
4. In order to run tests, create `.env.test` file with database parameters (advisable for `sqlite`)
5. `npm run dev` to run the app
6. `npm run test` to run tests