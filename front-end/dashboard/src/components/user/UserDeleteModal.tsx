import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

interface PropType {
  id: string;
  username: string;
}

export default function DeleteModalUser(props: PropType): JSX.Element {
  const { id, username } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [test, setTest] = useState();

  async function deleteHandler(userId: string) {
    try {
      const response = await axios.delete(
        `http://localhost:3009/users/${userId}`
      );
      if (response.status === 200) {
        toast.success("🦄 amjilttai!", {
          position: "top-right",
          autoClose: 1000,
          type: "success",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        handleClose();
      } else {
        toast.error("🦄 amjiltgui!", {
          position: "top-right",
          type: "error",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log(response.status);
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
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
