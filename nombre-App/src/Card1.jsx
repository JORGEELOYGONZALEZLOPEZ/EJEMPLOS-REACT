import { APIProvider, Map, AdvancedMarket, Pin } from '@vis.gl/react-google-maps';
import './Encabezado.css'
function Card1 (props){
    const position = {lat: 20.285588185550335, ing:-97.95979875213513}
    let user = props 
    console.info(user)
    if(user.name!="") {
    return(
        <div className="card1">
            <h3>Seccion de promociones</h3>
            <p>En esta seccion se da a conocer la informacion correspondiente a las promociones</p>
        </div>
    )
    }
    return (
        <div><h3>No hay datos</h3></div>
    )
}
export default Card1