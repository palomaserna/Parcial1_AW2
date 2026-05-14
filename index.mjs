import express from 'express'
import * as controlador from './modulos/peliculas/controlador.peliculas.mjs'


const PUERTO = 3000

const app = express()

app.use(express.json())
// Imprime en consola el metodo http y la ruta de cada peticion entrante
function peticion(req, res, next) {
    console.log(req.method, req.url)
    next()
}
app.use(peticion)
// Ruta para obtener todas las peliculas
app.get('/api/v1/peliculas', controlador.obtenerPeliculas)
// Ruta para obtener una pelicula por id
app.get('/api/v1/peliculas/:id', controlador.obtenerPeliculaPorId)
// Ruta para obtener las peliculas destacas con puntuacion mayor a 8.7
app.get('/peliculas/destacadas', controlador.obtenerDestacadas)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})