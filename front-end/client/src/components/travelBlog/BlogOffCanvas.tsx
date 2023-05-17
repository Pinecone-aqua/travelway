import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { miniStoryType } from "../../../util/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BlogOffCanvas(props: Props): JSX.Element {
  const { isOpen, onClose, story } = props;

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerContent bg="gray.100">
        <DrawerHeader
          borderBottomWidth="1px"
          bg="gray.200"
          className="flex justify-between"
        >
          <div className="text-lg font-medium">
            <p>Travel Blog</p>
          </div>
        </DrawerHeader>
        <DrawerBody className="flex place-content-center py-5">
          <div className="w-full max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar name={story.title} src={story.image} />
                <div>
                  <div className="text-2xl font-medium">{story.title}</div>
                  <div className="text-base text-gray-500">
                    {story.sentence}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <div className="h-96 w-full relative">
                <Image
                  src={story.image}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </div>
            <div className="flex justify-center text-2xl font-medium mb-2">
              {story.title}
            </div>
            <div className="text-base text-gray-500 text-center">
              {story.sentence}
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
