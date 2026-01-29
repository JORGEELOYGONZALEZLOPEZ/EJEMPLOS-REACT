import miImagen from './assets/logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import youtube from './assets/youtube.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png'
import './Encabezado.css'
function Encabezado (){
    return (
        <div className='encabezado'>
            <Logotipo/>
            <Menu/>
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
function Menu(){
    return(
        <nav className='menu'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Sucursales</li>
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
        </div>
    )
}
export default Encabezado