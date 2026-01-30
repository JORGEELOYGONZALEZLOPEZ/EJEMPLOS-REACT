import Encabezado from "./encabezado"
import Expresiones from "./expresiones"
import Cuerpo from "./Cuerpo"
import Card1 from "./Card1"
import './Encabezado.css'
import Footer from "./Footer"
function App(){
  return (
    <div className="body">
      <Encabezado/>
      <Cuerpo/>
      <Card1/>
      <Footer/>
    </div>
  )
}
export default App