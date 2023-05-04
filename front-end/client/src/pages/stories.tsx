import axios from "axios";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";
import Image from "next/image";
import { StoryType } from "../../util/types";

export default function User(): JSX.Element {
  const logUser = localStorage.getItem("userId");
  const [stories, setStories] = useState<StoryType[]>([]);
  const [userData, setUserData] = useState([]);
  let userName = "";
  let userImage = "";

  try {
    const getFetchdata = async () => {
      const travels = await axios.get("http://localhost:3009/miniStory/get");
      const disp = travels.data;
      setStories(disp);
    };

    const getUserFetch = async () => {
      const user = await axios.get(`http://localhost:3009/users/profile`);
      const currentUser = user.data;
      setUserData(currentUser);
    };

    useEffect(() => {
      getFetchdata();
      getUserFetch();
    }, []);

    if (logUser) {
      userData
        .filter(
          (user: { _id: string; username: string; image: string }) =>
            user._id === logUser
        )
        .map((user: { username: string; image: string }) => {
          userName = user.username;
          userImage = user.image;
        });
    } else {
      console.log("Error user not found");
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Link href="/login">
        <button className="top-5 right-10 absolute rounded-full text-white uppercase text-sm font-thin">
          LOGOUT
        </button>
      </Link>
      <div className="flex justify-center absolute bottom-[-80px]">
        <picture>
          <img
            src={userImage}
            alt="pic"
            className="rounded-full w-[150px] h-[150px] bg-black border border-[3px] "
          />
        </picture>
      </div>

      <div className="h-[8rem]" />
      <div className="items-center justify-center flex flex-col gap-10 relative ">
        <p className="font-bold text-[26px]">{userName}</p>
        <div className="w-[80%] grid gap-10">
          <hr className=" border-black  drop-shadow-xl" />
          <div className="flex flex-wrap justify-center items-start">
            {stories.map((story, index) =>
              story.userId === logUser ? (
                <div key={index} className="relative w-3/12 h-4/12 mx-4 my-4">
                  <div className="relative bg-slate-100 h-80 w-full text-black rounded-t-md">
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={100}
                      height={100 * (9 / 16)}
                      className="h-full w-auto object-cover rounded-t-lg"
                    />
                    <div className="absolute w-full bottom-0 right-0 text-white bg-slate-600 bg-opacity-60 rounded">
                      <h3 className="py-0 px-4 text-lg font-bold">
                        {story.title}
                      </h3>
                      <p className="py-4 px-2 text-sm text-justify font-normal">
                        {story.sentence}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
