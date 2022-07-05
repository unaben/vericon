import React from "react";
import { IDevice } from "../../interface";
import "../styles/header.styles.css";

interface HeaderProps {
  devices: IDevice[];
  setActive: (index: number) => void;
}

const Header = ({ devices, setActive }: HeaderProps) => {
  const deviceTypes = devices
    .map((device) => {
      return device.deviceType;
    })
    .sort();
  // removing duplicate from the array
  const uniqueDeviceTypes = deviceTypes.filter((device, index) => {
    return deviceTypes.indexOf(device) === index;
  });
  return (
    <div className="header row mb-3">
      <h2 className="col-6"> Vericon Tech Test</h2>
      <div className="col-6">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          {uniqueDeviceTypes.map((type, index) => {
            return (
              <div className="">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg"
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {type}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
// me-md-2
