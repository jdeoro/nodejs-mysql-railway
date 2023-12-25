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

export const insertusuario = async (req,res) => {
    const { name,clave,email,state} = req.body
    const [rows] = await pool.
    query( 'INSERT into usuario ( name,clave,email,state) values ( ?,?,?,?)',[name,clave,email,state]) 
    //console.log(rows)
    const {insertId}  = rows
    res.send("Post succes!, registro nro." + insertId   )
}