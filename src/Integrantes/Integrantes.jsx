export function Integrantes(){
let integrantes=[
    {
        nombre:"Noel Schajris ",
        instrumento:"cantante, compositor y pianista",
        edad:"48",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/NOEL%20SCHAJRIS.jpg?alt=media&token=7f3c677f-a53d-46cb-887e-3e97b47d8812"
    },
    {
        nombre:"Leonel García ",
        instrumento:" cantautor, músico y compositor",
        edad:"47",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/LEONELGARCIA.webp?alt=media&token=72e16b86-ebc5-4219-a4b4-81fe1e80c29b"
    }
]


    return(
       <div className="row row-cols-1 row-cols-md-2 t-0 mt-5">
        {
            integrantes.map(function(integrante) {
                return (
                <>
                <div className="col mt-3 bg-dark p-5">
                    <div className="card h-100">
                        <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-100" />
                        <h4 className="text-center fw-bold">{integrante.nombre}</h4>
                        <br />
                        <h5 className="text-center">Edad: {integrante.edad}</h5>
                        <h5 className="text-center">Instrumento: {integrante.instrumento}</h5>
                    </div>
                </div>
                </>
                )
            }) 
       }
        
       </div>
    )
    }