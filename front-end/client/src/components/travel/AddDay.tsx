import { DayType } from "../../../util/types";
import React, { ChangeEvent } from "react";

const AddDay = (props: {
  index: number;
  elem: DayType;
  handleFormChange(e: ChangeEvent<HTMLInputElement>, index: number): void;
}): JSX.Element => {
  const { index, elem, handleFormChange } = props;

  return (
    <div key={index} className="flex flex-col border rounded-lg py-4 px-8 mt-8">
      <label className="mt-4" htmlFor="subTitle">
        Тухайн өдрийн гарчиг/Sub Title:
      </label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="subTitle"
        defaultValue={elem.subTitle}
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
        defaultValue={elem.describe}
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
        defaultValue={elem.considerations}
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
        defaultValue={elem.destination}
        onChange={(e) => handleFormChange(e, index)}
        required
      />

      <label className="mt-4" htmlFor="image">
        Зураг/Image:
      </label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="file"
        name="image"
        defaultValue={elem.image}
        onChange={(e) => handleFormChange(e, index)}
      />
    </div>
  );
};
export default AddDay;
