import './Sucursales.css'
import PropTypes from 'prop-types';
import Mapa from './Mapa';

function Sucursales (){
    return(
        <div className='Sucursales'>
            <Tarjeta verMapa1={true} description='C. Mina 168 BIS, Col la Rivera, 73080 Xicotepec de Juárez, Pue.'/>
            <Tarjeta verMapa2={true} description='Zaragoza 188, Col Centro, 73080 Xicotepec de Juárez, Pue.'/>
            <Tarjeta verMapa3={true} description='Lázaro Cárdenas 901, Santa Ana, 43660 Tulancingo, Hgo.'/>
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
                        {props.verMapa1 && (
                            <div style={{ height: '200px' }}>
                                 <Mapa lat={20.17651106048606} lng={-98.0499798913436} nombre="3B" />
                            </div>
                        )}
                        {props.verMapa2 && (
                            <div style={{ height: '200px' }}>
                                 <Mapa lat={20.268900209697353} lng={-97.95525212211838} nombre="Walmart" />
                            </div>
                        )}
                        {props.verMapa3 && (
                            <div style={{ height: '200px' }}>
                                 <Mapa lat={20.076703167607523} lng={-98.38081399749058} nombre="Sam's Club" />
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
Sucursales.PropTypes = {
    vista: PropTypes.string.isRequired
};
export default Sucursales