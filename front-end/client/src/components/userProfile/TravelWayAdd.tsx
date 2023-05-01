/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { GrAddCircle } from "react-icons/gr";
import axios from "axios";
import React, { useState } from "react";

import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function TravelWayAdd(): JSX.Element {
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState<string>("");

  function popUpHandler() {
    setPopup(true);
  }
  function popUpCloseHandler() {
    setPopup(false);
  }

  function miniStoryHandler(e: any) {
    e.preventDefault();
    axios.post(`http://localhost:3009/ministories/add`, {
      image: e.target.image.value,
      title: e.target.title.value,
      sentence: e.target.sentence.value,
    });
    console.log("e.target.title.innerText :", e.target.title.value);
    console.log("e.target.sentence.innerText :", e.target.sentence.value);
  }

  return (
    <>
      {popup ? (
        <div>
          <div className="w-[100%] border relative bg-white p-5 ">
            <form
              className="flex grid place-content-center gap-5 "
              onSubmit={miniStoryHandler}
            >
              <div className="bg-gray-100">
                <Editor
                  value={text}
                  onTextChange={(e: EditorTextChangeEvent) =>
                    setText(e.textValue)
                  }
                  style={{ height: "320px" }}
                  name=""
                />
              </div>

              <div>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="border w-full"
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
          className="grid place-content-center w-[100%] border border-1px shadow-inner p-2"
          onClick={popUpHandler}
        >
          <GrAddCircle size={"2em"} />
        </button>
      )}
    </>
  );
}
