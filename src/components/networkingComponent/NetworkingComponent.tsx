import React from "react";
import { IDevice } from "../../interface";
import {
  devicePercentageOffline,
  devicePercentageOnline,
} from "../../hooks/useFetch";
// import { useFilter } from "../../hooks/useFilter";


interface NetworkingComponentProps {
  devices: IDevice[];
}

// const NetworkingComponent: React.FC = () => {
// const {totalNetworkDeviceOnline, 
//   totalNetworkDevice, 
//   filteredNetWorkingDeviceType
// } = useFilter()


const NetworkingComponent: React.FC<NetworkingComponentProps> = ({
  devices,
}) => {
  const filteredNetWorkingDeviceType = devices.filter((device) => {
    return device.deviceType === "Neworking";
  });
  const totalNetworkDevice = filteredNetWorkingDeviceType.length;

  const filteredNetworkingDeviceOnline = filteredNetWorkingDeviceType.filter(
    (device) => {
      return device.deviceStatus === "active";
    }
  );
  const totalNetworkDeviceOnline = filteredNetworkingDeviceOnline.length;

  const onlineDevices = devicePercentageOnline(
    totalNetworkDeviceOnline,
    totalNetworkDevice
  );
  const offLineDevices = devicePercentageOffline(
    totalNetworkDeviceOnline,
    totalNetworkDevice
  );
  return (
    <div className="container min-vh-100">
      <div className=" row justify-content-center gap-3">
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Total Devices: {totalNetworkDevice}
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Offline Devices: {offLineDevices.toFixed(2)} %
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Online Devices: {onlineDevices.toFixed(2)} %
        </h4>
      </div>
      <div className="row gap-1 mt-3">
        {filteredNetWorkingDeviceType.map((device) => {
          return (
            <div
              className=" col col-sm-6 col-md-3  mb-2 bg-body rounded"
              style={{ width: "20rem" }}
            >
              <div className="card" style={{ width: "19rem" }}>
                <div className="card-header">Networking Device</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" key={device.id}>
                    Name : {device.deviceName}
                  </li>
                  <li className="list-group-item">
                    Status : {device.deviceStatus}
                  </li>
                  <li className="list-group-item">
                    Serial Number: {device.serialNumber}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NetworkingComponent

