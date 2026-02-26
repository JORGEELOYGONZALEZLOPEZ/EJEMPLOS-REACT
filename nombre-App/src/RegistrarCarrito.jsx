import "./RegistrarCarrito.css"
import axios from 'axios';
import React, {useState} from 'react';
import api from "./Services/api"

function RegistrarCarrito (){
    const [userId, setUserId] = useState('');
    const [productoId, setProductoId] = useState('');
    const [cantidad, setCantidad] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita que lapagina se recarge
        const nuevoCarrito = {userId, productoId, cantidad};
        try {
            const respuesta = await api.post('/carts', nuevoCarrito);
            console.log('Carrito registrado',  respuesta.data);
            alert('¡Carrito guardado con exito!');
            setUserId(''); setProductoId(''); setCantidad('');
        }catch (error){
            console.error('Error al registrar:', Error);
        }
    }
        return(
            <div>
                <h2>Registrar Carrito</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="number"
                        placeholder="Id Usuario"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                    <input 
                        type="number"
                        placeholder="Id Producto"
                        value={productoId}
                        onChange={(e) => setProductoId(e.target.value)}
                        required
                    />
                    <input 
                        type="number"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        required
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
}
export default RegistrarCarrito;