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
        const travels = await axios.get("http://localhost:3009/ministory/get");
        const filteredData = travels.data.filter(
          (item: miniStoryType) => item.userId
        );
        setStories(filteredData);

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

  const handleOpen = () => {
    setIsOpen(true);
    setChangeInput(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center content-center pt-5">
        <div className="gap-3 grid">
          <div className="gap-3 grid p-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 relative ">
            {stories.length === 0 ? (
              <div className="flex justify-center content-center  ">
                <div>
                  <Stack className="w-[500px] h-auto flex ">
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                  </Stack>
                </div>
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
