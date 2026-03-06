import Encabezado from "./encabezado"
import Cuerpo from "./Cuerpo"
import './Encabezado.css'
import Footer from "./Footer"
import { useState } from "react";
import { AuthProvider } from "./AuthContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="body">
      <AuthProvider>
        <Encabezado cambiarVista={setVista}/>
        <Cuerpo vista={vista} chVista={setVista} />
      </AuthProvider>
      <Footer/>
    </div>
  )
}
export default App;