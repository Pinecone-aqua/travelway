import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

interface DayType {
  subTitle: "";
  describe: "";
  considerations: "";
  destination: "";
  image: "";
}

export default function AddDay(props: {
  setAddDay: Dispatch<SetStateAction<DayType>>;
  handleDayAdd: Dispatch<SetStateAction<FormEvent>>;
}): JSX.Element {
  const { setAddDay } = props;
  const { handleDayAdd } = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setAddDay((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="flex grid-cols-1">
      <label htmlFor="subTitle">Тухайн өдрийн гарчиг/Sub Title:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="subTitle"
        onChange={handleChange}
      />

      <label htmlFor="describe">Аялалаар хийх зүйлс/Describe a day:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="describe"
        onChange={handleChange}
      />

      <label htmlFor="considerations">Нэмэлт мэдээлэл/Considerations:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="considerations"
        onChange={handleChange}
      />

      <label htmlFor="destination">Үзэх газрууд/Destination:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="text"
        name="destination"
        onChange={handleChange}
      />

      <label htmlFor="image">Зураг/Image:</label>
      <input
        className="inline-block p-2 rounded w-full border border-slate-600"
        type="file"
        name="image"
        onChange={handleChange}
      />

      <input type="button" onClick={handleDayAdd} className="bg-yellow-700 text-white py-2 px-4">
        БАТАЛГААЖУУЛАХ
      </input>
    </div>
  );
}
