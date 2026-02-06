import './AcercaDe.css'
import Goku from "./assets/gokuportada.jpg"

function AcercaDe (){
    return(
        <div>
            <Acerca/>
        </div>
    )
}
function Acerca(){
    return(
        <div className="conteiner">
                <h1>Acerca de nosotros</h1>
                <img src={Goku} alt="" />
        </div>
    )
}
export default AcercaDe