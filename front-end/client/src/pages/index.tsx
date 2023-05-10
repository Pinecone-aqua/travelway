import TravelCard from "@/components/travel/Travel";
import { useEffect, useState } from "react";
import { TravelType } from "../../util/types";
import * as dotenv from "dotenv";

dotenv.config();

export default function Home(): JSX.Element {
  const [travels, setTravels] = useState<TravelType[] | null>(null);
  useEffect(() => {
    fetch(`${process.env.LOCAL_SERVER}:${process.env.SERVER_PORT}/travels/get`)
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);

  return (
    <>
      <div className="flex justify-start container mx-auto flex-wrap">
        {travels &&
          travels.map((data: TravelType, index: number) => (
            <TravelCard data={data} key={index} />
          ))}
      </div>
    </>
  );
}
