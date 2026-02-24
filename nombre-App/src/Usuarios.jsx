import api from "./Services/api";
import { useEffect, useState } from "react";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true); // Corregido: sin corchetes

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await api.get("users");
                setUsuarios(response.data);
            } catch (error) {
                console.error("Error al obtener usuarios: ", error);
            } finally {
                setLoading(false);
            }
        };
        obtenerUsuarios();
    }, []);

    if (loading) return <p>Cargando...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Lista de Clientes</h1>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4" }}>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{`${user.name.firstname} ${user.name.lastname}`}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td style={{ textAlign: "center" }}>
                                <button style={{ cursor: "pointer" }}>📝 Editar</button>
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <button style={{ cursor: "pointer", color: "red" }}>🗑️ Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;
