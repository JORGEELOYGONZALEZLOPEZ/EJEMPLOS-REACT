import './Contactos.css'
import { useState } from "react";

function Formulario (){
    return (
        <div>
            <Contacto/>
        </div>
    )
}
function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    email: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    console.log(formData);
  };

  return (
    <div className="form-container">
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Formulario de contacto</h2>

      <label className="form-group">
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required/>
      </label>
      <br /><br />

      <label className="form-group">
        Edad:
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} required/>
      </label>
      <br /><br />

      <label className="form-group">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
      </label>
      <br /><br />

      <label className="form-group">
        Contraseña:
        <input type='password' name="mensaje" value={formData.contraseña} onChange={handleChange}/>
      </label>  
      <br /><br />

      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}
export default Formulario