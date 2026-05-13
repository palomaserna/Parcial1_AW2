import * as modelo from './modelo.peliculas.mjs'

export function obtenerPeliculas(req, res) {
    const peliculas = modelo.obtenerTodos()
    res.status(200).json({
        datos: peliculas,
        url: 'http://localhost:3000/api/v1/peliculas',
        status: 200
    })
}

export function obtenerPeliculaPorId(req, res) {
    const peliculas = modelo.obtenerUno(req.params.id)
    if (peliculas.length > 0) {
        return res.status(200).json({
            datos: peliculas,
            url: `http://localhost:3000/api/v1/peliculas/${req.params.id}`,
            status: 200
        })
    }
    return res.status(404).json({
        mensaje: `Película con id ${req.params.id} no encontrada`,
        status: 404
    })
}

export function obtenerDestacadas(req, res) {
    const peliculas = modelo.obtenerDestacadas()
    res.status(200).json({
        datos: peliculas,
        url: 'http://localhost:3000/peliculas/destacadas',
        status: 200
    })
}