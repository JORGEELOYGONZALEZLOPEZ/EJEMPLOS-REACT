import './Encabezado.css'
import imagen1 from './assets/goku.png'
import imagen2 from './assets/goku1.png'
import imagen3 from './assets/goku2.png'
function Cuerpo(){
    return(
        <div className='cuerpo'>
            <Tarjeta src={imagen1} name = 'Goku' description='Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.'/>
            <Tarjeta src={imagen2} name = 'Goku' description='Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.'/>
            <Tarjeta src={imagen3} name = 'Goku' description='Un Saiyajin criado en la Tierra, famoso por su cabello negro alborotado, fuerza sobrehumana y corazón puro.'/>
        </div>
    )
}
function Tarjeta(props){
    return(
        <div className='interior'>
            <div> 
                <div className='imagenes'>
                    <img src={props.src} alt="logotipo"/>
                </div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Cuerpo