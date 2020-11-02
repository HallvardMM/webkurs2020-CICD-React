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
  const [number, setNumber] = useState([10.5476, 59.9134]);

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
        center: number,
        zoom: 10
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    setFirstRun(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, style]);

  useEffect(() => {
    if (!firstrun) {
      map.setStyle(`mapbox://styles/mapbox/${style}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [style]);

  useEffect(() => {
    if (!firstrun) {
      console.log("number: ", number)
      map.setCenter(number);
      map.setZoom(5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (<div>
    <button onClick={() => toggleStyle()}>{style}</button>
    <button onClick={() => setNumber([Math.random() * 90 * (Math.round(Math.random()) ? 1 : -1), Math.random() * 90 * (Math.round(Math.random()) ? 1 : -1)])}>Random location</button>
    <div ref={el => (mapContainer.current = el)} style={styles} />
  </div>)
};

export default MapboxGLMap;