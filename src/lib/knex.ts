import * as knex from 'knex';

export const knexInstance = knex({
    client: process.env.DB_TYPE,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      filename: process.env.DB_FILE
    },
/*    models: {
      directory: `./src/models`,
    },*/
    migrations: {
      directory: `./src/migrations`,
    }
  });
