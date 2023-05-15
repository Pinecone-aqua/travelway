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
    <>
      <div key="index">
        <Card maxW="md" className="cursor-pointer border-full ">
          <CardBody>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Segun Adebayo" src={story.title} />

                <Box>
                  <Heading size="sm">{story.title}</Heading>
                  <text>Creator, </text>
                </Box>
              </Flex>
            </Flex>
            <text>{story.sentence.slice(0, 50)}...</text>
          </CardBody>
          <Image
            objectFit="cover"
            src={story.image}
            width={500}
            height={500}
            alt="Chakra UI"
            onClick={onOpen}
            className="rounded-b-md "
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
      </div>
    </>
  );
}
