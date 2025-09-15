import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function Legend() {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create(
        "div",
        "info legend bg-white p-4 rounded shadow text-base"
      );
      const grades = [0, 1, 2, 3, 5, 7];
      const colors = ["#00ff00", "#9acd32", "#ffff00", "#ffa500", "#ff4500", "#ff0000"];

      let labels = [];
      for (let i = 0; i < grades.length; i++) {
        labels.push(
          `<i style="background:${colors[i]}; width:20px; height:20px; display:inline-block; margin-right:4px;"></i> 
           ${grades[i]}${grades[i + 1] ? "&ndash;" + grades[i + 1] : "+"}`
        );
      }
      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
}
