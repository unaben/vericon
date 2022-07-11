import { IDevice } from "./interface";


export const apiData = async () => {
  const URL = `${process.env.REACT_APP_FETCH_URL}/devices`;  
  try {
    let responce = await fetch(URL);
    let resData = await responce.json();
    // setDevices(resData);
    getDeviceData(resData)
    return resData as IDevice[];
  } catch (e) {
    const result = (e as Error).message;
    console.log(result);
    return [];
  }
};

export const devicePercentageOnline = (totalDeviceOnline: number,  totalDevice: number) => {
  return (totalDeviceOnline / totalDevice) * 100;
};

export const devicePercentageOffline = (
  totalDeviceOnline: number,
  totalDevice: number
) => {
  const offlineDevice = totalDevice - totalDeviceOnline;
  return (offlineDevice / totalDevice) * 100;
};

export const getDeviceData = (devices: IDevice[]) => {
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
  return [totalNetworkDevice, totalNetworkDeviceOnline]
}



// export const apiData= async (): Promise<IDevice[]>  => {

// export const apiData = async () => {
//   const URL = `${process.env.REACT_APP_FETCH_URL}/GetData`;
//   const token = process.env.REACT_APP_API_TOKEN;
//   try {
//     let responce = await fetch(URL, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     let resData = await responce.json();
//     // setDevices(resData);
//     return resData as IDevice[];
//   } catch (e) {
//     const result = (e as Error).message;
//     console.log(result);
//     return [];
//   }
// };