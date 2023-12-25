import {Router} from 'express'
import { consulta,
     listadodeusuarios,
     insertusuario,
      editusuario,
      deleteusuario } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/dummy' , consulta )
router.get('/api/usuarios' , listadodeusuarios)
router.post('/api/creausuario' , insertusuario)
router.put('/api/editusuario/:id' , editusuario)
router.delete('/api/deleteusuario/:id', deleteusuario)
export default router