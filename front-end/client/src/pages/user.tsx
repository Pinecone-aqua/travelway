import TravelGuide from "@/components/userProfile/TravelGuide";
import axios from "axios";
import { useEffect, useState } from "react";
import { miniStoryType } from "../../util/types";
import MiniStory from "@/components/userProfile/MiniStory";
import { GrAddCircle } from "react-icons/gr";

export default function User(): JSX.Element {
  const [change, setChange] = useState("Mini story");
  const [story, setStory] = useState<miniStoryType[]>();

  const defaultStyle = "border-black  py-[3px] font-semibold ";
  const activatedStyle = "border-black  py-[3px] font-semibold  border-b-2 ";
  const topBtnStyle =
    "border border-black rounded-[13px] px-[15px] md:px-[29.5px] active:text-gray-200 py-[3px]";

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

  return (
    <div>
      <div className="w-full justify-center flex   drop-shadow-2xl  ">
        <div className="flex justify-center pt-5">
          <img
            src="../images/efil.webp"
            alt="pic"
            className=" rounded-full w-[150px] h-[150px] bg-black   outline outline-green-500 drop-shadow-2xl place-content-center"
          />
        </div>
      </div>
      <div className="h-[3rem]" />
      <div className="items-center justify-center flex flex-col gap-10 relative ">
        <p className="font-bold text-[26px] border p-2 rounded-xl">
          Robert Harrison
        </p>
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
            {change == "TravelGuide" ? (
              <>
                <TravelGuide />
              </>
            ) : (
              <>
                <div className="gap-3 grid">
                  <a href="/miniStoryAdd">
                    <button className="grid place-content-center w-[100%] border border-1px shadow-inner p-2">
                      <GrAddCircle size={"2em"} />
                    </button>
                  </a>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {story?.map((storyType: miniStoryType, index: number) => (
                      <div className="relative" key={index}>
                        <MiniStory storyType={storyType} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
