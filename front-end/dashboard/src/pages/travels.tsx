import { useEffect, useState } from "react";
//import axios from "axios";
import { travelType } from "@/util/types";
import Travel from "@/components/mainComponent/Travel";
export default function Travels(): JSX.Element {
  const [travels, setTravels] = useState<travelType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3009/travels/get")
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);
  console.log("aylaluud", travels);
  return (
    <div className="bg-white rounded-2xl min-h-full h-100 p-20">
      <div className=" h-2/3 rounded-2xl min-h-screen h-100  h-2/3 ">
        {travels?.map((unit: travelType, index: number) => (
          <Travel key={index} unit={unit} />
        ))}
      </div>
    </div>
  );
}
