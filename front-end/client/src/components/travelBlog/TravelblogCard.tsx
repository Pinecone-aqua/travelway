import {
  Flex,
  Avatar,
  Heading,
  Box,
  Card,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BlogOffCanvas from "./BlogOffCanvas";
import Image from "next/image";
import { LoginForm, miniStoryType } from "../../../util/types";

type StoryProps = {
  userInfo: LoginForm | null;
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  onOpen: () => void;
};

export default function TravelblogCard(props: StoryProps) {
  const { story, userInfo } = props;

  console.log("usrIn", userInfo);

  const {
    isOpen: isOffCanvasOpen,
    onOpen: onOffCanvasOpen,
    onClose: onOffCanvasClose,
  } = useDisclosure();
  const [changeInput, setChangeInput] = useState(false);

  return (
    <Card
      maxW="md"
      className="relative flex place-content-center cursor-pointer border border-gray-300 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      {userInfo && (
        <Flex
          alignItems="center"
          flexWrap="wrap"
          className="bg-white pr-3 py-2 pl-2 rounded-r-full  absolute z-50 opacity-90"
          onClick={onOffCanvasOpen}
        >
          <Avatar name={userInfo.image} src={userInfo.image} mr="4" />
          <Box className="hover:opacity-90 h-[50px] ">
            <Heading size="sm">{story.title.slice(0, 12)}...</Heading>
            <p className="text-gray-500 text-sm mt-2">
              Creator: {userInfo.username}
            </p>
          </Box>
        </Flex>
      )}

      {!story.image.includes(`https://`) && !story.image.includes(`http://`) ? (
        <div className="border   w-full flex justify-center ">
          <picture>
            <img
              src="../../images/sorry.webp"
              alt="Sorry this picture is no longer available"
            />
          </picture>
        </div>
      ) : (
        <Image
          src={story.image}
          width={500}
          height={500}
          alt="Chakra UI"
          onClick={onOffCanvasOpen}
          className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        />
      )}
      <React.Suspense fallback={null}>
        <BlogOffCanvas
          userInfo={userInfo}
          isOpen={isOffCanvasOpen}
          onClose={onOffCanvasClose}
          story={story}
          changeInput={changeInput}
          setChangeInput={setChangeInput}
        />
      </React.Suspense>
    </Card>
  );
}
