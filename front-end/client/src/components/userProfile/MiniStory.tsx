import React, { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { miniStoryType } from "../../../util/types";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const MiniStoryModal = React.lazy(() => import("./MiniStoryModal"));

export default function MiniStory(props: {
  storyType: miniStoryType;
}): JSX.Element {
  const [hover, setHover] = useState("invisible");
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function edit(e: any) {
    e.preventDefault();
    axios
      .patch(`http://localhost:3009/ministory/${story._id}`, {
        title: e.target.title.value,
        sentence: e.target.sentence.value,
      })
      .then((res) => console.log("edit res:", res))
      .catch((err) => console.log("err :", err));
  }

  function remover() {
    axios
      .delete(`http://localhost:3009/ministory/${story._id}`)
      .then((res) => console.log("story remover", res))
      .catch((err) => console.log("story error", err));
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

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
            className="w-[100%] h-[auto] object-cover rounded-xl disable-text-selection border hover:bg-black cursor-pointer"
            onMouseEnter={enter}
            onMouseLeave={leave}
          />
        </div>

        <React.Suspense fallback={null}>
          <MiniStoryModal
            isOpen={isOpen}
            onClose={onClose}
            story={story}
            changeInput={changeInput}
            setChangeInput={setChangeInput}
            edit={edit}
          />
        </React.Suspense>
      </div>
    </>
  );
}
