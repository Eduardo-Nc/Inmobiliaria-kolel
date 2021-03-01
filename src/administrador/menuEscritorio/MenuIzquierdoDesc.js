import React, { Fragment} from 'react';
import './MenuIzquierdoDesc.css'; 
import {NavLink} from 'react-router-dom';

const MenuIzquierdoDesc = () =>{

    
    return(
        <Fragment>
            <div className="contenedor-principal-menu-IzquierdoDesc">
                <ul >
                    <li  ><NavLink activeClassName="activo"  to="/tablero"> Inicio</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/propiedades"> Propiedades</NavLink></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default MenuIzquierdoDesc;