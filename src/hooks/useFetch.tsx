import { useEffect, useState } from "react";

const Usefetch = <T,>(URL: string, initialState: T): [T, boolean, null] => {
  const [fetchData, setFetchData] = useState<T>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data fot the resource");
          }
          return res.json();
        })
        .then((resData) => {
          console.log("New Data:", resData);
          setFetchData(resData);
          setError(null);
        })
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, 1500);
  }, [URL]);
  return [fetchData, loading, error];
};
export default Usefetch;

export const devicePercentageOnline = (
  totalDeviceOnline: number,
  totalDevice: number
) => {
  return (totalDeviceOnline / totalDevice) * 100;
};

export const devicePercentageOffline = (
  totalDeviceOnline: number,
  totalDevice: number
) => {
  const offlineDevice = totalDevice - totalDeviceOnline;
  return (offlineDevice / totalDevice) * 100;
};

// export const getDeviceData = (devices: IDevice[]) => {
//    const filteredNetWorkingDeviceType = devices.filter((device:IDevice) => {
//     return device.deviceType === "Neworking";
//   });
//   const totalNetworkDevice = filteredNetWorkingDeviceType.length;

//   const filteredNetworkingDeviceOnline = filteredNetWorkingDeviceType.filter(
//     (device: IDevice) => {
//       return device.deviceStatus === "active";
//     }
//   );
//   const totalNetworkDeviceOnline = filteredNetworkingDeviceOnline.length;
//   return {totalNetworkDevice, totalNetworkDeviceOnline, filteredNetWorkingDeviceType}
// }

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

// const Usefetch = async (URL: string) => {
//   const [data, setData] = useState<IDevice[]>([]);

//   const apiFetch = async (URL: string) => {
//     try {
//       let responce = await fetch(URL);
//       let resData = await responce.json();
//       setData(resData);
//     } catch (e) {
//       const result = (e as Error).message;
//       console.log(result);
//     }
//   };
//   useEffect(() => {
//     const sortData = async () => {
//       await apiFetch(URL);
//     };
//     sortData();
//   }, [URL]);
//   return data;
// };

// export default Usefetch;
