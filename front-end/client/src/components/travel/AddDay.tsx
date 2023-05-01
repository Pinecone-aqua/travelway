import React, { ChangeEvent, useState } from "react";
import { DayType } from "../../pages/addtravel";

export interface AddDayProps {
  handleDayAdd: (data: DayType) => void;
}

const AddDay = (props: AddDayProps): JSX.Element => {
  const { handleDayAdd } = props;

  const [formData, setFormData] = useState<DayType>({
    subTitle: "",
    describe: "",
    considerations: "",
    destination: "",
    image: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="flex flex-col border rounded-lg py-4 px-8 mt-8">
      <label className="mt-4" htmlFor="subTitle">Тухайн өдрийн гарчиг/Sub Title:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="subTitle"
        onChange={handleChange}
      />

      <label className="mt-4" htmlFor="describe">Аялалаар хийх зүйлс/Describe a day:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="describe"
        onChange={handleChange}
      />

      <label className="mt-4" htmlFor="considerations">Нэмэлт мэдээлэл/Considerations:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="considerations"
        onChange={handleChange}
      />

      <label className="mt-4" htmlFor="destination">Үзэх газрууд/Destination:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="destination"
        onChange={handleChange}
      />

      <label className="mt-4" htmlFor="image">Зураг/Image:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="file"
        name="image"
        onChange={handleChange}
      />

      <input
        type="button"
        onClick={() => handleDayAdd(formData)}
        className="bg-yellow-600 text-white py-2 px-4 w-4/12 ms-auto mt-4 rounded"
        value="БАТАЛГААЖУУЛАХ"
      />
    </div>
  );
};
export default AddDay;
