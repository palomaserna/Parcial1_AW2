import peliculas from '../peliculas.mjs'

export function obtenerTodos() {
    return peliculas.datos
}

export function obtenerUno(id) {
    const idBuscado = Number(id)
    return peliculas.datos.filter((pelicula) => {
        return pelicula.id === idBuscado
    })
}

export function obtenerDestacadas() {
    return peliculas.datos.filter((pelicula) => {
        return pelicula.puntuacion > 8.7
    })
}