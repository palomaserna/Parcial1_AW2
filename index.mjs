import express from 'express'
import { obtenerPeliculas, obtenerPeliculaPorId, obtenerDestacadas } from './modulos/funciones.mjs'
import { peticion } from './modulos/middlewares.mjs'

const PUERTO = 3000

const app = express()

app.use(express.json())

app.use(peticion)

app.get('/api/v1/peliculas', obtenerPeliculas)

app.get('/api/v1/peliculas/:id', obtenerPeliculaPorId)

app.get('/peliculas/destacadas', obtenerDestacadas)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})