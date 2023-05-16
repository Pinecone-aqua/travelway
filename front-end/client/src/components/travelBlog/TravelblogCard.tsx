import {
  Flex,
  Avatar,
  Heading,
  CardBody,
  Box,
  Card,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BlogOffCanvas from "./BlogOffCanvas";
import Image from "next/image";
import { miniStoryType } from "../../../util/types";

type StoryProps = {
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  onOpen: () => void;
};

export default function TravelblogCard(props: StoryProps) {
  const { story, isOpen, onClose, onOpen } = props;
  const {
    isOpen: isOffCanvasOpen,
    onOpen: onOffCanvasOpen,
    onClose: onOffCanvasClose,
  } = useDisclosure();
  const [changeInput, setChangeInput] = useState(false);

  return (
    <Card
      maxW="md"
      className="cursor-pointer border border-gray-300 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <CardBody>
        <Flex
          alignItems="center"
          flexWrap="wrap"
          className="bg-transparent bg-green-500"
        >
          <Avatar name="Segun Adebayo" src={story.title} mr="4" />
          <Box>
            <Heading size="sm" mb="1">
              {story.title}
            </Heading>
            <p className="text-gray-500 text-sm">Creator</p>
          </Box>
        </Flex>
        <p className="text-gray-600 mt-2">{story.sentence.slice(0, 50)}...</p>
      </CardBody>
      <Image
        objectFit="cover"
        src={story.image}
        width={500}
        height={500}
        alt="Chakra UI"
        onClick={onOffCanvasOpen}
        className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      />
      <React.Suspense fallback={null}>
        <BlogOffCanvas
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
