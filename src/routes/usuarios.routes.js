import {Router} from 'express'
import { consulta, listadodeusuarios,insertusuario } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/dummy' , consulta )
router.get('/api/usuarios' , listadodeusuarios)
router.post('/api/creausuario' , insertusuario)
export default router