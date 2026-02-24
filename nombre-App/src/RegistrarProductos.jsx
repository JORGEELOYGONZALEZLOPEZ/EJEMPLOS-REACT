import "./RegistrarProductos"
import axios from 'axios';
import React, {useState} from 'react';
import api from "./Services/api"

function RegistrarProductos (){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita que lapagina se recarge
        const nuevoProducto = {title, price, description, category, image};
        try {
            const respuesta = await api.post('/products', nuevoProducto);
            console.log('Producto registrado',  respuesta.data);
            alert('¡Producto guardado con exito!');
        }catch (error){
            console.error('Error al registrar:', Error);
        }
    }
        return(
            <div>
                <h2>Registrar Productos</h2>
                <form action={handleSubmit}>
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