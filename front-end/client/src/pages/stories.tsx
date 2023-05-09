import axios from "axios";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";
import Image from "next/image";
import { StoryType } from "../../util/types";

export default function User(): JSX.Element {
  // const logUser = localStorage.getItem("userId");
  // const [stories, setStories] = useState<StoryType[]>([]);
  // const [userData, setUserData] = useState([]);
  // let userName = "";
  // let userImage = "";

  // try {
  //   const getFetchdata = async () => {
  //     const travels = await axios.get("http://localhost:3009/miniStory/get");
  //     const disp = travels.data;
  //     setStories(disp);
  //   };

  //   const getUserFetch = async () => {
  //     const user = await axios.get(`http://localhost:3009/users/profile`);
  //     const currentUser = user.data;
  //     setUserData(currentUser);
  //   };

  //   useEffect(() => {
  //     getFetchdata();
  //     getUserFetch();
  //   }, []);

  //   if (logUser) {
  //     userData
  //       .filter(
  //         (user: { _id: string; username: string; image: string }) =>
  //           user._id === logUser
  //       )
  //       .map((user: { username: string; image: string }) => {
  //         userName = user.username;
  //         userImage = user.image;
  //       });
  //   } else {
  //     console.log("Error user not found");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <>
      <Link href="/stories">
        <button className="top-5 right-10 absolute rounded-full text-white uppercase text-sm font-thin">
          LOGOUT
        </button>
      </Link>
      <div>
        <div className="w-[200px] h-auto bg-green-500">dasd</div>
      </div>
    </>
  );
}
