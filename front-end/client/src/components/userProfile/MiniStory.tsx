import React, { useState } from "react";
import { miniStoryType } from "../../../util/types";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import axios from "axios";
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

  const determineImageHeight = () => {
    const aspectRatio = story.width / story.height;
    const maxWidth = 500;
    const maxHeight = 500;

    if (aspectRatio > 1) {
      return Math.min(maxWidth, story.width);
    } else {
      return Math.min(maxHeight, story.height);
    }
  };

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
            className={`w-full h-${determineImageHeight()} object-cover rounded-xl disable-text-selection border hover:bg-black cursor-pointer ${
              hover ? "opacity-80" : "opacity-100"
            }`}
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
            edit={edit}
          />
        </React.Suspense>
      </div>
    </>
  );
}
