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
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BlogOffCanvas(props: Props): JSX.Element {
  const { isOpen, onClose, story } = props;

  function remove() {
    axios
      .delete(`http://localhost:3009/ministory/${story._id}`)
      .then((res) => console.log("story remover", res))
      .catch((err) => console.log("story error", err));
  }

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
            <div className={`absolute p-1 right-0`}>
              <button className="p-1 rounded-full border opacity-60">
                <BsThreeDots />
              </button>
              <div className="grid gap-2 pt-2 border rounded-full p-1 opacity-80">
                <button className="">
                  <MdModeEdit />
                </button>
                <button onClick={remove}>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        </DrawerHeader>
        <DrawerBody className="flex place-content-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar name={story.title} src={story.image} />
                <div>
                  <div className="text-xl font-medium">{story.title}</div>
                  <div className="text-sm text-gray-500">{story.sentence}</div>
                </div>
              </div>
              <div>
                <div className="p-2 border rounded-full cursor-pointer">
                  <CiHeart />
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
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="flex justify-center text-xl font-medium mb-2">
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
