import './Encabezado.css'
import imagen from './assets/goku3.png'
function Card1 (){
    return(
        <div className="card1">
            <Imagen/>
        </div>
    )
}
function Imagen (){
    return(
        <div id='card2'>
            <img src={imagen} alt="img" />
        </div>
    )
}
export default Card1