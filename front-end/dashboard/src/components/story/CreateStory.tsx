import axios from "axios";
import { useState } from "react";
import ModalInput from "./ModaInput";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { toast } from "react-toastify";
import Image from "next/image";
import BranchSection from "./Map";
import { province } from "@/util/Constants";

export default function CreateStory(): JSX.Element {
  const [addIndicator, setAddIndicator] = useState<string[]>([]);
  const [clickedLocation, setClickedLocation] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);

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
      coord: clickedLocation,
    };

    const product = new FormData();
    addFile.forEach((file) => {
      product.append("file", file);
    });
    product.append("product", JSON.stringify(object));
    try {
      const response = axios.post(
        `http://localhost:3009/stories/create`,
        product
      );
      response
        .then((response) => {
          if (response.status == 200 || response.status == 201) {
            console.log("response status", response.status);
            toast.success(`Таний мэдээлэл амжилттай орлоо${response.status}`, {
              position: "top-right",
              type: "success",
              autoClose: 1000,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.error("Таний оруулсан мэдээлэл буруу байна", {
              position: "top-right",
              type: "error",
              autoClose: 1000,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch(() => {
          toast.error("Таний оруулсан мэдээлэл буруу байна", {
            position: "top-right",
            type: "error",
            autoClose: 1000,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      console.log(response);
    } catch (error) {
      toast.error("Таний оруулсан зураг буруу байна", {
        position: "top-right",
        type: "error",
        autoClose: 1000,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
                <div className="">Гарчиг</div>
                <input className="p-3 rounded-xl w-full" name="title" />
              </div>

              <div className="w-full">
                <div className="">Аймаг</div>
                <select
                  className="p-2 w-full border-2 rounded-lg"
                  name="province"
                  id=""
                >
                  {province.map((pro: string, index: number) => (
                    <option key={index}>{pro}</option>
                  ))}
                </select>
              </div>

              <div className="w-96">
                <div className="text-2xl">Түүх домог</div>
                <textarea
                  name="myth"
                  className="disabled:opacity-75 p-3 rounded-xl w-full"
                />
              </div>
              <div className="text-l w-96">
                <div className="">Тайлбар</div>
                <textarea
                  name="description"
                  className="block text-slate-500 file:rounded-full p-3 rounded-xl w-full"
                />
              </div>
              <div>
                <div>Хийж болох зүйлс</div>
                {addIndicator.map((unit: string, index: number) => (
                  <div key={index}>
                    <input
                      type="text"
                      className="p-2 m-2 rounded-xl w-full"
                      name="activity"
                      defaultValue={unit}
                    />
                  </div>
                ))}
              </div>

              <div className="w-1/2 w-96">
                <p>Зураг нэмэх</p>
                <div className="flex gap-2 flex-wrap">
                  {addFile.map((image, index) => (
                    <Image
                      key={index}
                      src={URL.createObjectURL(image)}
                      width={100}
                      height={50}
                      alt={""}
                      className="m-2"
                    />
                  ))}
                </div>

                <input
                  type="file"
                  name="file"
                  multiple
                  className="p-3 rounded-xl w-full"
                  onChange={addFiles}
                />
              </div>

              <button
                className="bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg shadow-mycolor px-4 p-3 rounded-xl border-2 w-96 "
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
        <BranchSection
          setClickedLocation={setClickedLocation}
          clickedLocation={clickedLocation}
        />
      </Offcanvas>
    </>
  );
}
