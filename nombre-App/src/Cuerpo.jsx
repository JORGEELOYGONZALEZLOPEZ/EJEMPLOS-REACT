import './Encabezado.css'
import imagen1 from './assets/goku.png'
import imagen2 from './assets/goku1.png'
import imagen3 from './assets/goku2.png'
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
                <div className='imagenes'>
                    <img src={imagen1} alt="logotipo"/>
                </div>
                <h3>Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.</h3>
            </div>
            <div>
                <div className='imagenes'>
                    <img src={imagen2} alt="logotipo"/>
                </div>
                <h3>Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.</h3>
            </div>
            <div>
                <div className='imagenes'>
                    <img src={imagen3} alt="logotipo"/>
                </div>
                <h3>Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.</h3>
            </div>
        </div>
    )
}
export default Cuerpo