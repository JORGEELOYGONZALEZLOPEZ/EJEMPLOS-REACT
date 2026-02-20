import miImagen from './assets/logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import youtube from './assets/youtube.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png'
import './Encabezado.css'
import PropTypes from 'prop-types';
import Clima from './Clima';
function Encabezado ({cambiarVista}){
    return (
        <div className='encabezado'>
            <Logotipo/>
            <Menu cambiarVista={cambiarVista}/>
            <Redes/>
        </div>
    )
}
function Logotipo(){
    return (
        <div className='Logo'>
            <img src={miImagen} alt="logotipo"/>
        </div>
    )
}
function Menu({cambiarVista}){
    return(
        <nav className='menu'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Contactos")}>Contactos</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
            </ul>
        </nav>
    )
}
function Redes(){
    return(
        <div className='redes'>
            <ul>
                <li><img src={facebook} alt="facebook"/></li>
                <li><img src={instagram} alt="instagram"/></li>
                <li><img src={whatsapp} alt="whatsapp"/></li>
                <li><img src={youtube} alt="youtube"/></li>
                <li><img src={linkedin} alt="linkedin"/></li>
                <li><img src={gmail} alt="gmail"/></li>
            </ul>
            <Clima/>
        </div>
    )
}

Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};
Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;