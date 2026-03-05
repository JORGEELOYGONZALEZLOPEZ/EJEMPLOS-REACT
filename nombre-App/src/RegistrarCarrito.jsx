import "./RegistrarCarrito.css"
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import api from "./Services/api"

function RegistrarCarrito ({carritoEditado, limpiarSeleccion, onActualizacionExitosa}){
    const [userId, setUserId] = useState('');
    const [productId, setProducts] = useState('');
    const [quantity, setCantidad] = useState('');

    useEffect(() =>{
                if (carritoEditado){
                    setUserId(carritoEditado.userId);
                    if (carritoEditado.products && carritoEditado.products.length > 0) {
                    setProducts(carritoEditado.products[0].productId); 
                    setCantidad(carritoEditado.products[0].quantity); 
                    }
                }else{
                    resetForm();
                }
            }, [carritoEditado]);
        
            const resetForm = () => {
                    setUserId('');
                    setProducts('');
                    setCantidad('');
            };

    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita que lapagina se recarge
        const nuevoCarrito = {userId, productId, quantity};
        try {
            if(carritoEditado){
                //LOGICA DE ACTUALIZAR (PUT)
                const respuesta = await api.put(`/carts/${carritoEditado.id}`, nuevoCarrito);
                console.log('Carrito registrado',  respuesta.data);
                alert('¡Carrito actualizado con exito!');
                limpiarSeleccion();//limpia el estado en el padre
            }else{
                const respuesta = await api.post('/carts', nuevoCarrito);
                console.log('Carrito registrado',  respuesta.data);
                alert('¡Carrito guardado con exito!');

            }
            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa(); //Refresca 
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
                        value={productId}
                        onChange={(e) => setProducts(e.target.value)}
                        required
                    />
                    <input 
                        type="number"
                        placeholder="Cantidad"
                        value={quantity}
                        onChange={(e) => setCantidad(e.target.value)}
                        required
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
}
export default RegistrarCarrito;