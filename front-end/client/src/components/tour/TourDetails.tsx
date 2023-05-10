import { DayType } from "../../../util/types";
import React, { ChangeEvent } from "react";
import { CldUploadWidget } from "next-cloudinary";

const TourDetails = (props: {
  index: number;
  dayDetailOf: DayType;
  handleFormChange(e: ChangeEvent<HTMLInputElement>, index: number): void;
  handleFileChange(e: ChangeEvent<HTMLInputElement>): void;
}): JSX.Element => {
  const { index, dayDetailOf, handleFormChange } = props;

  return (
    <div key={index} className="flex flex-col border rounded-lg py-4 px-8 mt-8">
      <label className="mt-4" htmlFor="subTitle">
        Тухайн өдрийн гарчиг/Day Title:
      </label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="subTitle"
        defaultValue={dayDetailOf.subTitle}
        onChange={(e) => handleFormChange(e, index)}
        required
      />

      <label className="mt-4" htmlFor="describe">
        Аялалаар хийх зүйлс/Describe a day:
      </label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="describe"
        defaultValue={dayDetailOf.describe}
        onChange={(e) => handleFormChange(e, index)}
        required
      />

      <label className="mt-4" htmlFor="considerations">
        Нэмэлт мэдээлэл/Considerations:
      </label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="considerations"
        defaultValue={dayDetailOf.considerations}
        onChange={(e) => handleFormChange(e, index)}
        required
      />

      <label className="mt-4" htmlFor="destination">
        Үзэх газрууд/Destination:
      </label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="destination"
        defaultValue={dayDetailOf.destination}
        onChange={(e) => handleFormChange(e, index)}
        required
      />

      <label className="mt-4" htmlFor="image">
        Зураг/Image:
      </label>
      {/* <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="file"
        name="image"
        onChange={(e) => handleFileChange(e)}
      /> */}

      <CldUploadWidget uploadPreset="<Upload Preset>">
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button className="button" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
export default TourDetails;
