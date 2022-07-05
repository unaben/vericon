import { IDevice } from "../../interface";

interface EmeredComponentProps {
  devices: IDevice[];
}

const EmeredComponent = ({ devices }: EmeredComponentProps) => {
  const filteredEmeredDevice = devices.filter((device) => {
    return device.deviceType === "Emered";
  });
  const totalEmered = filteredEmeredDevice.length;

  const filteredEmeredOnline = filteredEmeredDevice.filter((emeredOnline) => {
    return emeredOnline.connectionStatus === "Online";
  });
  const totalEmeredOnline = filteredEmeredOnline.length;
  const percentageEmeredOnline = (totalEmeredOnline / totalEmered) * 100;

  const offlineEmered = totalEmered - totalEmeredOnline;

  const percentageEmeredOffline = (offlineEmered / totalEmered) * 100;

  return (
    <div className="container">
      <div className="row justify-content-center gap-3">
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Total Devices: {totalEmered}
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Offline Devices: {percentageEmeredOffline.toFixed(2)} %
        </h4>
        <h4 className="border col-md-4 rounded p-2" style={{ width: "18rem" }}>
          Online Devices: {percentageEmeredOnline.toFixed(2)} %
        </h4>
      </div>
      <div className="row justify-content-center gap-1 mt-3">
        {filteredEmeredDevice.map((device) => {
          return (
            <div
              className="col-sm-12 col-md-4 col-lg-3 mb-3 bg-body rounded"
              style={{ width: "20rem" }}
            >
              <div className="card">
                <div className="card-header">Emered Device</div>
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

export default EmeredComponent;
