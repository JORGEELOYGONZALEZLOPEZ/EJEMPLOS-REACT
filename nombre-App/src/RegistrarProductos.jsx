import "./RegistrarProductos"
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import api from "./Services/api"

function RegistrarProductos ({productoEditado, limpiarSeleccion, onActualizacionExitosa}){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    useEffect(() =>{
            if (productoEditado){
                setTitle(productoEditado.title);
                setPrice(productoEditado.price);
                setDescription(productoEditado.description);
                setCategory(productoEditado.category);
                setImage(productoEditado.image);
            }else{
                resetForm();
            }
        }, [productoEditado]);
    
        const resetForm = () => {
            setTitle('');
                setPrice('');
                setDescription('');
                setCategory('');
                setImage('');
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = {title, price, description, category, image};
        try {
            if(productoEditado){
                //LOGICA DE ACTUALIZAR (PUT)
                const respuesta = await api.put(`/products/${productoEditado.id}`, nuevoProducto);
                console.log('Producto registrado',  respuesta.data);
                alert('¡Producto actualizado con exito!');
                limpiarSeleccion();//limpia el estado en el padre
            }else{
                const respuesta = await api.post('/products', nuevoProducto);
                console.log('Producto registrado',  respuesta.data);
                alert('¡Producto guardado con exito!');

            }
            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa(); //Refresca 
        }catch (error){
            console.error('Error al registrar:', error);
        }
    }
        return(
            <div>
                <h2>Registrar Productos</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Titulo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
}
export default RegistrarProductos;