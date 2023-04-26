import { useEffect, useState } from "react";
import { travelType } from "@/util/types";
import Travel from "@/components/mainComponent/Travel";
import { RingLoader } from "react-spinners";
export default function Travels(): JSX.Element {
  const [travels, setTravels] = useState<travelType[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3009/travels/get")
      .then((response) => response.json())
      .then((data) => {
        setTravels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  console.log("aylaluud", travels);
  return (
    <div className="bg-white rounded-2xl min-h-full h-100 p-20">
      {loading === true ? (
        <div className="flex justify-center items-center">
          <RingLoader
            color="rgba(82, 179, 208, 1)"
            size={200}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className=" h-2/3 rounded-2xl min-h-screen h-100  h-2/3 ">
          {travels?.map((unit: travelType, index: number) => (
            <Travel key={index} unit={unit} />
          ))}
        </div>
      )}
    </div>
  );
}
