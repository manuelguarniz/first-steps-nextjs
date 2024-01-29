import express from "express"
import * as db from '../db'

const router = express.Router()
 
// export our router to be mounted by the parent application
export default router
 
router.get('/', async (req, res) => {
  console.log('query products...')
  const {rows} = await db.query('SELECT * FROM products');
  res.send(rows[0])
})