import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef, useState, useContext } from "react";
import { miniStoryType } from "../../../util/types";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from "primereact/button";
import { UserContext } from "../../../context/user.context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "primeicons/primeicons.css";
import { MdEdit } from "react-icons/md";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MiniStoryCardOffCanvas(props: Props): JSX.Element {
  const { isOpen, onClose, story } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { user } = useContext(UserContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function edit(e: any) {
    e.preventDefault();
    axios.patch(`http://localhost:3009/ministory/${story._id}`, {
      title: e.target.title.value,
      sentence: e.target.sentence.value,
    });
    notifySuccess();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function remove() {
    axios.delete(`http://localhost:3009/ministory/${story._id}`);
    notifyDelete();
  }

  function handleChange() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }

  const notifyDelete = () =>
    toast.success("Successfull Deleted!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifySuccess = () =>
    toast.success("Successfull Edited!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerContent bg="gray.100">
        <DrawerHeader
          borderBottomWidth="1px"
          bg="gray.200"
          className="flex justify-between"
        >
          <div className="text-lg font-medium">
            <p>Travel Blog</p>
          </div>
          <div onClick={onClose} className="cursor-pointer">
            <svg
              className="w-6 h-6 fill-current text-gray-500 hover:text-gray-600 transition-colors duration-200"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.345 18.803L12 13.148l5.655 5.655 1.414-1.414L13.414 11.73l5.655-5.655-1.414-1.414L12 10.32 6.345 4.665 4.93 6.079l5.655 5.655L4.93 17.388l1.415 1.415z"
              />
            </svg>
          </div>
        </DrawerHeader>
        <DrawerBody className="flex place-content-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar name="User" src={user?.image} />

                <p className="text-gray-500 text-sm flex mt-3">
                  Creator: {user?.username}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="h-96 w-full relative">
                <Image
                  src={story.image}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl h-full"
                />
              </div>
            </div>
            <form onSubmit={edit}>
              <input
                className="flex justify-center text-xl font-medium mb-2 rounded-lg text-center"
                defaultValue={story.title}
                name="title"
                onChange={handleChange}
              />
              <textarea
                className="text-xl p-2 text-gray-500 w-full h-[150px] rounded-lg"
                defaultValue={story.sentence}
                name="sentence"
                onChange={handleChange}
                ref={textareaRef}
              />
              <div className="flex">
                <Modal remove={remove} />
                <button
                  type="submit"
                  className="p-2 w-[45px] h-[45px] border rounded-full bg-yellow-400 px-3 text-white font-semibold text-center"
                >
                  <MdEdit />
                </button>
              </div>
            </form>
          </div>
        </DrawerBody>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </DrawerContent>
    </Drawer>
  );
}

export function Modal(prop: { remove: () => void }) {
  const { remove } = prop;
  const [visible, setVisible] = useState(false);

  const footerContent = (
    <div className="text-center ">
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        style={{ background: "red", border: "0", cursor: "pointer" }}
        onClick={() => {
          setVisible(false);
          remove();
        }}
        autoFocus
      />
    </div>
  );

  const show = (position: string) => {
    if (
      position === "center" ||
      position === "bottom" ||
      position === "top" ||
      position === "left" ||
      position === "right" ||
      position === "top-left" ||
      position === "top-right" ||
      position === "bottom-left" ||
      position === "bottom-right"
    ) {
      setVisible(true);
    }
  };

  return (
    <>
      <div className="  border-0 ">
        <div className="flex flex-wrap justify-content-center gap-2 w-[78px] reou ">
          <Button
            icon="pi pi-trash"
            onClick={() => show("top")}
            className="gray p-2 rounded-full"
            style={{
              background: "red",
              border: "none",
              color: "white",
              borderRadius: "100%",
              height: "45px",
            }}
          />
        </div>

        <Dialog
          visible={visible}
          position={"top"}
          onHide={() => setVisible(false)}
          footer={footerContent}
          draggable={false}
          resizable={false}
        >
          <p className="m-0 text-center ">
            Do you really want to remove your memory ?!?!
          </p>
        </Dialog>
      </div>
    </>
  );
}
