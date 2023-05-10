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
  const [seemore, setSeeMore] = useState("");
  const [changeInput, setChangeInput] = useState(false);

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
            className="w-[100%] h-[auto] object-cover rounded-xl disable-text-selection border hover:bg-black "
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
                  className={`${seemore} md:w-[60%] h-auto object-cover  `}
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

                    <details
                      className="absolute pr-5 right-0 col-1 h-[1px]"
                      onClick={() => setChangeInput(false)}
                    >
                      <summary className="p-1 rounded-full  opacity-60 ">
                        <BsThreeDots />
                      </summary>
                      <div className="gap-2 pt-2  border rounded-full p-1 opacity-80">
                        <button className="">
                          <MdModeEdit onClick={() => setChangeInput(true)} />
                        </button>
                        <button>
                          <MdDelete
                            // onClick={remover}
                            onClick={() => setChangeInput(false)}
                          />
                        </button>
                      </div>
                    </details>
                  </div>
                  <form>
                    {changeInput == true ? (
                      <textarea name="editedSentence" className="pr-5 w-[50%]">
                        {story.title}
                      </textarea>
                    ) : (
                      <p className="font-semibold text-[21px] pt-5 ">
                        {story.title}
                      </p>
                    )}

                    {changeInput == true ? (
                      <textarea
                        name="editedSentence"
                        className="pr-5 w-full h-[100px] "
                      >
                        {story.sentence}
                      </textarea>
                    ) : (
                      <p className="pr-5">{story.sentence}</p>
                    )}
                  </form>
                  <button className=" border-[2px] p-2 rounded text-gray-500">
                    see more about this story
                  </button>
                  <div className="absolute flex justify-between pb-4 bottom-0 w-[100%] ">
                    <div className="flex gap-4">
                      {heart == false ? (
                        <div onClick={() => setHeart(true)} className="flex">
                          <AiOutlineHeart size={"2em"} />
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
                          <BsFillBookmarkFill size={"1.75em"} />
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
