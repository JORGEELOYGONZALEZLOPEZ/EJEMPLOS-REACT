import Mapa from './Mapa'
import './Encabezado.css'
function Card1 (props){
    let user = props 
    console.info(user)
    if(user.name!="") {
    return(
        <div className="card1">
            <h3>Seccion de promociones</h3>
            <p>En esta seccion se da a conocer la informacion correspondiente a las promociones</p>
            <Mapa
            lat={20.237889239373047} 
            lng={-97.95704487566034}
            nombre={"ServiTec Sucursal Centro"}/>

        </div>
    )
    }
    return (
        <div><h3>No hay datos</h3></div>
    )
}
export default Card1