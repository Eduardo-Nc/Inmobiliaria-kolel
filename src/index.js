import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';





const App = React.lazy(() => import('./App'));
const Descripcion = React.lazy(() => import('./vistas/descripcion/Descripcion'))
const Nosotros = React.lazy(() => import('./vistas/nosotros/Nosotros'))
const Servicios = React.lazy(() => import('./vistas/servicios/Servicios'))
const Contacto = React.lazy(() => import('./vistas/contacto/Contacto'))
const IniciarSesion = React.lazy(() => import('./vistas/iniciarSesion/IniciarSesion'))
const Tablero = React.lazy(() => import('./administrador/tablero/Tablero'))
const Propiedades = React.lazy(() => import('./administrador/propiedades/Propiedades'))
const infoLotes = React.lazy(() => import('./administrador/lotes/Lotes'))
const Usuarios = React.lazy(() => import('./administrador/usuarios/Usuarios'))
const Desarrollos = React.lazy(() => import('./administrador/desarrollos/Desarrollos'))
const Colaboradores = React.lazy(() => import('./colaboradores/colaboradores/Colaboradores'))
const Registro = React.lazy(() => import('./colaboradores/registro/Registro'))
const Informacion = React.lazy(() => import('./colaboradores/informacion/Informacion'))
const Disponibilidad = React.lazy(() => import('./colaboradores/disponibilidad/Disponibilidad'))
const Cotizador = React.lazy(() => import('./colaboradores/cotizador/Cotizador'))
const DashboardInv = React.lazy(() => import('./administrador/inventario/Dashboard'))
const Materiales = React.lazy(() => import('./administrador/inventario/Materiales'))
const Obras = React.lazy(() => import('./administrador/inventario/Obras'))
const RegistroMateriales = React.lazy(() => import('./administrador/inventario/Registro'))
const RegistroUsuariosM = React.lazy(() => import('./administrador/inventario/UsuariosM'))
const Blog = React.lazy(() => import('./vistas/blog/Blog'))
const BlogDetalles = React.lazy(() => import('./vistas/blogDetalles/BlogDetalles'))
const AddBlogs = React.lazy(() => import('./administrador/blogs/Blogs'))
const Seguimiento = React.lazy(() => import('./administrador/seguimiento/Seguimiento'))
const Ventas = React.lazy(() => import('./administrador/seguimiento/Ventas'))
const DetallesSeguimiento = React.lazy(() => import('./administrador/seguimiento/DetallesSeguimiento'))



const DatosCola = React.lazy(() => import('./administrador/datosColaboradores/DatosColaboradores'))



//Localhost
// window.$baseUrl = "http://192.168.1.82:30020";


//heroku
window.$baseUrl = "https://api-inmobiliaria-koolelkaab.herokuapp.com";


//ruta de nube
window.$nubeUrl = "https://res.cloudinary.com/hwvbw3vrx/image/upload/v1620142812/";



const Index = () => {
  return (
    <Router>
      <React.Suspense fallback={<div style={{ width: '100wv', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
          <span className="sr-only"></span>
        </div>
      </div>} >
        <Route exact path="/" component={App} />
        <Route path="/inicio" component={App} />
        <Route path="/descripcion/:id" component={Descripcion} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/iniciar-sesion" component={IniciarSesion} />
        <Route path="/tablero" component={Tablero} />
        <Route path="/propiedades" component={Propiedades} />
        <Route path="/info-lotes" component={infoLotes} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/desarrollos" component={Desarrollos} />
        <Route path="/colaboradores" component={Colaboradores} />
        <Route path="/registro-colaboradores" component={Registro} />
        <Route path="/informacion" component={Informacion} />
        <Route path="/disponibilidad" component={Disponibilidad} />
        <Route path="/cotizador" component={Cotizador} />
        <Route path="/datos-colaboradores" component={DatosCola} />
        <Route path="/dashboard-inventario" component={DashboardInv} />
        <Route path="/materiales" component={Materiales} />
        <Route path="/obras" component={Obras} />
        <Route path="/materiales-registro" component={RegistroMateriales} />
        <Route path="/usuarios-materiales" component={RegistroUsuariosM} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-detalles/:id" component={BlogDetalles} />
        <Route path="/add-blogs" component={AddBlogs} />
        <Route path="/seguimiento_ventas" component={Seguimiento} />
        <Route path="/ventas" component={Ventas} />
        <Route path="/detalles-seguimiento/:id" component={DetallesSeguimiento} />


      </React.Suspense>
    </Router>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'));
