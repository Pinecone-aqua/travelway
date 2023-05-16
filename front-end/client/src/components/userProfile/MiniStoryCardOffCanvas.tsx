import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
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

export default function MiniStoryCardOffCanvas(props: Props): JSX.Element {
  const { isOpen, onClose, story } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  //   function remove() {
  //     axios
  //       .delete(`http://localhost:3009/ministory/${story._id}`)
  //       .then((res) => console.log("story remover", res))
  //       .catch((err) => console.log("story error", err));
  //   }

  function edit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = e.currentTarget.title.value;
    const sentence = e.currentTarget.sentence.value;
    axios
      .patch(`http://localhost:3009/ministory/${story._id}`, {
        title,
        sentence,
      })
      .then((res) => console.log("edit res:", res))
      .catch((err) => console.log("err :", err));
  }

  function handleChange() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
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
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar name={story.title} src={story.image} />
                <div>
                  <div className="text-xl font-medium">{story.title}</div>
                  {/* <div className="text-sm text-gray-500">{story.sentence}</div> */}
                </div>
              </div>
              <div>
                <div className="p-2 border rounded-full cursor-pointer">
                  <div className={`absolute p-1 right-0`}>
                    <button className="p-1 rounded-full border opacity-60">
                      <BsThreeDots />
                    </button>
                    <div className="grid gap-2 pt-2 border rounded-full p-1 opacity-80">
                      <button type="submit">
                        <MdModeEdit />
                      </button>
                      <button>
                        <MdDelete />
                      </button>
                    </div>
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
                  className="rounded-2xl"
                />
              </div>
            </div>
            <form onSubmit={edit}>
              <input
                className="flex justify-center text-xl font-medium mb-2 rounded-xl text-center"
                defaultValue={story.title}
              />
              <textarea
                className="text-sm text-gray-500 text-center w-full h-auto"
                defaultValue={story.sentence}
                onChange={handleChange}
              />
            </form>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
