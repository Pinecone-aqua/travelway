import { GrAddCircle } from "react-icons/gr";
import React, { useState } from "react";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export default function MiniStoryAdd(): JSX.Element {
  const [popup, setPopup] = useState(false);
  function popUpHandler() {
    setPopup(true);
  }
  function popUpCloseHandler() {
    setPopup(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function miniStoryHandler(e: any) {
    e.preventDefault();
    axios.post(
      `${process.env.LOCAL_SERVER}:${process.env.SERVER_PORT}/miniStory/add`,
      {
        image: e.target.image.value,
        title: e.target.title.value,
        sentence: e.target.sentence.value,
      }
    );
    console.log(e.target.sentence.value);
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
              <div className="gap-2 grid w-[800px]">
                <input
                  type="text"
                  placeholder="image"
                  className="border w-full p-2 rounded-xl"
                  name="image"
                />

                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="border w-full w-full p-2 rounded-xl"
                />

                <textarea
                  name="sentence"
                  placeholder="sentence"
                  className="border w-full h-[100%] p-2 rounded-xl"
                />
              </div>
              <button type="submit" className="border p-2 drop-shadow-xl">
                Submit
              </button>
            </form>
            <button
              onClick={popUpCloseHandler}
              className="rounded-full bg-gray-200 m-2 w-[50px] h-[50px]"
            >
              back
            </button>
          </div>
        </div>
      ) : (
        <button
          className="grid place-content-center w-[100%] border border-1px shadow-inner p-2"
          onClick={popUpHandler}
        >
          <GrAddCircle size={"2em"} />
        </button>
      )}
    </>
  );
}
