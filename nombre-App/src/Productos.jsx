import api from "./Services/api";
import { useEffect, useState } from "react";
import './Productos.css';

function Productos(){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try{
                const response = await api.get("products");
                setProductos(response.data);
            }catch (error) {
                console.error("Error al obtener productos: ", error);
            }finally {
                setLoading(false);
            }
        };
        obtenerProductos();
    }, []);
    if (loading) return <p>Cargando...</p>;

        return(
            <div>
                <main className="classMain">
                    <header>
                        <h1>Nuestro Catalogo Tecnologico</h1>
                    </header>

                    {productos.map((producto) =>(
                        <article key={producto.id} className="classArticle">
                            <img
                                src={producto.image}
                                alt={producto.title}
                            />
                            <span>
                                {producto.category}
                            </span>
                            <h2>{producto.name}</h2>
                            <p>{producto.description}</p>
                            <h2>
                                {producto.price}
                            </h2>
                            <button>añadir al carrito</button>
                        </article>
                    ))}
                </main>
            </div>
        )
}
export default Productos;