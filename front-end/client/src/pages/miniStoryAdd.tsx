import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MiniStoryAdd(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function miniStoryHandler(e: any) {
    e.preventDefault();
    axios
      .post(`http://localhost:3009/miniStory/add`, {
        image: e.target.image.value,
        title: e.target.title.value,
        sentence: e.target.sentence.value,
      })
      .then(() => {
        notifySuccess();
      })
      .catch((error) => {
        console.error("Error creating mini story:", error);
        notifyLoginError();
      });

    console.log(e.target.sentence.value);
  }

  const notifySuccess = () =>
    toast.success("Successfully created!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyLoginError = () =>
    toast.warn("Error", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <div>
        <button className="border p-3 rounded-2xl font-semibold px-[25px] mb-5">
          <a href="/user">back</a>
        </button>
        <div className="w-[100%]  bg-white p-5 z-50  ">
          <div className=" bg-white p-5 z-50">
            <form
              className=" place-content-center gap-5 w-[100%] justify-center flex"
              onSubmit={miniStoryHandler}
            >
              <div className="gap-2 grid ">
                <input
                  name="title"
                  type="text"
                  placeholder="Give me a name"
                  className="border-b-[2px]  p-2  placeholder:text-[25px] font-semibold text-[25px] activate:border-none"
                />
                <input
                  type="text"
                  placeholder="image"
                  className="border  p-2 rounded-xl w-[800px] h-[300px] bg-gray-30 "
                  name="image"
                />

                <textarea
                  name="sentence"
                  placeholder="Enter you'r text here"
                  className="border h-auto p-2 rounded-xl text-[25px] placeholder-center"
                />

                <button type="submit" className="border p-2 drop-shadow-xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* <MiniStoryOffCanvas /> */}
        </div>
      </div>
    </>
  );
}
