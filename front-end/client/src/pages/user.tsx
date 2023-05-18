import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { miniStoryType } from "../../util/types";
import MiniStory from "@/components/userProfile/MiniStory";
import Link from "next/link";
import { UserContext } from "../../context/user.context";
import { Spinner } from "@chakra-ui/react";

export default function User(): JSX.Element {
  const [change, setChange] = useState("Mini story");
  const [story, setStory] = useState<miniStoryType[]>();
  const { user } = useContext(UserContext);
  // const [stories, setStories] = useState<miniStoryType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userInfo, setUserInfo] = useState<any[]>([]);

  const defaultStyle = "border-black  py-[3px] font-semibold ";
  const activatedStyle =
    "border-black  py-[3px] font-semibold  border-b-2  transiton w-[200px]";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changer(e: any) {
    setChange(e.target.innerText);
  }

  useEffect(() => {
    const getFetchdata = async (): Promise<void> => {
      try {
        const travels = await axios.get("http://localhost:3009/ministory/get");
        const filteredData = travels.data.filter(
          (item: miniStoryType) => item.userId
        );
        setStory(filteredData);

        const userAllInfo = await axios.get(
          "http://localhost:3009/allUsers/all"
        );
        const allUsers = userAllInfo.data;

        const matchingUserIds = filteredData.map(
          (story: miniStoryType) => story.userId
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const matchingUsers = allUsers.filter((user: any) =>
          matchingUserIds.includes(user._id)
        );
        setUserInfo(matchingUsers);
      } catch (err) {
        console.log(err);
      }
    };

    getFetchdata();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-center">
        {user && user.image && (
          <picture>
            <img
              src={`${user.image}`}
              alt="pic"
              className="rounded-full w-40 h-40 bg-gray-200 outline outline-gray-500 shadow-lg text-center object-cover"
            />
          </picture>
        )}
      </div>
      <div className="sm:h-10 h-20" />
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">&quot;{user?.username}&quot;</h1>
        <div className="flex justify-center gap-5">
          {/* <button className="border bg-gray-200 rounded-full p-2 px-5 transition-all duration-300 ease-in-out hover:bg-gray-300 transform hover:scale-105">
            Edit Profile
          </button> */}
        </div>
        <p className="text-gray-700 text-center max-w-2xl">
          Welcome to TravelWay, a travel blog where travelers can share their
          stories, knowledge, and suggestions with fellow adventure enthusiasts.
        </p>
        <hr className="w-full border-gray-400 sm:my-0 my-8 " />
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
            <Link href="/miniStoryAdd">
              <button className="py-2 px-5 font-semibold text-gray-400 grid place-content-center w-[100%] bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Add your new adventure
              </button>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {story ? (
                story.map((storyType: miniStoryType, index: number) => (
                  <div className="relative" key={index}>
                    <MiniStory
                      userInfo={userInfo.find(
                        (user) => user._id === story.userId
                      )}
                      storyType={storyType}
                    />
                  </div>
                ))
              ) : (
                <div className="">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
