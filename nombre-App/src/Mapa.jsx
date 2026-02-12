import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
const conteinerStyle ={
    width: '100%',
    height: '280px'
};
function Mapa ({lat, lng, nombre}){
    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })
    if(loadError) return <div>Error al Cargar Mapa</div>
    if(!isLoaded) return <div>Cargando ubicacion...</div>

    const center = {lat, lng}
    return(
        <div>
            <h3>{nombre}</h3>
            <GoogleMap
                mapContainerStyle={conteinerStyle}
                center={center}
                zoom={16}
            >
                <MarkerF position={center}/>
            </GoogleMap>
        </div>
    )
}
export default Mapa