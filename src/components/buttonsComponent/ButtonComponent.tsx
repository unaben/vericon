import React from "react";
import { IDevice } from "../../interface";

interface ButtonProps {
  devices: IDevice[];
  setActive: (index: number | string) => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ devices, setActive }) => {
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
    <div className="d-grid gap-2 d-lg-flex justify-content-center align-items-center justify-content-md-end">
      <div>
        <button
          className=" btn btn-outline-light py-2"
          style={{ width: "8rem", height: "2rem" }}
          onClick={() => {
            setActive("");
          }}
        >
          All Devices
        </button>
      </div>
      {uniqueDeviceTypes.map((type, index) => {
        return (
          <div>
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ width: "10rem", height: "2rem" }}
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
  );
};

export default ButtonComponent;
