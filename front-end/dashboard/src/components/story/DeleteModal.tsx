import { Dispatch, SetStateAction, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
// import Dialog from "../subComponent/Dialog";
import { StoryType } from "@/util/types";

interface PropType {
  id: string;
  stories: StoryType[];
  setStories: Dispatch<SetStateAction<StoryType[] | undefined>>;
}

export default function DeleteModal(props: PropType): JSX.Element {
  const { id, stories, setStories } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = async (id: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BACK_END_URL}/stories/${id}`
      );
      if (response.status === 200) {
        toast.success("deleted", {
          position: "top-right",
          type: "success",
          autoClose: 1000,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        handleClose();
      } else {
        toast.error("Failed to delete", {
          position: "top-right",
          type: "error",
          autoClose: 1000,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
    const result = stories.filter((story: StoryType) => story._id !== id);
    setStories(result);
  };

  return (
    <>
      <Button variant="primary" className="button" onClick={handleShow}>
        Устгах
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Устгах</Modal.Title>
        </Modal.Header>
        <Modal.Body>Та энэ аялалыг устгахдаа итгэлтэй байнa уу!</Modal.Body>
        <Modal.Footer>
          <Button className="inActiveButton" onClick={handleClose}>
            Үгүй
          </Button>
          <Button
            className="button"
            onClick={() => {
              deleteHandler(id);
            }}
          >
            Устгах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
