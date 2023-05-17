import axios from "axios";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { miniStoryType } from "../../util/types";
import React from "react";
import TravelblogCard from "@/components/travelBlog/TravelblogCard";
import { Skeleton, Stack } from "@chakra-ui/react";
import Pagination from "@/components/Pagination";

export default function TravelBlog(): JSX.Element {
  const [stories, setStories] = useState<miniStoryType[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const path = "travelBlog";
  useEffect(() => {
    const getFetchdata = async (): Promise<void> => {
      const travels = await axios.get("http://localhost:3009/ministory/get");
      const disp = travels.data;
      setStories(disp);
    };

    getFetchdata();
  }, [stories]);

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
          <div className="gap-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 relative ">
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
              stories &&
              stories.map((story: miniStoryType, index: number) => (
                <div key={index}>
                  <TravelblogCard
                    story={story}
                    isOpen={isOpen}
                    onClose={handleClose}
                    changeInput={changeInput}
                    setChangeInput={setChangeInput}
                    onOpen={() => handleOpen()}
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
