import Encabezado from "./encabezado"
import Cuerpo from "./Cuerpo"
import Card1 from "./Card1"
import './Encabezado.css'
import Footer from "./Footer"
function App(){
  return (
    <div className="body">
      <Encabezado/>
      <Cuerpo/>
      <Card1 name='Jorge'/>
      <Footer/>
    </div>
  )
}
export default App