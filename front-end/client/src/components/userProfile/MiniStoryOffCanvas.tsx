import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbTextSize } from "react-icons/tb";
import { BsImage } from "react-icons/bs";
import MiniStoryAdd from "@/pages/miniStoryAdd";

export default function MiniStoryOffCanvas() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState(true);
  const [changeArea, setChangeArea] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeTextArea(e: any) {
    if (e.target.innerText == "Hallo") {
      setChangeArea("Hallo");
    } else if (e.target.innerText == "Hallo1") {
      setChangeArea("Hallo1");
      <MiniStoryAdd changeArea={changeArea} />;
    } else {
      setChangeArea("sentence");
    }
  }

  return (
    <>
      <Button
        colorScheme="black"
        onClick={onOpen}
        className="hover:visible hidden p-3 border rounded-[25px]  hidden bg-black text-white"
      >
        + insert Block
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>

          <DrawerBody>
            <p className="text-[20px] font-semibold">Insert Block</p>

            <p className="font-semibold">Basic</p>

            <div className="gap-3 ">
              {text ? (
                <div
                  className="p-1 border flex items-center gap-2 cursor-pointer"
                  onClick={() => setText(false)}
                >
                  <TbTextSize size={30} />
                  <p className="font-semibold">Text</p>
                </div>
              ) : (
                <>
                  <div
                    className="p-1 border flex items-center gap-2 cursor-pointer"
                    onClick={() => setText(true)}
                  >
                    <TbTextSize size={30} />
                    <p className="font-semibold">Text</p>
                  </div>
                  <div className="bg-gray-200 grid gap-5">
                    <button
                      className="p-1 border flex items-center gap-2 justify-center"
                      onClick={changeTextArea}
                    >
                      <div className="bg-white  w-[200px] p-2 rounded-xl">
                        <p className="font-bold flex items-center gap-2 justify-center text-[20px] ">
                          Hallo
                        </p>
                      </div>
                    </button>
                    <button className="p-1 border flex items-center gap-2 justify-center ">
                      <div className="bg-white  w-[200px] p-2">
                        <p className="font-bold">Hallo1</p>
                        <p>jdlaisjdlai</p>
                      </div>
                    </button>
                    <button className="p-1 border flex items-center gap-2 justify-center ">
                      <div className="bg-white w-[200px] p-2">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </button>
                  </div>
                </>
              )}
              <div className="p-1 border flex items-center gap-2">
                <BsImage size={20} />
                <p className="font-semibold">Image</p>
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
