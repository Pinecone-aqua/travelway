import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    [{ font: [] }],
    ["bold,italic"],
    [{ list: "ordered" }, { list: "ordered" }],
  ],
};

export default function TextEditor(): JSX.Element {
  const [value, setValue] = useState("");
  return (
    <>
      <div>
        <ReactQuill modules={modules} onChange={setValue} />
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </>
  );
}
