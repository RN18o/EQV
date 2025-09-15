import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import EarthquakeMap from "./components/Earthquake";
import "./App.css"

export default function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [plates, setPlates] = useState(null);
  const [timeRange, setTimeRange] = useState("day");

  // API map
  const apiMap = {
    hour: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
    day: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
    week: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
    month: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
  };

  // Fetch Earthquakes when timeRange changes
  useEffect(() => {
    fetch(apiMap[timeRange])
      .then((res) => res.json())
      .then((data) => setEarthquakes(data.features))
      .catch((err) => console.error(err));
  }, [timeRange]);

  // Fetch Tectonic Plates once
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"
    )
      .then((res) => res.json())
      .then((data) => setPlates(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header timeRange={timeRange} setTimeRange={setTimeRange} />
      <div className="flex-1 relative">
        <EarthquakeMap earthquakes={earthquakes} plates={plates} />
      </div>
    </div>
  );
}
