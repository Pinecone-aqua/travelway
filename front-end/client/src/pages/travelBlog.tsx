import axios from "axios";
import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { miniStoryType } from "../../util/types";
import TravelblogCard from "@/components/travelBlog/TravelblogCard";
import { Skeleton, Stack } from "@chakra-ui/react";
import Pagination from "@/components/Pagination";

export default function TravelBlog(): JSX.Element {
  const [stories, setStories] = useState<miniStoryType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userInfo, setUserInfo] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const path = "travelBlog";

  useEffect(() => {
    const getFetchdata = async (): Promise<void> => {
      try {
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_API_URI}/ministory/get`);
        const travels = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/ministory/get`
        );
        const filteredData = travels.data.filter(
          (item: miniStoryType) => item.userId
        );
        setStories(filteredData);
        const userAllInfo = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/users/all`
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

  const handleOpen = () => {
    setIsOpen(true);
    setChangeInput(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  function gridFunc() {
    if (stories.length === 0) {
      return "";
    } else {
      return "sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 grid";
    }
  }

  return (
    <>
      <div className="flex justify-center content-center pt-5">
        <div className="gap-3 grid">
          <div className={`gap-3  p-2 ${gridFunc()} relative `}>
            {stories.length === 0 ? (
              <div className="flex justify-center content-center gap-2  ">
                <Stack className="w-[500px] h-auto flex ">
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </div>
            ) : (
              stories.map((story: miniStoryType, index: number) => (
                <div key={index}>
                  <TravelblogCard
                    userInfo={userInfo.find(
                      (user) => user._id === story.userId
                    )}
                    story={story}
                    isOpen={isOpen}
                    onClose={handleClose}
                    changeInput={changeInput}
                    setChangeInput={setChangeInput}
                    onOpen={handleOpen}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          path={path}
        />
      </div>
    </>
  );
}
