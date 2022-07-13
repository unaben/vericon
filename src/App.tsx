import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UseFetch from "./hooks/useFetch";
import BmcComponent from "./components/bmcComponent/BmcComponent";
import EmeredComponent from "./components/emeredComponent/EmeredComponent";
import NetworkingComponent from "./components/networkingComponent/NetworkingComponent";
import AllDevices from "./components/allDevices/AllDevices";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { IDevice } from "./interface";

const App: React.FC = () => {
  const [active, setActive] = useState<number | string>("");
  const URL = `${process.env.REACT_APP_FETCH_URL}/devices`;
  const [fetchData, loading] = UseFetch<IDevice[]>(URL, []);

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <Header devices={fetchData} setActive={setActive} />
      {active === "" && <AllDevices devices={fetchData} />}
      {active === 0 && <BmcComponent devices={fetchData} />}
      {active === 1 && <EmeredComponent devices={fetchData} />}
      {active === 2 && <NetworkingComponent devices={fetchData} />}
      <Footer />
    </div>
  );
};

export default App;
