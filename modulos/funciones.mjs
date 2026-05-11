import peliculas from './peliculas.mjs'

export function obtenerPeliculas(req, res) {
  
    const respuesta = {
        datos: peliculas.datos,
        url: 'http://localhost:3000/api/v1/peliculas',
        status: 200
    }
    res.status(200).json(respuesta)
}

export function obtenerPeliculaPorId(req, res) {
  
    const idBuscado = Number(req.params.id)

    const peliculasFiltradas = peliculas.datos.filter((pelicula) => {
        return pelicula.id === idBuscado
    })

    if (peliculasFiltradas.length > 0) {
        const respuesta = {
            datos: peliculasFiltradas,
            url: `http://localhost:3000/api/v1/peliculas/${idBuscado}`,
            status: 200
        }
        return res.status(200).json(respuesta)
    }

    return res.status(404).json({
        mensaje: `Película con id ${idBuscado} no encontrada`,
        status: 404
    })
}



export function obtenerDestacadas(req, res) {
 
    const peliculasDestacadas = peliculas.datos.filter((pelicula) => {
        return pelicula.puntuacion > 8.7
    })

    const respuesta = {
        datos: peliculasDestacadas,
        url: 'http://localhost:3000/peliculas/destacadas',
        status: 200
    }

    res.status(200).json(respuesta)
}
