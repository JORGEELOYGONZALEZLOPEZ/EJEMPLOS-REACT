import './Encabezado.css'
import MapaUbicacion from './MapaUbicacion'
function Card1 (props){
    let user = props 
    console.info(user)
    if(user.name!="") {
    return(
        <div className="card1">
            <MapaUbicacion/>
        </div>
    )
    }
    return (
        <div><h3>No hay datos</h3></div>
    )
}
export default Card1