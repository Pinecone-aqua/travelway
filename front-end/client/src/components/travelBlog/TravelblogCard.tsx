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

type story = {
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  onOpen: () => void;
};

export default function TravelblogCard(prop: story) {
  const { story } = prop;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [changeInput, setChangeInput] = useState(false);

  return (
    <Card
      maxW="md"
      className="cursor-pointer border border-gray-300 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <CardBody>
        <Flex alignItems="center" flexWrap="wrap">
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
        onClick={onOpen}
        className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      />
      <React.Suspense fallback={null}>
        <BlogOffCanvas
          isOpen={isOpen}
          onClose={onClose}
          story={story}
          changeInput={changeInput}
          setChangeInput={setChangeInput}
        />
      </React.Suspense>
    </Card>
  );
}
