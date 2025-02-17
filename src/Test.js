import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import westBengalData from "./tempdata/west-bengal.geojson";
import sikkimData from "./tempdata/sikkim.geojson";
// import jharkhandData from "./tempdata/Jharkhand.geojson";
import biharData from "./tempdata/bihar.geojson";
import odishaData from "./tempdata/odisha.geojson";

const stateData = [
  { name: "West Bengal", data: westBengalData, color: "#ff4d4d" },
  { name: "Sikkim", data: sikkimData, color: "#ff99ff" },
  //   { name: "Jharkhand", data: jharkhandData, color: "#3399ff" },
  { name: "Bihar", data: biharData, color: "#99cc00" },
  { name: "Odisha", data: odishaData, color: "#ff9933" },
];

const EasternRegionMap = () => {
  const onEachFeature = (feature, layer) => {
    const state = stateData.find((s) => s.name === feature.properties.NAME_1);
    if (state) {
      layer.setStyle({
        fillColor: state.color,
        weight: 1,
        color: "black",
        fillOpacity: 0.7,
      });
      layer.on({
        mouseover: (e) => {
          e.target.setStyle({ fillOpacity: 1 });
        },
        mouseout: (e) => {
          e.target.setStyle({ fillOpacity: 0.7 });
        },
        click: () => {
          alert(`You clicked on ${state.name}`);
        },
      });
    }
  };

  return (
    <MapContainer
      center={[23.5, 86.5]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stateData.map((state) => (
        <GeoJSON
          key={state.name}
          data={state.data}
          onEachFeature={onEachFeature}
        />
      ))}
    </MapContainer>
  );
};

export default EasternRegionMap;
