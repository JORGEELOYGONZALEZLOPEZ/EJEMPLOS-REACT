import './Encabezado.css'
import imagen1 from './assets/goku.png'
import imagen2 from './assets/goku1.png'
import imagen3 from './assets/goku2.png'
import Card1 from "./Card1"
import PropTypes from 'prop-types';
import Formulario from './Formulario'
import Productos from './Productos'
import AcercaDe from './AcercaDe'
import Sucursales from './Sucursales'
import Usuarios from './Usuarios'

function Cuerpo({vista}){
    const vistas={
        Inicio: <Inicio/>,
        AcercaDe: <AcercaDe/>,
        Productos: <Productos/>,
        Sucursales: <Sucursales/>,
        Contactos: <Formulario/>,
        Usuarios: <Usuarios/>
    }
    return(
        <div className='ExpresionesDiv'>
            {vistas[vista] || <Inicio/>}
            </div>
    )
}

function Inicio() {
    return(
        <div className='InicioDiv'>
        <>
            <TarjetaComponent />
            <Card1 name='Jorge'/>
        </>
        </div>
    );
}

function TarjetaComponent(){
    return(
        <div className='cuerpo'>
            <Tarjeta src={imagen1} name = 'Goku' description='Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.'/>
            <Tarjeta src={imagen2} name = 'Goku' description='Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.'/>
            <Tarjeta src={imagen3} name = 'Goku' description='Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.'/>
        </div>
    )
}

function Tarjeta(props){
    return(
        <div className='interior'>
            <div> 
                <div className='imagenes'>
                    <img src={props.src} alt="logotipo"/>
                </div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
Cuerpo.PropTypes = {
    vista: PropTypes.string.isRequired
};

export default Cuerpo