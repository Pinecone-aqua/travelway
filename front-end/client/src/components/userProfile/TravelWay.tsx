/* eslint-disable @next/next/no-img-element */

import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { useState } from "react";
// import { Editor } from "primereact/editor";
import { travelWayType } from "../../../util/travelWayType";

export default function TravelWay(props: { travelWayData: travelWayType }) {
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState<string>("");
  const data = props.travelWayData;

  return (
    <>
      {popup ? (
        <div>
          <div>
            <button
              onClick={() => setPopup(false)}
              className="rounded-full bg-gray-200 m-2 w-[50px] h-[50px] "
            >
              X
            </button>
          </div>
          <div>
            <Editor
              value={data.title}
              onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)}
              style={{ height: "320px" }}
              name="title"
            />
            {/* <div dangerouslySetInnerHTML={{ __html: data.title }} /> */}
          </div>
        </div>
      ) : (
        <button onClick={() => setPopup(true)}>
          <div className="flex justify-center h-[230px] drop-shadow-2xl rounded-xl pt-5 ">
            <div className="flex  justify-center  rounded-r-[10px] ">
              <img
                src="./images/efil.webp"
                alt="pic"
                className="object-cover w-[280%]  "
              />
              <div className="p-5 place-content-center grid h-[100%] container  rounded-r-xl border border-black">
                <p className="text-[20px] font-semibold overflow-hidden">
                  <div dangerouslySetInnerHTML={{ __html: data.title }} />
                </p>
                <p className="container text-ellipsis overflow-hidden">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum culpa, odio beatae tenetur ducimus vel reiciendis a hic
                  modi quod blanditiis iure quam neque dolores eveniet
                  necessitatibus molestiae quasi non!
                </p>
              </div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
