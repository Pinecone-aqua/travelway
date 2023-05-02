import React, { SetStateAction } from "react";
import { DayType } from "../../pages/addtravel";

export interface AddDayProps {
  handleDayAdd: () => void;
}

const AddDay = (props: {
  setFormData: React.Dispatch<SetStateAction<DayType[]>>;
}): JSX.Element => {
  const { setFormData } = props;

  // const { name, value } = e.target;
  // setFormData((prev) => ({ ...prev, [name]: value }));

  function handleChange(e: any) {
    e.preventDefault();
    setFormData((prev) => [
      ...prev,
      {
        subTitle: e.target.subTitle.value,
        describe: e.target.describe.value,
        considerations: e.target.considerations.value,
        destination: e.target.destination.value,
        image: e.target.image.value,
      },
    ]);
  }

  return (
    <div className="flex flex-col border rounded-lg py-4 px-8 mt-8">
      <form onSubmit={handleChange}>
        <label className="mt-4" htmlFor="subTitle">
          Тухайн өдрийн гарчиг/Sub Title:
        </label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="text"
          name="subTitle"
          // onChange={handleChange}
        />

        <label className="mt-4" htmlFor="describe">
          Аялалаар хийх зүйлс/Describe a day:
        </label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="text"
          name="describe"
          // onChange={handleChange}
        />

        <label className="mt-4" htmlFor="considerations">
          Нэмэлт мэдээлэл/Considerations:
        </label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="text"
          name="considerations"
          // onChange={handleChange}
        />

        <label className="mt-4" htmlFor="destination">
          Үзэх газрууд/Destination:
        </label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="text"
          name="destination"
          // onChange={handleChange}
        />

        <label className="mt-4" htmlFor="image">
          Зураг/Image:
        </label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="file"
          name="image"
          // onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-yellow-600 text-white py-2 px-4 w-4/12 ms-auto mt-4 rounded"
        >
          БАТАЛГААЖУУЛАХ
        </button>
        <input
          type="reset"
          className="bg-cyan-500 p-2 m-5 rounded-2xl"
          value="daraagiin udur"
        />
      </form>
    </div>
  );
};
export default AddDay;
