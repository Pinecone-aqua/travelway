/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import MiniStory from "@/components/userProfile/MiniStory";
import MiniStoryAdd from "@/components/userProfile/MiniStoryAdd";
import TravelGuide from "@/components/userProfile/TravelGuide";
import TravelWay from "@/components/userProfile/TravelWay";
import { useState } from "react";

export default function User() {
  const [change, setChange] = useState();
  function changer(e: any) {
    setChange(e.target.innerText);
  }
  return (
    <>
      <div className="w-full justify-center flex xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px]  drop-shadow-2xl relative bg-black">
        <img
          src="./images/fuji.webp"
          alt="pic"
          className="w-full object-cover h-[500px] h-full "
        />
        {/* <Header /> */}
        <div className="flex justify-center absolute bottom-[-80px] ">
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="rounded-full w-[150px] h-[150px] bg-black border border-[3px] "
          />
        </div>
      </div>
      <div className="h-[8rem]" />
      <div className="items-center justify-center flex flex-col gap-10 relative ">
        <p className="font-bold text-[26px]">Robert Harrison</p>
        <div className="w-[80%] grid gap-10">
          <div className="flex justify-center gap-5 font-semibold">
            <button className="border border-black rounded-[13px] px-[15px] md:px-[29.5px] active:text-gray-200 ">
              Follow
            </button>
            <button className="border border-black rounded-[13px] px-[15px] md:px-[29.5px] py-[3px] active:text-gray-200">
              Edit Profile
            </button>
            <button className="border border-black rounded-[13px] px-[15px] md:px-[29.5px] py-[3px] active:text-gray-200">
              Message
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. fringilla, mattis ligula consectetur, ultrices
            mauris. Maecenas vitae mattis tellus.
          </p>
          <hr className=" border-black  drop-shadow-xl" />
          <div className="flex justify-evenly">
            <button
              className={
                change == "Mini story"
                  ? "border-black  py-[3px] font-semibold  border-b-2 "
                  : "border-black  py-[3px] font-semibold "
              }
              onClick={changer}
            >
              Mini story
            </button>
            <button
              className={
                change == "TravelWay"
                  ? "border-black  py-[3px] font-semibold  border-b-2 "
                  : "border-black  py-[3px] font-semibold "
              }
              onClick={changer}
            >
              TravelWay
            </button>
            <button
              className={
                change == "TravelGuide"
                  ? "border-black  py-[3px] font-semibold  border-b-2 "
                  : "border-black  py-[3px] font-semibold "
              }
              onClick={changer}
            >
              TravelGuide
            </button>
          </div>
          <div className="relative">
            {change == "Mini story" ? (
              <>
                <div className="flex gap-5">
                  <MiniStoryAdd />
                  <MiniStory />
                </div>
              </>
            ) : change == "TravelWay" ? (
              <TravelWay />
            ) : (
              <TravelGuide />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
