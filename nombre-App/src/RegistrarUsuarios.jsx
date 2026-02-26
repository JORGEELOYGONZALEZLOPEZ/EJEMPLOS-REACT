import "./RegistrarUsuarios"
import axios from 'axios';
import React, {useState} from 'react';
import api from "./Services/api"

function RegistrarUsuarios (){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita que lapagina se recarge
        const nuevoUsuario = {user, email, password};
        try {
            const respuesta = await api.post('/users', nuevoUsuario);
            console.log('Usuario registrado',  respuesta.data);
            alert('¡Usuario guardado con exito!');
        }catch (error){
            console.error('Error al registrar:', Error);
        }
    }
        return(
            <div>
                <h2>Registrar Usuarios</h2>
                <form action={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Nombre de Usuario"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
}
export default RegistrarUsuarios;