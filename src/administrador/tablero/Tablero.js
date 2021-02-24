import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Tablero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navBar/NavBar';
import axios from 'axios';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';

import users from '../../imagenes/iconos/users.png';
import casa from '../../imagenes/iconos/casa.png';


const Tablero = () => {

    const [datos, setDatos] = useState(
        [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320',
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170',
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: '66',
                date: '2009/01/12',
                salary: '$86',
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: '22',
                date: '2012/03/29',
                salary: '$433',
            },
            {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '33',
                date: '2008/11/28',
                salary: '$162',
            },
            {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: '61',
                date: '2012/12/02',
                salary: '$372',
            },
            {
                name: 'Herrod Chandler',
                position: 'Sales Assistant',
                office: 'San Francisco',
                age: '59',
                date: '2012/08/06',
                salary: '$137',
            },
            {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                office: 'Tokyo',
                age: '55',
                date: '2010/10/14',
                salary: '$327',
            },
            {
                name: 'Colleen Hurst',
                position: 'Javascript Developer',
                office: 'San Francisco',
                age: '39',
                date: '2009/09/15',
                salary: '$205',
            }
        ])

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Name',
                field: 'name',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Position',
                field: 'position',
                width: 270,
            },
            {
                label: 'Office',
                field: 'office',
                width: 200,
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'acs',
                width: 150,
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'disabled',
                width: 100,
                
            }
        ],
        rows: datos,
    });

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


                    <div className="contenedot-accesos-principal-tablero">

                        <Link to="/usuarios" title="Cantidad de usuarios" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Usuarios</h2>
                            </div>

                            <div className="contenedor-accesos-detalles">
                                <div>
                                    <h3>100</h3>
                                </div>

                                <div>
                                    <img src={users} alt="Usuarios" title="Usuarios" />
                                </div>
                            </div>
                        </Link>


                        <Link to="/propiedades" title="Cantidad de usuarios" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Propiedades</h2>
                            </div>

                            <div className="contenedor-accesos-detalles">
                                <div>
                                    <h3>50</h3>
                                </div>

                                <div>
                                    <img src={casa} alt="Propiedades" title="Propiedades" />
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="contenedor-tabla" >
                        <button>Editar <i className="fas fa-pen"></i></button>
                        <MDBDataTableV5 className="tablas"
                            hover
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={datatable}
                            checkbox
                            headCheckboxID='id2'
                            bodyCheckboxID='checkboxes2'
                            getValueCheckBox={(e) => {
                                console.log(e);
                            }}
                            fullPagination 
                            
                            
                        />

                    </div>


                </div>

            </div>



        </Fragment>
    )
}

export default Tablero;

