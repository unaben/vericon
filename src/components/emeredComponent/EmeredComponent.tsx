import React from "react";
import { IDevice } from "../../interface";
import {
  devicePercentageOffline,
  devicePercentageOnline,
} from "../../hooks/useFetch";

interface EmeredComponentProps {
  devices: IDevice[];
}

const EmeredComponent: React.FC<EmeredComponentProps> = ({ devices }) => {
  const filteredEmeredDevice = devices.filter((device) => {
    return device.deviceType === "Emereld";
  });
  const totalEmered = filteredEmeredDevice.length;

  const filteredEmeredOnline = filteredEmeredDevice.filter((emeredOnline) => {
    return emeredOnline.deviceStatus === "active";
  });
  const totalEmeredOnline = filteredEmeredOnline.length;
  const onlineDevices = devicePercentageOnline(totalEmeredOnline, totalEmered);
  const offLineDevices = devicePercentageOffline(
    totalEmeredOnline,
    totalEmered
  );
  return (
    <div className="container min-vh-100">
      <div className="row justify-content-center gap-3">
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Total Devices: {totalEmered}
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Offline Devices: {offLineDevices.toFixed(2)} %
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Online Devices: {onlineDevices.toFixed(2)} %
        </h4>
      </div>
      <div className="row gap-1 mt-3">
        {filteredEmeredDevice.map((device) => {
          return (
            <div
              className="col-sm-12 col-md-4 col-lg-3 mb-2 bg-body rounded"
              style={{ width: "20rem" }}
            >
              <div className="card" style={{ width: "19rem" }}>
                <div className="card-header">Emered Device</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" key={device.id}>
                    Name : {device.deviceName}
                  </li>
                  <li className="list-group-item">Status : {device.deviceStatus}</li>
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

export default EmeredComponent;
