import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";
import { StoryType } from "../../../util/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  story: StoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BlogOffCanvas(props: Props): JSX.Element {
  const { isOpen, onClose, story } = props;
  console.log(story);
  const btnRef = React.useRef();
  return (
    <>
      <div>
        <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              className="bg-none flex justify-between"
            >
              Basic Drawer
              <div onClick={onClose} className="cursor-pointer">
                X
              </div>
            </DrawerHeader>
            <DrawerBody className="flex jusify-center place-content-center ">
              <div>
                <img src={story.image} alt="pic" />
                <h2>{story.title}</h2>
                <p>{story.sentence}</p>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
