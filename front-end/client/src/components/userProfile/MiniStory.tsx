import React, { useState } from "react";
import { miniStoryType } from "../../../util/types";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";

const MiniStoryCardOffCanvas = React.lazy(
  () => import("./MiniStoryCardOffCanvas")
);

export default function MiniStory(props: {
  storyType: miniStoryType;
}): JSX.Element {
  const [hover, setHover] = useState(false);
  const [changeInput, setChangeInput] = useState(false);

  const story = props.storyType;

  function enter() {
    setHover(true);
  }

  function leave() {
    setHover(false);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <div
          className={`relative ${
            hover ? "transform scale-110 duration-500" : "ease-out duration-599"
          }`}
        >
          <Image
            onClick={onOpen}
            src={story.image}
            width={500}
            height={500}
            quality={10}
            alt="pic"
            className={`  w-full object-cover rounded-xl disable-text-selection border hover:bg-black cursor-pointer w-full h-56 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 `}
            onMouseEnter={enter}
            onMouseLeave={leave}
          />
        </div>

        <React.Suspense fallback={null}>
          <MiniStoryCardOffCanvas
            isOpen={isOpen}
            onClose={onClose}
            story={story}
            changeInput={changeInput}
            setChangeInput={setChangeInput}
          />
        </React.Suspense>
      </div>
    </>
  );
}
