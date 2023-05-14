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
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";
import { miniStoryType } from "../../../util/types";
// import ImageUpload from "../../shared/ImageUpload";

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

  console.log(story);

  function handleChange() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="flex">
        <ModalHeader>Edit your story</ModalHeader>
        <ModalBody>
          <form onSubmit={edit}>
            <img src={story.image} alt="pic" />
            <FormControl mb="4">
              <FormLabel>Title</FormLabel>
              <Input
                defaultValue={story.title}
                name="title"
                required
                onChange={() => setChangeInput(true)}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Sentence</FormLabel>
              <Textarea
                defaultValue={story.sentence}
                name="sentence"
                ref={textareaRef}
                required
                onChange={() => {
                  setChangeInput(true);
                  handleChange();
                }}
                style={{ height: "50px ", width: "100%" }}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Image</FormLabel>
              {/* <ImageUpload
                setSelectedImage={handleImageUpload}
                currentImage={selectedImage}
              /> */}
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
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
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
