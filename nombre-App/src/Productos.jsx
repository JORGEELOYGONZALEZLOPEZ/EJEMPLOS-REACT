import './Productos.css'
import Producto1 from './assets/producto1.png'
import Producto2 from './assets/producto2.png'

function Productos (){
    return(
        <div>
            <Contenedor/>
            <Contenedor2/>
        </div>
    )
}
function Contenedor (){
    return(
        <div className="container">
            <div className='productos'>
                <img className="imagenes" src={Producto1} alt="productos" />
                <h2>$ 298.00</h2>
                <h3>Shampoo Con Cera Carnauba Espuma Activa Hidrofobico 4 Lts</h3>
                <button>Comprar</button>
            </div>
            <div className='productos'>
                <img className="imagenes2" src={Producto2} alt="productos" />
                <h2>$ 298.00</h2>
                <h3>Shampoo Con Cera Carnauba Espuma Activa Hidrofobico 4 Lts</h3>
                <button>Comprar</button>
            </div>
            <div className='productos'>
                <img className="imagenes" src={Producto1} alt="productos" />
                <h2>$ 298.00</h2>
                <h3>Shampoo Con Cera Carnauba Espuma Activa Hidrofobico 4 Lts</h3>
                <button>Comprar</button>
            </div>
        </div>
    )
}
function Contenedor2 (){
    return(
        <div className="container">
            <div className='productos'>
                <img className="imagenes" src={Producto1} alt="productos" />
                <h2>$ 298.00</h2>
                <h3>Shampoo Con Cera Carnauba Espuma Activa Hidrofobico 4 Lts</h3>
                <button>Comprar</button>
            </div>
            <div className='productos'>
                <img className="imagenes2" src={Producto2} alt="productos" />
                <h2>$ 298.00</h2>
                <h3>Shampoo Con Cera Carnauba Espuma Activa Hidrofobico 4 Lts</h3>
                <button>Comprar</button>
            </div>
            <div className='productos'>
                <img className="imagenes" src={Producto1} alt="productos" />
                <h2>$ 298.00</h2>
                <h3>Shampoo Con Cera Carnauba Espuma Activa Hidrofobico 4 Lts</h3>
                <button>Comprar</button>
            </div>
        </div>
    )
}
export default Productos