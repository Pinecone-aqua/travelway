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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createHandler(e: any): void {
    e.preventDefault();

    axios.post(`http://localhost:3009/stories/create`, {
      title: e.target.title.value,
      description: e.target.description.value,
      province: e.target.province.value,
      myth: e.target.myth.value,
      toDo: addIndicator,
    });
  }
  console.log("addIndicator", addIndicator);

  return (
    <>
      <Button className="button" onClick={handleShow}>
        Launch
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
                <input type="file" className="py-2 rounded-xl w-full" />
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

// <div className=" flex flex-col bg-gray-100 rounded-2xl w-full items-center text-2xl mt-5 shadow-xl shadow-cyan-700">
// <form onSubmit={createHandler}>
//   <div className="w-96">
//     <div className=""> title</div>
//     <input className="py-2 rounded-xl w-full" name="title" />
//   </div>

//   <div className="text-l w-96">
//     <div className="">description</div>
//     <input
//       type="text"
//       name="description"
//       className="block w-auto text-slate-500 h-36 file:rounded-full py-2 rounded-xl w-full"
//     />
//   </div>

//   <div className="w-96">
//     <div className="text-2xl">domog</div>
//     <input
//       type="text"
//       name="myth"
//       className="disabled:opacity-75 py-2 rounded-xl w-full"
//     />
//   </div>
//   <div className="text-l w-96">
//     <div className="">province</div>
//     <input
//       type="text"
//       name="province"
//       className="block w-auto text-slate-500 h-36 file:rounded-full py-2 rounded-xl w-full"
//     />
//   </div>
//   <div>
//     {addIndicator.map((unit: string, index: number) => (
//       <div key={index}>
//         <input
//           type="text"
//           className="p-2 rounded-xl m-2"
//           name="activity"
//           defaultValue={unit}
//         />
//       </div>
//     ))}
//   </div>

//   <div className="w-1/2 w-96">
//     <p>зураг нэмэх</p>
//     <input type="file" className="py-2 rounded-xl w-full" />
//   </div>

//   <button
//     className="bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg shadow-mycolor px-4 py-2 rounded-xl border-2 w-96"
//     type="submit"
//   >
//     creates
//   </button>
// </form>
// <ModalInput
//   setAddIndicator={setAddIndicator}
//   addIndicator={addIndicator}
// />
// </div>
