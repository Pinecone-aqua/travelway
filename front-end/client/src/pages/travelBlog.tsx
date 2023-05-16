import axios from "axios";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { miniStoryType } from "../../util/types";
import React from "react";
import TravelblogCard from "@/components/travelBlog/TravelblogCard";
import { Skeleton, Stack } from "@chakra-ui/react";

// const BlogOffCanvas = React.lazy(
//   () => import("../components/travelBlog/BlogOffCanvas")
// );

interface UserType {
  _id: string;
  username: string;
  image: string;
}

export default function TravelBlog(): JSX.Element {
  const [stories, setStories] = useState<miniStoryType[]>([]);
  const [userData, setUserData] = useState<UserType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  // let userName = "";
  // let userImage = "";

  useEffect(() => {
    const getFetchdata = async (): Promise<void> => {
      const travels = await axios.get("http://localhost:3009/ministory/get");
      const disp = travels.data;
      setStories(disp);
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
      <div className="flex justify-center content-center p-5">
        <div className="gap-3 grid">
          <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 relative ">
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
                <div key={index} className="grid sm:columns-3">
                  <TravelblogCard
                    story={story}
                    isOpen={isOpen}
                    onClose={handleClose}
                    changeInput={changeInput}
                    setChangeInput={setChangeInput}
                    onOpen={() => handleOpen(story)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
