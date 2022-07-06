import React from 'react'
import { IDevice } from "../../interface";
import ButtonComponent from '../buttonsComponent/ButtonComponent';
import "../styles/header.styles.css";

interface HeaderProps {
  devices: IDevice[];
  setActive: (index: number | string) => void;
}

const Header: React.FC<HeaderProps> = ({ devices, setActive }) => {
  return (
    <div className="header row mb-3">
      <h2 className="col-6 col-md-4"> Vericon Tech Test</h2>
      <div className="col-6 col-md-8">
        <ButtonComponent devices={devices} setActive={setActive} />
      </div>
    </div>
  );
};

export default Header;
