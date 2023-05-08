import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsThreeDots } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { miniStoryType } from "../../../util/types";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function MiniStory(props: {
  storyType: miniStoryType;
}): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(false);
  const [mark, setMark] = useState<boolean>(false);
  const [hover, setHover] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const story = props.storyType;

  function enter() {
    setTimeout(() => {
      setHover(
        "visible absolute bg-white rounded-full w-[20px] h-[20px] flex text-center justify-center drop-shadow-2xl  m-2 "
      );
    }, 3000);
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
      <div className=" ">
        <Button className="bg-green-500 inline-block h-auto p-0  z-20">
          <Dropdown className={`${hover} absolute`}>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="rounded-full w-[20px]"
            >
              <BsThreeDots />
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-[25px]">
              <Dropdown.Item href="#/action-1" className="pr-0">
                <MdModeEdit
                  className="w-[20px]"
                  // onClick={edit}
                />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <MdDelete className="w-[20px]" onClick={remover} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>

        <Image
          onClick={onOpen}
          src={story.image}
          width={500}
          height={500}
          quality={10}
          alt="pic"
          className="w-[100%] h-auto  object-cover rounded-xl relative"
          // onClick={() => setVisible(true)}
          onMouseEnter={enter}
        />
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          // motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent className="bg-green-500">
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton />
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
                  <div className="m-0 flex items-center gap-2 hidden md:visible ">
                    <Image
                      width={500}
                      height={500}
                      src={`${story.image}`}
                      alt="pic"
                      className="w-[3rem]  rounded-full h-[3rem]"
                    />
                    <label className="text-gray-400">by Robert Harrisont</label>
                  </div>
                  <p className="font-semibold text-[21px] py-4">
                    {story.title}
                  </p>
                  <p>{story.sentence}</p>
                  <div className="absolute flex justify-between pb-2 bottom-0 w-[100%] ">
                    <div className="flex gap-4">
                      {heart == false ? (
                        <button onClick={() => setHeart(true)}>
                          <AiOutlineHeart size={"2em"} />
                        </button>
                      ) : (
                        <button onClick={() => setHeart(false)}>
                          <AiFillHeart size={"2em"} />
                        </button>
                      )}
                    </div>
                    <div className="pr-5">
                      {mark == false ? (
                        <button onClick={() => setMark(true)}>
                          <BiBookmark size={"2em"} />
                        </button>
                      ) : (
                        <button onClick={() => setMark(false)}>
                          <BsFillBookmarkFill size={"2em"} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>

      {/* <div className=" ">
        <div className="bg-green-500 inline-block h-auto">
          <img
            src={story.image}
            alt="pic"
            className="w-[100%] h-auto  object-cover rounded-xl"
            onClick={() => setVisible(true)}
            onMouseEnter={enter}
            // onMouseLeave={() => setHover("invisible")}
          />
        </div>
      </div> */}
    </>
  );
}
