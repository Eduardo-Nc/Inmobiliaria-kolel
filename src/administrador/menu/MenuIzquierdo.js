import React, { Fragment} from 'react';
import './MenuIzquierdo.css'; 
import {NavLink} from 'react-router-dom';

const MenuIzquierdo = ({menu, abrirMenu}) =>{

    const estilosAbrir = {
        left: '0px',
        transition: '0.6s'
    }

    const estilosCerrar = {
        left: '-100%',
        transition: '1s'
    }


    return(
        <Fragment>
            <div style={menu ? estilosCerrar : estilosAbrir} className="contenedor-principal-menu-izquierdo">
                <ul onClick={abrirMenu}>
                    <li  ><NavLink activeClassName="activo" to="/tablero"> Inicio</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/usuarios"> Usuarios</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/propiedades"> Propiedades</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/datos-colaboradores"> Colaboradores</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/desarrollos"> Desarrollos</NavLink></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default MenuIzquierdo;