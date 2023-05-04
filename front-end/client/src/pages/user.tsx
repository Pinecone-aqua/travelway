/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @next/next/no-img-element */
import MiniStoryAdd from "@/components/userProfile/MiniStoryAdd";
import TravelGuide from "@/components/userProfile/TravelGuide";
import TravelWay from "@/components/userProfile/TravelWay";
import axios from "axios";
import { useEffect, useState } from "react";
import { miniStoryType } from "../../util/mini-story-type";
import MiniStory from "@/components/userProfile/MiniStory";
import Link from "next/link";
import TravelWayAdd from "@/components/userProfile/TravelWayAdd";
import { travelWayType } from "../../util/travelWayType";

export default function User(): JSX.Element {
  const [change, setChange] = useState();
  const [story, setStory] = useState<miniStoryType[]>();
  const defaultStyle = "border-black  py-[3px] font-semibold ";
  const activatedStyle = "border-black  py-[3px] font-semibold  border-b-2 ";
  const topBtnStyle =
    "border border-black rounded-[13px] px-[15px] md:px-[29.5px] active:text-gray-200 py-[3px]";

  const [travelWay, setTravelWay] = useState<travelWayType[]>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changer(e: any) {
    setChange(e.target.innerText);
  }
  useEffect(() => {
    const getFetchdata = async () => {
      const travels = await axios.get("http://localhost:3009/miniStory/get");
      const { data } = travels;
      setStory(data);
    };
    getFetchdata();
  }, []);

  useEffect(() => {
    const getFetchdata = async () => {
      const travelWay = await axios.get(`http://localhost:3009/travelways/get`);
      const { data } = travelWay;
      setTravelWay(data);
    };
    getFetchdata();
  }, []);

  // useEffect(() => {
  //   const getFetchdata = async () => {
  //     const travelWay = await fetch(`http://localhost:3009/travelways/get`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.parse({}),
  //     });
  //     const { data } = travelWay;
  //     console.log("data :", data);

  //     setTravelWay(data);
  //   };
  //   getFetchdata();
  // }, []);
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
          <Link href="/">
            <button className="absolute bg-green-500 rounded-full text-white top-0 w-[20px] h-[20px]">
              .
            </button>
          </Link>
          <img
            src="https://res.cloudinary.com/dhirtao9q/image/upload/v1682515771/6250a072ad55de0012784a93_pwfvzd.webp"
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
            <button className={`${topBtnStyle}`}>Follow</button>
            <button className={`${topBtnStyle}`}>Edit Profile</button>
            <button className={`${topBtnStyle}`}>Message</button>
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
                change == "Mini story" ? `${activatedStyle}` : `${defaultStyle}`
              }
              onClick={changer}
            >
              Mini story
            </button>
            <button
              className={
                change == "TravelWay" ? `${activatedStyle}` : `${defaultStyle}`
              }
              onClick={changer}
            >
              TravelWay
            </button>
            <button
              className={
                change == "TravelGuide"
                  ? `${activatedStyle}`
                  : `${defaultStyle}`
              }
              onClick={changer}
            >
              TravelGuide
            </button>
          </div>
          <div className="relative">
            {change == "Mini story" ? (
              <>
                <div className="gap-3 grid">
                  <div>
                    <MiniStoryAdd />
                  </div>
                  <div className="flex gap-3 flex-wrap place-content-center ">
                    {story?.map((storyType: miniStoryType, index: number) => (
                      <MiniStory storyType={storyType} key={index} />
                    ))}
                  </div>
                </div>
              </>
            ) : change == "TravelWay" ? (
              <>
                <div>
                  <div className="relative">
                    <TravelWayAdd />
                    <div className="absolute place-content-center ">
                      {travelWay?.map(
                        (travelWayData: travelWayType, index: number) => (
                          <TravelWay
                            travelWayData={travelWayData}
                            key={index}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <TravelGuide />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
