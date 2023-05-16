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
import { useRef } from "react";
import { miniStoryType } from "../../../util/types";

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleChange() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent bg="gray.100">
        <ModalHeader>Edit your story</ModalHeader>
        <ModalBody>
          <form onSubmit={edit}>
            <img src={story.image} alt="pic" className="mb-4" />
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
