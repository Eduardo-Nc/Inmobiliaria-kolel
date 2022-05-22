import React, { Fragment } from 'react';
import './MenuIzquierdoDesc.css';
import { NavLink } from 'react-router-dom';

const MenuIzquierdoDesc = () => {


    return (
        <Fragment>
            <div className="contenedor-principal-menu-IzquierdoDesc">
                <ul>
                    <li  ><NavLink activeClassName="activo" to="/tablero"> Inicio</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/ventas"> Ventas</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/seguimiento_ventas"> Seguimiento Ventas</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/usuarios"> Usuarios</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/propiedades"> Propiedades</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/datos-colaboradores"> Colaboradores</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/desarrollos"> Desarrollos</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/info-lotes"> Lotes</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/add-blogs"> Blog</NavLink></li>
                    <li  ><NavLink activeClassName="activo" to="/dashboard-inventario"> Inventario</NavLink></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default MenuIzquierdoDesc;