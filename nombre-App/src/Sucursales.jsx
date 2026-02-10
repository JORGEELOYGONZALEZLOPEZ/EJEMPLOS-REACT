import './Sucursales.css'
import Sucursal1 from './assets/3b.png'
import Sucursal2 from './assets/walmart.png'
import Sucursal3 from './assets/sams.png'

function Sucursales (){
    return(
        <div>
            <Contenedor/>
        </div>
    )
}
function Contenedor (){
    return(
        <div className="container">
            <div className='card'>
                <img className="imagenes" src={Sucursal1} alt="Sucursal" />
                <h3>Ubicada en calle #190 matamoros</h3>
            </div>
            <div className='card'>
                <img className="imagenes" src={Sucursal2} alt="Sucursal" /> 
                <h3>Ubicada en calle #170 matamoros</h3>
            </div>
            <div className='card'>
                <img className="imagenes" src={Sucursal3} alt="Sucursal" />
                <h3>Ubicada en calle #210 matamoros</h3>
            </div>
        </div>
    )
}
export default Sucursales