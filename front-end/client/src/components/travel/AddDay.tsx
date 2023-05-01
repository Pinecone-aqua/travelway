import React, { ChangeEvent, FormEvent, useState } from "react";

export default function AddDay({}) {
  const [newDayArray, setNewDayArray] = useState({
    subTitle: "",
    describe: "",
    considerations: "",
    destination: "",
    image: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setNewDayArray((prev) => ({ ...prev, [name]: value }));
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

      <input type="button" className="bg-yellow-700 text-white py-2 px-4">
        БАТАЛГААЖУУЛАХ
      </input>
    </div>
  );
}
