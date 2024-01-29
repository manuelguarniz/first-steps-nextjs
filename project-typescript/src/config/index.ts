import dotenv from 'dotenv';
dotenv.config();

export const {
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
} = process.env;