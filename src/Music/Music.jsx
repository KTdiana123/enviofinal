import {servicioCanciones} from '../services/servicioCanciones.js'


// necesito usar el hokk ussestate
// para almacenal la respuesta de la forma global 

import { useState,useEffect } from 'react'

export function Music(){



    // creando mi primer usestate
    const[canciones, setCanciones]=useState(null)
    const[estamosCargando, setEstamosCargando]=useState(true)

    //usando mi primer USEEFFECT
    useEffect(function(){

        servicioCanciones()
        .then(function(respuesta){
            setCanciones(respuesta)
            setEstamosCargando(false)
        })
    


    },[])

    
if(estamosCargando){
return(
    <>
    <h1>
        estamos cargando..
    </h1>
    </>
)
}else{
    return(
        <>
        <h1>
            estan listas las canciones
          
        </h1>
        {console.log(canciones)}
        {
            
            canciones.tracks.map(function(cancion){
                return(
                    <>
                    <div className="col nt-3 bg-dark p-5">
                        <div className="card h-100">
                            <audio src={cancion.preview_url} className="w-100" controls></audio>
                            <img src={cancion.album.images[0].url} alt="foto" className="img-fluid w-100 h-100" />
                            <h4 className="text-center fw-bold">{cancion.name}</h4>
                            <br />
                        </div>
                    </div>
                    </>
               
                )
            })
        }
        </>
    )
}

}