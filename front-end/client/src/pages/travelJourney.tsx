/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@/components/Header";
import Budget from "@/components/travel/Budget";
import Description from "@/components/travel/Description";
import TravelPlan from "@/components/travel/TravelPlan";
import { useState } from "react";
// import ContainerPages from "./containerPages";

export default function TravelJourney(): JSX.Element {
  const [color, setColor] = useState();
  function changeColor(e: any) {
    setColor(e.target.innerText);
  }

  return (
    <>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px] sm:h-[150px] drop-shadow-2xl">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] max-h-full  drop-shadow-2xl"
          />
        </picture>
        <Header />
        <div className="flex justify-center  h-[84px] max-h-[125px] w-full  absolute bottom-0 -bottom-10">
          <div className="flex rounded-[10px] p-3 gap-10 bg-gray-500 h-[84px] items-center  justify-center drop-shadow-2xl">
            <button
              className={
                color === "Description"
                  ? "transition ease-in-out  delay-100 active:scale-110 text-black w-full h-[54px] bg-orange-500 rounded-2xl drop-shadow-2xl "
                  : "text-white w-[250px] h-[54px]"
              }
              onClick={changeColor}
            >
              Description
            </button>

            <button
              className={
                color === "Travel Plan"
                  ? "transition ease-in-out  delay-100 active:scale-110 text-black w-full h-[54px] bg-orange-500 rounded-2xl drop-shadow-2xl"
                  : "text-white w-[250px] h-[54px]"
              }
              onClick={changeColor}
            >
              Travel Plan
            </button>
            <button
              className={
                color === "Budget"
                  ? "transition ease-in-out  delay-100 active:scale-110 text-black w-full h-[54px] bg-orange-500 rounded-2xl drop-shadow-2xl"
                  : "text-white w-[250px] h-[54px]"
              }
              onClick={changeColor}
            >
              Budget
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center bg-gray-500 w-full  rounded-[20px] abso">
          <div className="mt-[100px]  ">
            {color == "Travel Plan" ? (
              <TravelPlan />
            ) : color == "Description" ? (
              <Description />
            ) : color == "Budget" ? (
              <Budget />
            ) : (
              <Description />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
