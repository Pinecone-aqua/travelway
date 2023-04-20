import { useEffect, useState } from "react";
//import axios from "axios";
import { travelType } from "@/util/types";
import Travel from "@/components/mainComponent/Travel";
export default function Travels(): JSX.Element {
  const [travels, setTravels] = useState<travelType[] | null>(null);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3009/travels/get")
    //   .then(({ data }) => setTravels(data.travels));
    fetch("http://localhost:3009/travels/get")
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);
  console.log("aylaluud", travels);
  return (
    <>
      <div className="bg-violet-300 h-2/3 rounded-2xl min-h-screen h-100 w-10/12  h-2/3 ">
        {travels?.map((unit: travelType, index: number) => (
          <Travel key={index} unit={unit} />
        ))}
      </div>
    </>
  );
}
