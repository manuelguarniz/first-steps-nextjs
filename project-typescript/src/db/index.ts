import { Pool } from "pg";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../config";
import fs from 'fs';

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT as any,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./global-bundle.pem').toString()
  }
});

export const query = (text: any, params?: any) => pool.query(text, params);
