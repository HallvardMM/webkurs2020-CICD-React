import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [style, setStyle] = useState("streets-v11");
  const [firstrun, setFirstRun] = useState(true);

  const toggleStyle = () => {
    console.log(style)
    if (style === "streets-v11") {
      setStyle("light-v10")
    }
    else if (style === "light-v10") {
      setStyle("dark-v10")
    }
    else if (style === "dark-v10") {
      setStyle("satellite-v9")
    }
    else if (style === "satellite-v9") {
      setStyle("streets-v11")
    }
    else {
      setStyle("streets-v11")
    }
  }

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [10.408773, 63.422091],
        zoom: 10
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    setFirstRun(false)
  }, [map, style]);

  useEffect(() => {
    if (!firstrun) {
      map.setStyle(`mapbox://styles/mapbox/${style}`);
    }
  }, [style]);

  return (<div>
    <button onClick={() => toggleStyle()}>{style}</button>
    <div ref={el => (mapContainer.current = el)} style={styles} />
  </div>)
};

export default MapboxGLMap;