//Interfaz para configurar el mapa


import React, { useState } from 'react';
import MapContainer from '../../core/components/MapContainer';

const MapConfigurator = () => {
  const [config, setConfig] = useState({
    styleUrl: "mapbox://styles/mapbox/streets-v11",
    center: [-3.70379, 40.41678],
    zoom: 6,
  });

  const updateConfig = (newConfig) => {
    setConfig({ ...config, ...newConfig });
  };

  return (
    <div>
      <h2>Map Configurator</h2>
      {/* Here you would have UI elements to update config */}
      <MapContainer {...config} />
    </div>
  );
};

export default MapConfigurator;
