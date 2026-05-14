import peliculas from '../peliculas.mjs'


// Retorna todas las peliculas 
export function obtenerTodos() {
    return peliculas.datos
}

// Busca y retorna una pelicula por id
export function obtenerUno(id) {
    const idBuscado = Number(id)
    return peliculas.datos.filter((pelicula) => {
        return pelicula.id === idBuscado
    })
}

// Retorna solo las peliculas con puntuacion mayor a 8.7 
export function obtenerDestacadas() {
    return peliculas.datos.filter((pelicula) => {
        return pelicula.puntuacion > 8.7
    })
}