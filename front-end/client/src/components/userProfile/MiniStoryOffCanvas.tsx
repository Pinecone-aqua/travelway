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
import { useState } from "react";

type MiniStoryOffCanvasProps = {
  onOptionSelect: (option: string) => void;
};

export default function MiniStoryOffCanvas(props: MiniStoryOffCanvasProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [textBlockTypes] = useState([
    { id: "header", name: "Header" },
    { id: "header-paragraph", name: "Header and Paragraph" },
    { id: "paragraph", name: "Paragraph" },
  ]);

  function handleTypeSelect(typeId: string) {
    setSelectedType(typeId);
  }

  function handleOptionSelect(optionId: string) {
    setSelectedOption(optionId);
    props.onOptionSelect(optionId);
    onClose();
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
      >
        + Insert Block
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className="p-6">
            <h2 className="text-xl font-bold mb-4">Insert Block</h2>
            <p className="text-lg font-medium mb-4">Basic</p>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`border rounded-md p-4 ${
                  selectedType === "text" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleTypeSelect("text")}
              >
                <h3 className="text-lg font-medium mb-2">Text</h3>
                <p className="text-gray-500">Add some text to your story</p>
              </div>
              <div
                className={`border rounded-md p-4 ${
                  selectedType === "image" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleTypeSelect("image")}
              >
                <h3 className="text-lg font-medium mb-2">Image</h3>
                <p className="text-gray-500">Add an image to your story</p>
              </div>
            </div>
            {selectedType === "text" && (
              <>
                <p className="text-lg font-medium mt-6 mb-4">
                  Choose Text Block Type
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {textBlockTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`border rounded-md p-4 ${
                        selectedOption === type.id ? "bg-blue-100" : ""
                      }`}
                      onClick={() => handleOptionSelect(type.id)}
                    >
                      <h3 className="text-lg font-medium mb-2">{type.name}</h3>
                      {type.id === "header-paragraph" && (
                        <p className="text-gray-500">
                          Add a header and a paragraph to your story
                        </p>
                      )}
                      {type.id === "header" && (
                        <p className="text-gray-500">
                          Add a header to your story
                        </p>
                      )}
                      {type.id === "paragraph" && (
                        <p className="text -lg text-gray-500">
                          Add a paragraph to your story
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
            {selectedType === "image" && (
              <>
                <p className="text-lg font-medium mt-6 mb-4">Upload Image</p>
                <input type="file" />
              </>
            )}
          </DrawerBody>
          <DrawerFooter className="p-6">
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-4 py-2"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
