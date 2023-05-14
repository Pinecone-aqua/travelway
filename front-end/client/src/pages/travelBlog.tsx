import axios from "axios";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { StoryType, TravelType } from "../../util/types";
import { Flex, Avatar, Heading, CardBody, Box, Card } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import TravelblogCard from "@/components/travelBlog/TravelblogCard";

const BlogOffCanvas = React.lazy(
  () => import("../components/travelBlog/BlogOffCanvas")
);

interface UserType {
  _id: string;
  username: string;
  image: string;
}

export default function TravelBlog(): JSX.Element {
  const [stories, setStories] = useState<StoryType[]>([]);
  const [userData, setUserData] = useState<UserType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  let userName = "";
  let userImage = "";

  useEffect(() => {
    const logUser = localStorage.getItem("userId");

    const getFetchdata = async (): Promise<void> => {
      const travels = await axios.get("http://localhost:3009/ministory/get");
      const disp = travels.data;
      setStories(disp);
    };

    const getUserFetch = async (): Promise<void> => {
      const user = await axios.get(`http://localhost:3009/allUsers/profile`);
      const currentUser = user.data;
      setUserData(currentUser);
    };

    if (logUser) {
      getFetchdata();
      getUserFetch();
      setUserData((prevUserData) => {
        const currentUser = prevUserData.find(
          (user: UserType) => user._id === logUser
        );
        userName = currentUser?.username || "";
        userImage = currentUser?.image || "";
        return prevUserData;
      });
    } else {
      console.log("Error user not found");
    }
  }, []);

  const handleOpen = (story: StoryType) => {
    setIsOpen(true);
    setChangeInput(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center content-center p-5">
        <div className="gap-3 grid">
          <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 relative ">
            {stories?.slice(0, 8).map((story: StoryType, index: number) => (
              <div key={index}>
                <TravelblogCard
                  story={story}
                  isOpen={isOpen}
                  onClose={handleClose}
                  changeInput={changeInput}
                  setChangeInput={setChangeInput}
                  onOpen={() => handleOpen(story)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
