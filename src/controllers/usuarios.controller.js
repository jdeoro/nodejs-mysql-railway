import { PORT,DB_HOST } from "../config.js"
import { pool} from '../db.js'

export const consulta = async (req,res) => {
    const result = "servidor funcionando en "+DB_HOST
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
    if ( rows.affectedRows == 1 ){
        res.status(200).json({
            resultado: "Succes!",
            id: insertId,
            name
        })
    } else {
        res.status(404).json("Failed!")
    }
}

export const editusuario = async (req,res) => {
    const { name,email} = req.body
    const { id } = req.params
    // console.log(id)

     const [rows] = await pool.
    query( 'UPDATE usuario set name = ? , email = ? where id=? ',[name,email,id]) 

    if ( rows.affectedRows == 1 ){
        res.status(200).json("Succes!")
    } else {
        res.status(404).json("Failed!")
    }
    
}

export const deleteusuario = async (req,res) => {
    const { id } = req.params
    // console.log(id)

     const [rows] = await pool.
    query( 'DELETE from usuario where id=? ',[id]) 

    if ( rows.affectedRows == 1 ){
        res.status(200).json("Succes!")
    } else {
        res.status(404).json("Failed!")
    }
    
}