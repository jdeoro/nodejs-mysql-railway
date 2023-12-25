import {Router} from 'express'
import { consulta, listadodeusuarios } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/dummy' , consulta )
router.get('/api/usuarios' , listadodeusuarios)

export default router