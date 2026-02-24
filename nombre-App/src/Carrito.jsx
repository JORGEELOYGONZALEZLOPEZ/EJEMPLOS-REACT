import api from "./Services/api";
import { useEffect, useState } from "react";

function Carrito (){
    const [carritos, setCarritos] = useState([]);
    const [loading, setLoading] = useState(true); // Corregido: sin corchetes

    useEffect(() => {
        const obtenerCarritos = async () => {
            try {
                const response = await api.get("carts");
                setCarritos(response.data);
            } catch (error) {
                console.error("Error al obtener usuarios: ", error);
            } finally {
                setLoading(false);
            }
        };
        obtenerCarritos();
    }, []);

    if (loading) return <p>Cargando...</p>;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Lista de Carritos de Compra</h1>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4" }}>
                        <th>ID Carrito</th>
                        <th>ID Usuario</th>
                        <th>Fecha</th>
                        <th>Productos (ID: Cantidad)</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {carritos.map((cart) => (
                        <tr key={cart.id}>
                            <td>{cart.id}</td>
                            <td>Usuario #{cart.userId}</td>
                            <td>{new Date(cart.date).toLocaleDateString()}</td>
                            <td>
                                <ul>
                                    {cart.products.map((p, index) => (
                                        <li key={index}>
                                            Producto ID: <strong>{p.productId}</strong> — Cant: {p.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <button style={{ cursor: "pointer", marginRight: "5px" }}>📝 Editar</button>
                                <button style={{ cursor: "pointer", color: "red" }}>🗑️ Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Carrito;