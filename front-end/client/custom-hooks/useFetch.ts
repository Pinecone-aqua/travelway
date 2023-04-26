import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function getData(url: string) {
      const res = await fetch(url);
      const jsonData = await res.json();
      if (jsonData) {
        setData(jsonData.val);
      }
    }
    try {
      getData(url);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return {
    fetchedData: data,
  };
};
