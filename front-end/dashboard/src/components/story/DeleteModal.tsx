import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
interface PropType {
  id: string;
}

export default function DeleteModal(props: PropType): JSX.Element {
  const story = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteHandler(storyId: string) {
    axios.delete(`http://localhost:3009/stories/${storyId}`);
  }

  return (
    <>
      <Button variant="primary" className="button" onClick={handleShow}>
        устгах
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
              deleteHandler(story.id), handleClose();
            }}
          >
            Tийм
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
