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
  console.log(story);

  return (
    <>
      <div>
        <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              className="bg-transparent flex justify-between"
            >
              Basic Drawer
              <div onClick={onClose} className="cursor-pointer">
                X
              </div>
            </DrawerHeader>
            <DrawerBody className="flex jusify-center place-content-center ">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center  py-4 gap-4 ">
                    <Avatar name="Segun Adebayo" src={story.title} />
                    <p>{story.title}</p>
                  </div>
                  <div>
                    <div className="p-2 border rounded-2xl cursor-pointer">
                      <CiHeart />
                    </div>
                  </div>
                </div>
                <Image
                  src={story.image}
                  alt="pic"
                  width={1200}
                  height={500}
                  className="object-cover h-auto rounded-2xl"
                />
                <div className="w-[50%]">
                  <h2>{story.title}</h2>
                  <p>{story.sentence}</p>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
