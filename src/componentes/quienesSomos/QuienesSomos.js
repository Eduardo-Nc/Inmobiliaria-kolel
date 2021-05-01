import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './QuienesSomos.css';


const QuienesSomos = () => {
    return (
        <Fragment>
            <div className="contenedor-principal-quienes-somos">

                <div className="contenido-quienes-somos">
                    <h1>¡ASEGURA, CREA Ó INVIERTE CON LA MEJOR OPCIÓN!</h1>
                    <p>
                        En <strong style={{ fontSize:'22px'}}>Inmobiliaria Koolel Kaab</strong> estamos comprometidos para ayudar a nuestros clientes a invertir en los  desarrollos inmobiliarios más prósperos y sobresalientes.
                    </p>
                    
                    <Link to="/nosotros">
                        <h2>
                            Conócenos
                        </h2>
                    </Link>


                </div>

            </div>
        </Fragment>
    )
}

export default QuienesSomos;