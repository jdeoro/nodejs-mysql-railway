import express from 'express'
import { pool} from './db.js'
import { PORT } from './config.js'

const app = express()

app.listen(PORT)
console.log("server running on port "+PORT)

app.get('/dummy' , async (req,res) => {
    const result = "servidor funcionando en "+PORT
    res.json(result)
} )

app.get('/consulta' , async (req,res) => {
    const [rows] = await pool.query('SELECT count(*) FROM usuarios')
    res.json(rows)
} )