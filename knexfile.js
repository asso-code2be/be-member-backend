require(`dotenv`).config();

module.exports = {
  development: {
    client: process.env.DB_TYPE,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      filename: process.env.DB_FILE,
    },
    models: {
      directory: `./src/models`,
    },
    migrations: {
      directory: `./src/migrations`,
    }
  },

  production: {
    client: process.env.DB_TYPE,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      filename: process.env.DB_FILE,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
