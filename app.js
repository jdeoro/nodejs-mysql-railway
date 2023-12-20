import express from 'express'

import { PORT } from './src/config.js'
import router from './src/routes/usuarios.routes.js'

const app = express()

app.listen(PORT)
console.log("server running on port "+PORT)

app.use(router)

