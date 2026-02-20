import api from "./Services/api";
import { useEffect, useState } from "react";

function Usuarios (){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try{
                const response = await api.get("users");
                setUsuarios(response.data);
            }catch (error) {
                console.error("Error al obtener productos: ", error);
            }finally {
                setLoading(false);
            }
        };
        obtenerUsuarios();
    }, []);
    if (loading) return <p>Cargando...</p>;
        
}
export default Usuarios;