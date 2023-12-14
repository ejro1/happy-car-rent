import React, { useState, useEffect } from 'react';
import {getInboxItems} from '../Utils/DatosdaLojas';

const Ubicação = () => {
    const [ubicacionActual, setUbicacionActual] = useState({ latitude: 0, longitude: 0});

  const obtenerUbicacion = async () => {
    try {
      const position: GeolocationPosition = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      if (position && position.coords) {
        setUbicacionActual({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }
  };

  useEffect(() => {
    obtenerUbicacion();
  }, []);
  const calcularDistancia = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const radioTierra = 6371; 

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distancia = radioTierra * c;

    return distancia;
  };


  const tiendas = getInboxItems(); 

  const distanciasTiendas = tiendas.map((tienda) => {

    const distancia = calcularDistancia(
      ubicacionActual.latitude || 0,
      ubicacionActual.longitude || 0,
      tienda.latitude,
      tienda.longitude
    );

    return { nombre: tienda.name, distancia };
  });

 
 distanciasTiendas.sort((a, b) => a.distancia - b.distancia);

 return (
   <div>
     
     <p>Tua ubicação actual: Latitude {ubicacionActual.latitude.toFixed(6)}, Longitude {ubicacionActual.longitude.toFixed(6)}</p>
     <ul>
       {distanciasTiendas.map((tienda) => (
         <li key={tienda.nombre}>
           {tienda.nombre}: {tienda.distancia.toFixed(2)} km
         </li>
       ))}
     </ul>
   </div>
 );
};
export default Ubicação;
