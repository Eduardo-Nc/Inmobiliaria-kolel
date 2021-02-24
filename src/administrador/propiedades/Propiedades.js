import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Propiedades.css';

import NavBar from '../navBar/NavBar';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';

const Propiedades = () => {

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [menu, setMenu] = useState(true);

    const abrirMenu = () => {
        setMenu(!menu);
    }


    return (
        <Fragment>
            {!cookies.get('correo_usuario') && <Redirect to="/iniciar-sesion" />}

            <NavBar menu={menu} setMenu={setMenu} abrirMenu={abrirMenu} />

            <div className="contenedor-principal-tablero">

                <div>
                    <MenuIzquierdo menu={menu} abrirMenu={abrirMenu} />
                </div>

                <div>
                    < MenuIzquierdoDesc />
                </div>


                <div className="contenedor-tablero">

                    <h1>Propiedades</h1>
                    
                </div>

            </div>
        </Fragment>
    )
}

export default Propiedades;