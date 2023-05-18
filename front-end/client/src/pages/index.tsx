import TravelCard from "@/components/travel/Travel";
import { useEffect, useState } from "react";
import { TravelType } from "../../util/types";
import HeroSection from "@/components/heroSection";

export default function Home(): JSX.Element {
  const [travels, setTravels] = useState<TravelType[] | null>(null);
  useEffect(() => {
    fetch(`http://localhost:3009/travels/get`)
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);

  return (
    <>
      <div className="flex justify-start flex-wrap">
        <HeroSection />
        {travels &&
          travels.map((data: TravelType, index: number) => (
            <TravelCard data={data} key={index} />
          ))}
      </div>
    </>
  );
}
