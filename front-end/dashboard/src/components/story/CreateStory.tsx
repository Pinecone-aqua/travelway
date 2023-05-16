import axios from "axios";
import { useState } from "react";
import ModalInput from "./ModaInput";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateStory(): JSX.Element {
  const [addIndicator, setAddIndicator] = useState<string[]>([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addFile, setAddFile] = useState<File[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addFiles(e: any) {
    const images: FileList = e.target.files;
    const imageArr = [];
    for (let i = 0; images.length > i; i++) {
      imageArr.push(images[i]);
    }
    setAddFile([...addFile, ...imageArr]);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createHandler(e: any): void {
    e.preventDefault();
    const object = {
      image: [],
      title: e.target.title.value,
      description: e.target.description.value,
      province: e.target.province.value,
      myth: e.target.myth.value,
      toDo: addIndicator,
    };

    const product = new FormData();
    addFile.forEach((file) => {
      product.append("file", file);
      console.log(product);
    });
    product.append("product", JSON.stringify(object));
    axios
      .post(`http://localhost:3009/stories/create`, product)
      .then((res) => console.log(res));
    console.log("product", product);
  }
  return (
    <>
      <Button className="button" onClick={handleShow}>
        Create
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create story</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="w-[1200px]">
          <div className="bg-gray-200 w-[500px] p-5 flex flex-col justify-center items-center rounded-2xl">
            <form onSubmit={createHandler}>
              <div className="w-full">
                <div className=""> title</div>
                <input className="py-2 rounded-xl w-full" name="title" />
              </div>

              <div className="w-full">
                <div className="">description</div>
                <input
                  type="text"
                  name="description"
                  className="block text-slate-500 h-36 file:rounded-full py-2 rounded-xl w-full"
                />
              </div>

              <div className="w-96">
                <div className="text-2xl">domog</div>
                <input
                  type="text"
                  name="myth"
                  className="disabled:opacity-75 py-2 rounded-xl w-full"
                />
              </div>
              <div className="text-l w-96">
                <div className="">province</div>
                <input
                  type="text"
                  name="province"
                  className="block text-slate-500 h-36 file:rounded-full py-2 rounded-xl w-full"
                />
              </div>
              <div>
                <div>toDo</div>
                {addIndicator.map((unit: string, index: number) => (
                  <div key={index}>
                    <input
                      type="text"
                      className="p-2 rounded-xl w-full"
                      name="activity"
                      defaultValue={unit}
                    />
                  </div>
                ))}
              </div>

              <div className="w-1/2 w-96">
                <p>зураг нэмэх</p>
                <div className="flex gap-2 flex-wrap">
                  {addFile.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      className="w-10"
                    />
                  ))}
                </div>

                <input
                  type="file"
                  name="file"
                  multiple
                  className="py-2 rounded-xl w-full"
                  onChange={addFiles}
                />
              </div>

              <button
                className="bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg shadow-mycolor px-4 py-2 rounded-xl border-2 w-96"
                type="submit"
              >
                creates
              </button>
            </form>
            <ModalInput
              setAddIndicator={setAddIndicator}
              addIndicator={addIndicator}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
