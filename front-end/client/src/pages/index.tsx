import TravelCard from "@/components/travel/Travel";
import { useEffect, useState } from "react";
import { TravelType } from "../../util/types";
import HeroSection from "@/components/HeroSection";
import Explore from "@/components/Explore";

export default function Home(): JSX.Element {
  const [travels, setTravels] = useState<TravelType[] | null>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URI}/travels/get`)
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);

  return (
    <>
      <div className="contentScroller">
        <HeroSection />
        <Explore />
        <div className="flex justify-center flex-wrap h-[auto] bg-[#121718] ">
          {travels &&
            travels.map((data: TravelType, index: number) => (
              <TravelCard data={data} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}
