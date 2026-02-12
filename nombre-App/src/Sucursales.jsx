import './Sucursales.css'
import Sucursal2 from './assets/walmart.png'
import Sucursal3 from './assets/sams.png'
import PropTypes from 'prop-types';
import Mapa from './Mapa';

function Sucursales (){
    return(
        <div className='Sucursales'>
            <Tarjeta name = '' description='C. Mina 168 BIS, Col la Rivera, 73080 Xicotepec de Juárez, Pue.'/>
            <Tarjeta src={Sucursal2} name = '' description='Zaragoza 188, Col Centro, 73080 Xicotepec de Juárez, Pue.'/>
            <Tarjeta src={Sucursal3} name = '' description='Lázaro Cárdenas 901, Santa Ana, 43660 Tulancingo, Hgo.'/>
        </div>
    )
}
function Tarjeta (props){
    return(
        <div className="container">
            <div className='card'>
                <div> 
                    <div className='imagenes'>
                    </div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
Sucursales.PropTypes = {
    vista: PropTypes.string.isRequired
};
export default Sucursales