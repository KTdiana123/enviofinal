export async function servicioCanciones(){

    const URI="https://api.spotify.com/v1/artists/7xeM7V59cA1X8GKyKKQV87/top-tracks?market=US"
    const TOKEN="Bearer BQBAFI9HEc0R0m4ox4CfvCYVsbrlQg8-TEZFkXjxWV5c_V25jppqkCsoJ_aLiIKf2j3OtAAKHXW6x3V0LYO8yFT2aQyvncK8egt7MT2HHXaUY1p-i31U4FTLz70OZeZODDfqVArYRkD3MSmQNBps2_qDQ3jEZaS3psAWQnB39-oAYc0uTKn6uJQv2hp_S6M"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
   
    let respuesta= await fetch(URI,PETICION)
    let canciones= await respuesta.json()

    return canciones

}