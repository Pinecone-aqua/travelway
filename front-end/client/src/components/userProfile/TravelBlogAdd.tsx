import { GrAddCircle } from "react-icons/gr";
import React, { useRef, useState } from "react";
import { Editor } from "primereact/editor";

export default function TravelBlogAdd(): JSX.Element {
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState<string>("");
  const textEditorRef = useRef(null);

  function popUpHandler() {
    setPopup(true);
  }
  function popUpCloseHandler() {
    setPopup(false);
  }

  // function miniStoryHandler(e: any) {
  //   e.preventDefault();
  //   console.log(text);
  //   axios.post(`http://localhost:3009/travelways/add`, {
  //     title: text,
  //     sentence: e.target.sentence.value,
  //   });
  // }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const quill = textEditorRef.current.getQuill();
    if (quill) {
      const html = quill.root.innerHTML;
      console.log(html);
      const response = await fetch(`http://localhost:3009/travelways/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: html,
          sentence: e.target.sentence.value,
        }),
      });
      const message = response.json();
      console.log(message);

      if (response.ok) {
        console.log("response", response.ok);
      } else {
        console.log("response error :", response.ok);
      }
    }
  }

  return (
    <>
      {popup ? (
        <div>
          <div className="w-[100%] border relative bg-white p-5 z-100">
            <form
              className="flex grid place-content-center gap-5 z-100"
              onSubmit={handleSubmit}
            >
              <div className="bg-gray-100 card">
                <Editor
                  value={text}
                  onTextChange={(e) => setText(e.htmlValue)}
                  ref={textEditorRef}
                  style={{ height: "320px" }}
                  name="title"
                />
              </div>
              {/* 
              <div className="bg-gray-500 h-[320px]">
                <TextEditor />
              </div> */}

              <div>
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
