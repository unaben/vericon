import React from 'react'
import { IDevice } from "../../interface";

interface NetworkingComponentProps {
  devices: IDevice[];
}

const NetworkingComponent: React.FC<NetworkingComponentProps> = ({ devices }) => {
  const filteredNetWorkingDeviceType = devices.filter((device) => {
    return device.deviceType === "Networking";
  });
  const totalNetworkDevice = filteredNetWorkingDeviceType.length;

  const filteredNetworkingDeviceOnline = filteredNetWorkingDeviceType.filter(
    (device) => {
      return device.connectionStatus === "Online";
    }
  );
  const totalNetworkDeviceOnline = filteredNetworkingDeviceOnline.length;
  const percentageNetworkDeviceOnline =
    (totalNetworkDeviceOnline / totalNetworkDevice) * 100;

  const offlineNetworkDevice = totalNetworkDevice - totalNetworkDeviceOnline;

  const percentageNetworkDeviceOffline =
    (offlineNetworkDevice / totalNetworkDevice) * 100;
  return (
    <div className="container">
      <div className=" row justify-content-center gap-3">
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Total Devices: {totalNetworkDevice}
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Offline Devices: {percentageNetworkDeviceOffline.toFixed(2)} %
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Online Devices: {percentageNetworkDeviceOnline.toFixed(2)} %
        </h4>
      </div>
      <div className="row justify-content-center gap-1 mt-3">
        {filteredNetWorkingDeviceType.map((device) => {
          return (
            <div
              className="col-sm-12 col-md-4 col-lg-3 mb-3 bg-body rounded"
              style={{ width: "20rem" }}
            >
              <div className="card">
                <div className="card-header">Networking Device</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" key={device.id}>
                    Name : {device.name}
                  </li>
                  <li className="list-group-item">Status : {device.status}</li>
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

export default NetworkingComponent;
