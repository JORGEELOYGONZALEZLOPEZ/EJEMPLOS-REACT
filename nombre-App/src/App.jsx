import Encabezado from "./encabezado"
import Cuerpo from "./Cuerpo"
import './Encabezado.css'
import Footer from "./Footer"
import { useState } from "react";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="body">
      <Encabezado cambiarVista={setVista}/>
      <Cuerpo vista={vista}/>
      <Footer/>
    </div>
  )
}
export default App;