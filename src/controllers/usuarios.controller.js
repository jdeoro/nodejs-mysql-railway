import { PORT } from "../config.js"
import { pool} from '../db.js'

export const consulta = async (req,res) => {
    const result = "servidor funcionando en "+PORT
    res.json(result)
} 

export const listadodeusuarios =  async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM usuario')
    res.json(rows)
}