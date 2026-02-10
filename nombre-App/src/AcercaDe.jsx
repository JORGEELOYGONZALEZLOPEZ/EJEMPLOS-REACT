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
                <p>Somos una empresa dedicada a ofrecer productos y servicios de calidad, enfocándonos siempre en la satisfacción de nuestros clientes. Desde nuestros inicios, hemos trabajado con el compromiso de mejorar continuamente, adaptándonos a las nuevas tendencias y necesidades del mercado.
Nuestro equipo está formado por personas apasionadas, responsables y creativas, que creen en el trabajo en equipo y en la innovación como pilares fundamentales para el crecimiento. Buscamos construir relaciones basadas en la confianza, el respeto y la excelencia.</p>
        </div>
    )
}
export default AcercaDe