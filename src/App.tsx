import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getData } from "./apiHooks";
import BmcComponent from "./components/bmcComponent/BmcComponent";
import EmeredComponent from "./components/emeredComponent/EmeredComponent";
import NetworkingComponent from "./components/networkingComponent/NetworkingComponent";
import AllDevices from "./components/allDevices/AllDevices";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = (): JSX.Element => {
  const [devices, apiData] = getData();
  const [active, setActive] = useState<number | string>("");

  useEffect(() => {
    apiData();
  }, [apiData]);

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
