import { useState, useEffect } from "react";

import "./styles/global.css";
import { cardStyles } from "./styles/card";

import { DeviceContextProvider, TDeviceType } from "./context/deviceContext";

import Card from "./card";

import { historicalDates } from "./data";

const detectCurrentDeviceType = () => {
  if (window.innerWidth < cardStyles.desktop.width) {
    return "mobile";
  } else {
    return "desktop";
  }
};

const App = () => {
  const [deviceType, setDeviceType] = useState<TDeviceType>(detectCurrentDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(detectCurrentDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      <DeviceContextProvider type={deviceType}>
        <Card data={historicalDates} />
      </DeviceContextProvider>
    </div>
  );
};

export default App;
