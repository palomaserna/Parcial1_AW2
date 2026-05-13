import express from 'express'
import * as controlador from './modulos/peliculas/controlador.peliculas.mjs'


const PUERTO = 3000

const app = express()

app.use(express.json())

function peticion(req, res, next) {
    console.log(req.method, req.url)
    next()
}
app.use(peticion)

app.get('/api/v1/peliculas', controlador.obtenerPeliculas)

app.get('/api/v1/peliculas/:id', controlador.obtenerPeliculaPorId)

app.get('/peliculas/destacadas', controlador.obtenerDestacadas)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})