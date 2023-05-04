/* eslint-disable @next/next/no-assign-module-variable */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor(): JSX.Element {
  const [value, setValue] = useState("");
  const module = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      [{ font: [] }],
      ["bold,italic"],
      [{ list: "ordered" }, { list: "ordered" }],
      ,
    ],
  };
  return (
    <>
      <div>
        <ReactQuill
          theme="snow"
          modules={module}
          onChange={setValue}
          className="bg-white "
        />
        <div dangerouslySetInnerHTML={{ __html: value }} className="bg-white" />
      </div>
    </>
  );
}
