/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { GrAddCircle } from "react-icons/gr";
import React, { useState } from "react";
import axios from "axios";

export default function MiniStoryAdd(): JSX.Element {
  const [popup, setPopup] = useState(false);
  function popUpHandler() {
    setPopup(true);
  }
  function popUpCloseHandler() {
    setPopup(false);
  }

  function miniStoryHandler(e: any) {
    e.preventDefault();
    axios.post(`http://localhost:3009/miniStory/add`, {
      image: e.target.image.innerText,
      title: e.target.title.innerText,
      sentence: e.target.sentence.innerText,
    });
    console.log("e.target.title.innerText :", e.target.title.innerText);
    console.log("e.target.image.innerText :", e.target.image.innerText);
  }
  return (
    <>
      {popup ? (
        <div>
          <div className="w-[100%] border absolute bg-white p-5 ">
            <form
              className="flex grid place-content-center gap-5 "
              onSubmit={miniStoryHandler}
            >
              <div>
                <input
                  type="file"
                  placeholder="image"
                  className="border"
                  name="image"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  className="border w-full"
                  name="title"
                />

                <textarea
                  name="sentence"
                  placeholder="sentence"
                  className="border w-full h-[100%]"
                />
              </div>
              <button type="submit" className="border p-2">
                Submit
              </button>
            </form>
            <button
              onClick={popUpCloseHandler}
              className="p-2 bg-green-500 rounded-full"
            >
              back
            </button>
          </div>
        </div>
      ) : (
        <button
          className="grid place-content-center w-[100%] border border-1px shadow-inner"
          onClick={popUpHandler}
        >
          <GrAddCircle size={"2em"} />
        </button>
      )}
    </>
  );
}
