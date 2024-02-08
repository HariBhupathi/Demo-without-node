import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios"; // Import axios

const MapComponent = () => {
  const [geoJSONData, setGeoJSONData] = useState(null);

  useEffect(() => {
    axios
      .get("ANDHRA PRADESH_NEW_DISTRICTS.geojson")
      .then((response) => {
        setGeoJSONData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON data:", error);
      });
  }, []);

  const initialCoordinates = [17.385044, 78.486671]; // Hyderabad, India coordinates
  const initialZoomLevel = 7;

  if (!geoJSONData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Andhra Pradesh</h1>
      <MapContainer
        center={initialCoordinates}
        zoom={initialZoomLevel}
        style={{ height: "800px", width: "100%" }}
      >
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <GeoJSON data={geoJSONData} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
