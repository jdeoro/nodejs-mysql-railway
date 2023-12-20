import {Router} from 'express'
import { PORT } from '../config.js'
import { pool} from '../db.js'


const router = Router()

router.get('/dummy' , async (req,res) => {
    const result = "servidor funcionando en "+PORT
    res.json(result)
} )

router.get('/api/usuarios' , async (req,res) => {
    const [rows] = await pool.query('SELECT count(*) FROM usuarios')
    res.json(rows)
} )

export default router