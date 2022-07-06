import React from "react";
import { IDevice } from "../../interface";

interface AllDevicesProps {
  devices: IDevice[];
}
const AllDevices: React.FC<AllDevicesProps> = ({ devices }) => {
  return (
    <div className="container">
      <div className="row justify-content-center gap-1 mt-3">
        {devices.map((device) => {
          return (
            <div
              className="col-sm-12 col-md-4 col-lg-3 mb-3 bg-body rounded"
              style={{ width: "20rem" }}
            >
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-header">All Devices</div>
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
export default AllDevices;
