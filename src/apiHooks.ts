import { useState } from "react";
import { IDevice } from "./interface";

export const getData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [devices, setDevices] = useState<IDevice[]>([]);

  const URL = "https://vstechtest.azurewebsites.net/api/GetData";
  const token = "ade74927-f3df-4718-8f85-d10bab443b1c";
  
  const apiData = async () => {
    try {
      let responce = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      let resData = await responce.json();
      setDevices(resData);
    } catch (e) {
      const result = (e as Error).message;
      console.log(result);
    }
  };

  return [devices, apiData] as const;
};
