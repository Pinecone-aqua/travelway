import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { StoryType } from "../../../util/types";

export default function SearchModal(props: {
  markers: StoryType[] | undefined;
}) {
  const { markers } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  const pathname = "/stories";
  const limit = markers?.slice(0, 15);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SearchHandler(e: any) {
    e.preventDefault();
    router.push({
      pathname,
      query: { ...router.query, search: e.target.value.trim() },
    });
  }
  function handleClick(id: string) {
    router.push(`/stories/${id}`);
  }

  return (
    <>
      <Button className="input" onClick={handleShow}>
        Хайх
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {" "}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Хайх"
              className="border-2 p-2 rounded-lg "
              onChange={SearchHandler}
            />
            <div>
              {limit?.map((mark, i) => (
                <button
                  key={i}
                  className="border-2 p-2"
                  onClick={() => handleClick(mark._id)}
                >
                  {mark.title}
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
