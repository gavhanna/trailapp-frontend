import React, { useRef } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

const Map = () => {
  const mapEl = useRef(null);
  return (
    <LeafletMap ref={mapEl} center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </LeafletMap>
  );
};

export default Map;
