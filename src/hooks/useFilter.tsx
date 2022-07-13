import UseFetch from "./useFetch";
import { IDevice } from "../interface";

export const useFilter = () => {
  const URL = `${process.env.REACT_APP_FETCH_URL}/devices`;
  const [fetchData] = UseFetch<IDevice[]>(URL, []);

  const filteredNetWorkingDeviceType = fetchData.filter((device) => {
    return device.deviceType === "Neworking";
  });
  const totalNetworkDevice = filteredNetWorkingDeviceType.length;

  const filteredNetworkingDeviceOnline = filteredNetWorkingDeviceType.filter(
    (device) => {
      return device.deviceStatus === "active";
    }
  );
  const totalNetworkDeviceOnline = filteredNetworkingDeviceOnline.length;
  return {
    totalNetworkDevice,
    totalNetworkDeviceOnline,
    filteredNetWorkingDeviceType,
  };
};
