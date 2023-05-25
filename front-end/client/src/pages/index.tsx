import TravelCard from "@/components/travel/Travel";
import { useEffect, useState } from "react";
import { TravelType } from "../../util/types";
import HeroSection from "@/components/HeroSection";
import Explore from "@/components/explore";

export default function Home(): JSX.Element {
  const [travels, setTravels] = useState<TravelType[] | null>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URI}/travels/get`)
      .then((response) => response.json())
      .then((res) => setTravels(res));
  }, []);

  return (
    <>
      <div className="content">
        <div className="contentScroller">
          <div className="">
            <HeroSection />
            <Explore />
            <div className="flex justify-center flex-wrap h-[100vh] ">
              {/* {travels &&
          travels.map((data: TravelType, index: number) => (
            <TravelCard data={data} key={index} />
          ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
