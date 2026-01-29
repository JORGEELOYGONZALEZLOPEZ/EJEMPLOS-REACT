import './Encabezado.css'
import imagen1 from './assets/goku.png'
function Cuerpo(){
    return(
        <div className='cuerpo'>
            <Interior/>
        </div>
    )
}
function Interior(){
    return(
        <div className='interior'>
            <div>
                <img src={imagen1} alt="logotipo"/>
                <h3>un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.</h3>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Cuerpo