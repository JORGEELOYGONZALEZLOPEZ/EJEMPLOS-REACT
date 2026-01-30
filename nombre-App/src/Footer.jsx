import './Encabezado.css'
function Footer(){
    return(
        <div className='footer'>
            <Cuerpo/>
        </div>
    )
}
function Cuerpo(){
    return(
        <div className='card3'>
            <div>
                <h2>Todos los derechos reservados</h2>
            </div>
            <div>
                <h2>Sistemas informativos integrados</h2>
            </div>
        </div>
    )
}
export default Footer