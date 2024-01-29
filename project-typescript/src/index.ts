import express from 'express';
import dotenv from 'dotenv';
import mountRoutes from './router';
// import { init } from './db';

const app = express();
dotenv.config();

const PORT = process.env.PORT ?? 8081;

app.use(express.json())
// app.use('/', (req, res) => {
//   res.status(200).json({ saludo: 'Manuel' });
// });

// init();
mountRoutes(app)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})