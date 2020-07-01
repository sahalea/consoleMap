import React, { useState, useEffect } from "react";
import MapView from "../component/MapView";
import VehicleList from "../component/VehicleList";

import { data } from "../util/dataManagement";

const VehichleMap = () => {
  const [points, setPoints] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    setVehicle(data);
  }, []);

  /**
   * Search cars by name
   * @param {*} input
   * @returns carList
   */
  const searchCar = (input) => {
    if (input !== "" || input != null) {
      const array = data.filter((e) => e.name.toLowerCase().includes(input));
      setVehicle(array);
    } else setVehicle(data);
  };

  return (
    <div className="app-container">
      <VehicleList
        data={vehicle}
        searchEvent={(input) => searchCar(input)}
        onClick={(e) => setPoints(e)}
      />
      <MapView points={points} />
    </div>
  );
};

export default VehichleMap;
