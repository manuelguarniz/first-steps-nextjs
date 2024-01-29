import { Pool } from "pg";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config";
import fs from "fs";
import { getSecretValue } from "../config/aws-credentials";

const secret_name = "prod/miniasia/postgres";



const init = async () => {
  const secret = await getSecretValue(secret_name);
  console.log('secrets', secret)
  const pool = new Pool({
    host: DB_HOST,
    port: secret.port,
    user: secret.username,
    database: secret.engine,
    password: secret.password,
  });
  console.log('create db connect')
  await pool.connect();
  console.log('Conectado a la base de datos');
};

// const query = (text: any, params?: any) => pool.query(text, params);

const query = (query :string ) => ({ rows: [] });

export { init, query };