import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

interface PropType {
  id: string;
  username: string;
}

export default function DeleteModalUser(props: PropType): JSX.Element {
  const { id, username } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deleteHandler(userId: string) {
    axios.delete(`http://localhost:3009/allUsers/${userId}`);
  }

  return (
    <>
      <Button className="button" onClick={handleShow}>
        delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Хэрэглэгч устгах</Modal.Title>
        </Modal.Header>
        <Modal.Body>Та {username}-г устгахдаа итгэлтэй байнa уу!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Үгүй
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteHandler(id), handleClose();
            }}
          >
            Тийм
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
