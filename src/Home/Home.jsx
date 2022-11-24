import'./Home.css'
import { Footer } from '../Footer/Footer.jsx'
export function Home(){

    return(
        <>
        
            <img src="https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/sin_bandera.webp?alt=media&token=b3d3a608-710b-4e6a-818b-74df57914fd4" 
            alt="banner" className="w-100 img-fluid"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 Ttext-center">
                            <h1>SIN BANDERA</h1>
                            <p>
                            Sin Bandera es un dúo argentino-mexicano formado por el argentino Noel Schajris y el mexicano Leonel
                            García en 2000. Se separaron por única vez en 2008, volviéndose a juntar en noviembre de 2015 para 
                            realizar una gira de conciertos.​​ 
                            <hr/>

                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/consiero.jpg?alt=media&token=94e17ec8-8db0-47b8-96bb-c4fda3414c61" alt="live" className="w-100 img-fluid"/>
                        </div>
                        <div className="col-12 col-md-4 align-self-center">
                            <p>
                            Leonel García tenía la idea de lanzarse como solista; sin embargo, su proyecto era rechazado por las discográficas. Al mismo tiempo, Noel Schajris debutó en 1991 como solista y luego 8 años más tarde con su álbum debut Cita en las nubes en 1999. El nombre Sin Bandera surgió por una ocasión en que García y Schajris iban en auto sobre una avenida principal por la Ciudad de México, al pasar por el campo ecuestre llamado Campo Marte, lugar que siempre luce una bandera de México, ese día solo se encontraba el mástil.3​
                            
Empezaron a escribir y grabar su álbum debut homónimo, Sin Bandera siendo lanzado al mercado el 26 de marzo de 2002, con la producción de Áureo Baqueiro.[cita requerida] En 2001 se lanzó el primer sencillo titulado «Entra en mi vida». Este fue usado como tema de la telenovela mexicana de TV Azteca Cuando seas mía (2001-2002), remake de la telenovela colombiana Café, con aroma de mujer.[cita requerida] Para la promoción del disco se lanzaron «Kilómetros» y «Sirena», como segundo y tercer sencillo del álbum.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
      
        </>
    )
}