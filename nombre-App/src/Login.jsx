import './Login.css';
import React, { useState} from 'react';
import LoginUser from "./assets/LoginUser.png"

function Login (){
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [recordar, setRecordar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí procesarías el registro (enviar a tu API)
        console.log("Datos de registro:", { usuario, password, recordar });
        alert(`¡Usuario ${usuario} registrado con éxito!`);
        setUsuario('');
        setPassword('');
    };

    const handleCancelar = () => {
        setUsuario('');
        setPassword('');
        setRecordar(false);
    };
            
    return (
        <div className="formulario-wrapper">
            <div className="form-card">
                <h2>Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Usuario</label>
                        <input 
                            type="text" 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                            placeholder="Ej. Eloy_gonzalez"
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="••••••••"
                            required 
                        />
                    </div>

                    <div className="options-group">
                        <label className="checkbox-label">
                            <input 
                                type="checkbox" 
                                checked={recordar} 
                                onChange={(e) => setRecordar(e.target.checked)} 
                            />
                            <span>Recordar contraseña</span>
                        </label>
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn-primary">Registrar</button>
                        <button type="button" className="btn-secondary" onClick={handleCancelar}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;