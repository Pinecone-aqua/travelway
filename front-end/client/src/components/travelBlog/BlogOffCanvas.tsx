import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
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
          <div onClick={onClose} className="cursor-pointer">
            <svg
              className="w-6 h-6 fill-current text-gray-500 hover:text-gray-600 transition-colors duration-200"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.345 18.803L12 13.148l5.655 5.655 1.414-1.414L13.414 11.73l5.655-5.655-1.414-1.414L12 10.32 6.345 4.665 4.93 6.079l5.655 5.655L4.93 17.388l1.415 1.415z"
              />
            </svg>
          </div>
        </DrawerHeader>
        <DrawerBody className="flex place-content-center">
          <div className="w-full max-w-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar name={story.title} src={story.image} />
                <div>
                  <div className="text-lg font-medium">{story.title}</div>
                  <div className="text-sm text-gray-500">{story.sentence}</div>
                </div>
              </div>
              <div>
                <div className="p-2 border rounded-2xl cursor-pointer">
                  <CiHeart />
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <div className="h-64 w-full relative">
                <Image
                  src={story.image}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="flex justify-center text-lg font-medium mb-2">
              {story.title}
            </div>
            <div className="text-sm text-gray-500 text-center">
              {story.sentence}
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
