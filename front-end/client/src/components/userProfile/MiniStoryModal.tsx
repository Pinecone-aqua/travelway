import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { miniStoryType } from "../../../util/types";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  story: miniStoryType;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  edit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function MiniStoryModal(props: Props): JSX.Element {
  const { isOpen, onClose, story, changeInput, setChangeInput, edit } = props;

  function remove() {
    axios
      .delete(`http://localhost:3009/ministory/${story._id}`)
      .then((res) => console.log("story remover", res))
      .catch((err) => console.log("story error", err));
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent bg="gray.100">
        <ModalHeader>
          <div className={`absolute p-1 right-0`}>
            <button className="p-1 rounded-full border opacity-60">
              <BsThreeDots />
            </button>
            <div className="grid gap-2 pt-2 border rounded-full p-1 opacity-80">
              <button className="">
                <MdModeEdit />
              </button>
              <button onClick={remove}>
                <MdDelete />
              </button>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={edit}>
            <Image src={story.image} alt="pic" className="mb-4" />
            <FormControl mb="4">
              <FormLabel>Title</FormLabel>
              <Input
                defaultValue={story.title}
                name="title"
                required
                onChange={() => setChangeInput(true)}
              />
            </FormControl>
            <FormControl
              mb="4"
              className="hover:bg-blue-100 transition-all duration-300"
            >
              <FormLabel>Title</FormLabel>
              <Input
                defaultValue={story.title}
                name="title"
                required
                onChange={() => setChangeInput(true)}
              />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="teal"
            disabled={!changeInput}
            type="submit"
            onClick={() => {
              setChangeInput(false);
              onClose();
            }}
            className="hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
