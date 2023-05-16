import axios from "axios";
import { useEffect, useState } from "react";
import { miniStoryType } from "../../util/types";
import MiniStory from "@/components/userProfile/MiniStory";

export default function User(): JSX.Element {
  const [change, setChange] = useState("Mini story");
  const [story, setStory] = useState<miniStoryType[]>();

  const defaultStyle = "border-black  py-[3px] font-semibold ";
  const activatedStyle =
    "border-black  py-[3px] font-semibold  border-b-2  transiton w-[200px]";
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
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-center">
        <picture>
          <img
            src="../images/efil.webp"
            alt="pic"
            className="rounded-full w-40 h-40 bg-gray-200 outline outline-green-500 shadow-lg"
          />
        </picture>
      </div>
      <div className="h-10" />
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Robert Harrison</h1>
        <div className="flex justify-center gap-5">
          <button className={`${topBtnStyle}`}>Follow</button>
          <button className={`${topBtnStyle}`}>Edit Profile</button>
        </div>
        <p className="text-gray-700 text-center max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </p>
        <hr className="w-full border-gray-400 my-8" />
        <div className="flex justify-center gap-8">
          <button
            className={`${
              change == "Mini story" ? `${activatedStyle}` : `${defaultStyle}`
            }`}
            onClick={changer}
          >
            Mini story
          </button>
        </div>
        <div className="relative">
          <div className="gap-3 grid">
            <a href="/miniStoryAdd">
              <button className="py-2 font-semibold text-gray-400 grid place-content-center w-[100%] bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Add your new adventure
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
        </div>
      </div>
    </div>
  );
}
