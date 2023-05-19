import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Avatar,
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { LoginForm, miniStoryType } from "../../../util/types";

type Props = {
  userInfo: LoginForm | null;
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BlogOffCanvas(props: Props): JSX.Element {
  const { isOpen, onClose, story, userInfo } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.minHeight = "150px";
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [story.sentence]);

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerContent bg="gray.100">
        <DrawerHeader
          borderBottomWidth="1px"
          bg="gray.200"
          className="flex justify-between z-30"
        >
          <div className="text-lg font-medium">
            <p>Travel Blog</p>
          </div>

          <div className="cursor-pointer" onClick={onClose}>
            X
          </div>
        </DrawerHeader>
        <DrawerBody className="flex place-content-center py-5">
          <div className="w-full max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar name={story.title} src={userInfo?.image} />
                <div>
                  <div className="text-2xl font-medium">{story.title}</div>
                  {userInfo?.username ? (
                    <div className="text-base text-gray-500">
                      Creator: {userInfo.username}
                    </div>
                  ) : (
                    <div className="text-base text-gray-500">
                      <p>Creator: Admin</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <div className="h-96 w-full relative">
                {story.image ? (
                  <Image
                    src={story.image}
                    alt="pic"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                ) : (
                  <Spinner color="red.500" />
                )}
              </div>
            </div>
            <div className="flex justify-center text-2xl font-medium mb-2">
              {story.title}
            </div>
            <div className="text-base text-gray-500  text-xl">
              <textarea
                ref={textareaRef}
                className="text-xl p-2 text-gray-500 w-full rounded-lg"
                defaultValue={story.sentence}
                style={{ minHeight: "550px" }}
                disabled
              />
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
