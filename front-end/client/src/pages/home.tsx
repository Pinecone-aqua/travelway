import TravelCard from "@/components/travel/Travel";
import { useEffect, useState } from "react";
import { TravelType } from "../../util/types";
import ContainerPages from "./containerPages";

export default function Home(): JSX.Element {
  const [travels, setTravels] = useState<TravelType | null>(null);
  useEffect(() => {
    fetch("http://localhost:3009/travels/get")
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);

  return (
    <>
      <div>
        <ContainerPages />
        <div className=" flex justify-start  mx-auoto flex-wrap">
          {travels &&
            travels.map((data: TravelType, index: number) => (
              <TravelCard data={data} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}
