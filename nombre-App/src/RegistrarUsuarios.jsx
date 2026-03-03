import "./RegistrarUsuarios.css"
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import api from "./Services/api"

function RegistrarUsuarios ({usuarioEditado, limpiarSeleccion, onActualizacionExitosa}){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        if (usuarioEditado){
            setUsername(usuarioEditado.user);
            setEmail(usuarioEditado.email);
            setPassword('');//Normalmente la contraseña no se carga poir seguridad
        }else{
            resetForm();
        }
    }, [usuarioEditado]);

    const resetForm = () => {
        setUser('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //Evita que lapagina se recarge
        const nuevoUsuario = {user, email, password};
        try {
            if(usuarioEditado){
                //LOGICA DE ACTUALIZAR (PUT)
                const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
                console.log('Usuario registrado',  respuesta.data);
                alert('¡Usuario actualizado con exito!');
                limpiarSeleccion();//limpia el estado en el padre
            }else{
                const respuesta = await api.post('/users', nuevoUsuario);
                console.log('Usuario registrado',  respuesta.data);
                alert('¡Usuario guardado con exito!');

            }
            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa(); //Refresca 
        }catch (error){
            console.error('Error al registrar:', Error);
        }
    }
        return(
            <div>
                <h2>Registrar Usuarios</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Guardar</button>
                </form>
            </div>
        )
}
export default RegistrarUsuarios;