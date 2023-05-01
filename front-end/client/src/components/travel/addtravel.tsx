import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";


const AddTravelPage: React.FC = () => {
  // const [text, setText] = useState("");
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
    subTitle: "",
    describe: "",
    considerations: "",
    destination: "",
    image: "",
  });

  const router = useRouter();

  // const handleTextChange = (newText: string) => {
  //   setText(newText);
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newDayArray = [
        {
          subTitle: travelData.subTitle,
          describe: travelData.describe,
          considerations: travelData.considerations,
          destination: travelData.destination,
          image: travelData.image,
        },
      ];

      const nwData = {
        title: travelData.title,
        description: travelData.description,
        day: [...newDayArray],
      };

      const response = await axios.post("/travels/add", nwData);
      console.log(response.data);

      router.push("/travelJourney");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="w-6/12 mx-auto my-8">
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
      <label htmlFor="title">Аяллын гарчиг/Title:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="text" name="title" onChange={handleChange} />

      <label htmlFor="description">Тайлбар/Description:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="text" name="description" onChange={handleChange} />

      {/* <TextEditor value={text} onChange={handleTextChange} /> */}

      <label htmlFor="subTitle">Тухайн өдрийн гарчиг/Sub Title:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="text" name="subTitle" onChange={handleChange} />

      <label htmlFor="describe">Аялалаар хийх зүйлс/Describe a day:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="text" name="describe" onChange={handleChange} />

      <label htmlFor="considerations">Нэмэлт мэдээлэл/Considerations:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="text" name="considerations" onChange={handleChange} />

      <label htmlFor="destination">Үзэх газрууд/Destination:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="text" name="destination" onChange={handleChange} />

      <label htmlFor="image">Зураг/Image:</label>
      <input className="inline-block p-2 rounded w-full border border-slate-600" type="file" name="image" onChange={handleChange} />

      <button className="mt-4 nline-block w-full border bg-blue-600 py-2 px-8 text-white rounded" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AddTravelPage;
