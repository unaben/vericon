import React from "react";
import { IDevice } from "../../interface";

interface BmcComponentProps {
  devices: IDevice[];
}

const BmcComponent = ({ devices }: BmcComponentProps) => {
  const filteredBMCDevice = devices.filter((device) => {
    return device.deviceType === "BCM";
  });
  const totalBMCDevice = filteredBMCDevice.length;

  const filteredBmcDeviceOnline = filteredBMCDevice.filter((bmcOnline) => {
    return bmcOnline.connectionStatus === "Online";
  });
  const totalBMCDeviceOnline = filteredBmcDeviceOnline.length;
  const percentageBmcOnline = (totalBMCDeviceOnline / totalBMCDevice) * 100;

  const offlineBmcDevice = totalBMCDevice - totalBMCDeviceOnline;

  const percentageBmcDeviceOffline = (offlineBmcDevice / totalBMCDevice) * 100;

  return (
    <div className="container">
      <div className="row justify-content-center gap-3">
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Total Device: {totalBMCDevice}
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Offline Device: {percentageBmcDeviceOffline.toFixed(2)} %
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Online Device : {percentageBmcOnline.toFixed(2)} %
        </h4>
      </div>
      <div className="row justify-content-center gap-1 mt-3">
        {filteredBMCDevice.map((device) => {
          return (
            <div
              className="col-sm-12 col-md-4 col-lg-3 mb-3 bg-body rounded"
              style={{ width: "20rem" }}
            >
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-header">BMC Device</div>
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

export default BmcComponent;
