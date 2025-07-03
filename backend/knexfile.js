import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      // ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: './migrations',
    },
  },
};
