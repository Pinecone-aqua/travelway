import axios from "axios";
import { SetStateAction, useEffect, useRef, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";

interface StoryType {
  _id: string;
  userId: string;
  title: string;
  image: string;
  sentence: string;
}

export default function User(): JSX.Element {
  const logUser = localStorage.getItem("userId");
  const [stories, setStories] = useState<StoryType[]>([
    {
      _id: "",
      userId: "",
      title: "",
      image: "",
      sentence: "",
    },
  ]);
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
      const foundUsers = userData
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
      <div className="w-full justify-center flex xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px]  drop-shadow-2xl relative bg-black">
        <picture className="w-full relative">
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover h-[500px] h-full "
          />
        </picture>
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
      </div>
      <div className="h-[8rem]" />
      <div className="items-center justify-center flex flex-col gap-10 relative ">
        <p className="font-bold text-[26px]">{userName}</p>
        <div className="w-[80%] grid gap-10">
          <hr className=" border-black  drop-shadow-xl" />
          <div>MINI STORY HERE</div>
          <div className="flex flex-wrap justify-center items-start">
            {stories.map((story, index) =>
              story.userId === logUser ? (
                <div key={index} className="bg-slate-50 w-3/12 mx-4 my-4 mx-auto">
                  <picture>
                    <img
                      src={story.image}
                      alt={story.title}
                      width={100}
                      height={100 * (9 / 16)}
                      className="w-full h-52 object-cover rounded-t-lg"
                    />
                  </picture>
                  <h3 className="py-0 px-4 text-lg font-bold">{story.title}</h3>
                  <p className="py-4 px-2 text-sm text-justify font-normal">{story.sentence}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
