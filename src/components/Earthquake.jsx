import React from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  LayersControl,
  LayerGroup,
  ScaleControl,
  GeoJSON,
} from "react-leaflet";
import Legend from "./Legend";

export default function EarthquakeMap({ earthquakes, plates }) {
  const getColor = (mag) => {
    return mag >= 7
      ? "#ff0000"
      : mag >= 5
      ? "#ff4500"
      : mag >= 3
      ? "#ffa500"
      : mag >= 2
      ? "#ffff00"
      : mag >= 1
      ? "#9acd32"
      : "#00ff00";
  };

  return (
    <MapContainer center={[20, 0]} zoom={3} className="absolute inset-0 h-full w-full">
      <LayersControl position="topright">
        {/* Base Maps */}
        <LayersControl.BaseLayer checked name="CartoDB.Positron">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Google Streets">
          <TileLayer url="http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Google Satellite">
          <TileLayer url="http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />
        </LayersControl.BaseLayer>

        {/* Tectonic Plates */}
        {plates && (
          <LayersControl.Overlay name="Tectonic Plates">
            <LayerGroup>
              <GeoJSON data={plates} style={{ color: "orange", weight: 2 }} />
            </LayerGroup>
          </LayersControl.Overlay>
        )}

        {/* Earthquakes */}
        <LayersControl.Overlay checked name="Earthquakes">
          <LayerGroup>
            {earthquakes.map((eq, i) => {
              const [lon, lat] = eq.geometry.coordinates;
              const mag = eq.properties.mag;
              return (
                <CircleMarker
                  key={i}
                  center={[lat, lon]}
                  radius={mag * 2}
                  fillColor={getColor(mag)}
                  color="#000"
                  weight={0.5}
                  fillOpacity={0.8}
                >
                  <Popup>
                    <div className="text-sm">
                      <p className="font-bold">{eq.properties.place}</p>
                      <p>Magnitude: {mag}</p>
                      <p>Time: {new Date(eq.properties.time).toLocaleString()}</p>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>

         <ScaleControl position="bottomleft" imperial={true} metric={true} />
      {/* Legend works now */}
      <Legend />
    </MapContainer>
  );
}
