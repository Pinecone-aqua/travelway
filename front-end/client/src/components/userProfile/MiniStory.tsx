import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsThreeDots } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { miniStoryType } from "../../../util/types";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Image from "next/image";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

export default function MiniStory(props: {
  storyType: miniStoryType;
}): JSX.Element {
  const [heart, setHeart] = useState<boolean>(false);
  const [mark, setMark] = useState<boolean>(false);
  const [hover, setHover] = useState("invisible");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const story = props.storyType;

  function enter() {
    setTimeout(() => {
      setHover("visible");
    }, 500);
  }
  function leave() {
    setTimeout(() => {
      setHover("invisible");
    }, 500);
  }

  // function edit() {
  //   axios
  //     .patch(`http://localhost:3009/ministory/${story._id}`)
  //     .then((res) => console.log("id get:", res));
  // }

  function remover() {
    axios
      .delete(`http://localhost:3009/ministory/${story._id}`)
      .then((res) => console.log("story remover", res))
      .catch((err) => console.log("story error", err));
  }

  return (
    <>
      <div>
        <div className="relative ">
          <details
            className={`absolute p-1 right-0 ${hover}`}
            onMouseEnter={enter}
          >
            <summary className="p-1 rounded-full border opacity-60">
              <BsThreeDots />
            </summary>
            <div className=" grid gap-2 pt-2  border rounded-full p-1 opacity-80">
              <button className="">
                <MdModeEdit />
              </button>
              <button>
                <MdDelete onClick={remover} />
              </button>
            </div>
          </details>
          <Image
            onClick={onOpen}
            src={story.image}
            width={500}
            height={500}
            quality={10}
            alt="pic"
            className="w-[100%] h-[auto] object-cover rounded-xl disable-text-selection border "
            onMouseEnter={enter}
            onMouseLeave={leave}
          />
        </div>

        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          // motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent className="bg-green-500">
            <ModalBody className="p-0 ">
              <div className="gap-4 md:flex ">
                <Image
                  width={500}
                  height={500}
                  src={story.image}
                  alt="pic"
                  className="md:w-[60%] h-auto object-cover w-full"
                />
                <div className="m-0 md:w-[50%] relative">
                  <div className="m-0 flex items-center gap-2 pt-5 ">
                    <Image
                      width={500}
                      height={500}
                      src={`${story.image}`}
                      alt="pic"
                      className="w-[2rem]  rounded-full h-[2rem]"
                    />
                    <span className="text-gray-400">by Robert Harrisont</span>

                    <details className="absolute pr-5 right-0 flex h-[1px]">
                      <summary className="p-1 rounded-full  opacity-60 ">
                        <BsThreeDots />
                      </summary>
                      <div className="gap-2 pt-2  border rounded-full p-1 opacity-80">
                        <button className="">
                          <MdModeEdit />
                        </button>
                        <button>
                          <MdDelete onClick={remover} />
                        </button>
                      </div>
                    </details>
                  </div>
                  <p className="font-semibold text-[21px] pt-5 ">
                    {story.title}
                  </p>
                  <p className="pr-5">{story.sentence}</p>
                  <div className="absolute flex justify-between pb-4 bottom-0 w-[100%] ">
                    <div className="flex gap-4">
                      {heart == false ? (
                        <div onClick={() => setHeart(true)}>
                          <AiOutlineHeart size={"2em"} />
                        </div>
                      ) : (
                        <div onClick={() => setHeart(false)}>
                          <AiFillHeart size={"2em"} />
                        </div>
                      )}
                    </div>
                    <div className="pr-5">
                      {mark == false ? (
                        <div onClick={() => setMark(true)}>
                          <BiBookmark size={"2em"} />
                        </div>
                      ) : (
                        <div onClick={() => setMark(false)}>
                          <BsFillBookmarkFill size={"2em"} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
