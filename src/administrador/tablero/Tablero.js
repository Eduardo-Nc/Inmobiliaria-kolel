import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Tablero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navBar/NavBar';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';

const Tablero = () => {

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
                        <MenuIzquierdo menu={menu} />
                    </div>

                    <div>
                        < MenuIzquierdoDesc />
                    </div>


                    <div className="contenedor-tablero">
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                       <h1>Tablero</h1>
                    </div>

                </div>



        </Fragment>
    )
}

export default Tablero;

