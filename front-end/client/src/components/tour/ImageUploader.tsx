import axios from "axios";
import React, { ChangeEvent, useState } from "react";

// Hi, Image uploader is one row in DOM and image uploader return file url
// easy usable component. author by Yalalt
const ImageUploader = (props: {
  index: number;
  handleImageUrl: (imageUrl: string, index: number) => void;
}) => {
  const [file, setFile] = useState<File>();
  const { index, handleImageUrl } = props;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmitImageUploader = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();

    try {
      if (file) {
        formData.append("image", file);
        const response = await axios.post(
          "http://localhost:3009/travels/uploadimg",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        handleImageUrl(response.data, index);
        console.log("Amjilttai orloo");
      } else {
        console.log("Error occurence when check file data");
      }
    } catch (error) {
      // Handle error
      console.log("Erroro", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleSubmitImageUploader}
        type="button"
        className="bg-slate-100 rounded py-1 px-4"
      >
        😞 Upload
      </button>
    </div>
  );
};

export default ImageUploader;
