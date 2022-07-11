import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { apiData } from "./apiHooks";
import BmcComponent from "./components/bmcComponent/BmcComponent";
import EmeredComponent from "./components/emeredComponent/EmeredComponent";
import NetworkingComponent from "./components/networkingComponent/NetworkingComponent";
import AllDevices from "./components/allDevices/AllDevices";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import { IDevice } from "./interface";

const App: React.FC = () => {
  const [devices, setDevices] = useState<any>([]);
  const [active, setActive] = useState<number | string>("");

  useEffect(() => {
    const getData = async () => {
      const resData = await apiData();
      setDevices(resData);
    };
    getData();
  }, []);

  return (
    <div>
      <Header devices={devices} setActive={setActive} />
      {active === "" && <AllDevices devices={devices} />}
      {active === 0 && <BmcComponent devices={devices} />}
      {active === 1 && <EmeredComponent devices={devices} />}
      {active === 2 && <NetworkingComponent devices={devices} />}
      <Footer />
    </div>
  );
};

export default App;
