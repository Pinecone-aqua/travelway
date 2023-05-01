import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import AddDay from "./AddDay";

interface DayType {
  subTitle: "";
  describe: "";
  considerations: "";
  destination: "";
  image: "";
}

const AddTravelPage: React.FC = () => {
  // const [text, setText] = useState("");
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });
  const [dayData, setDayData] = useState<DayType[]>([]);

  const router = useRouter();

  // const handleTextChange = (newText: string) => {
  //   setText(newText);
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const nwData = {
        title: travelData.title,
        description: travelData.description,
        day: [...dayData],
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

  const handleDayAdd = (data: DayType): void => {
    const arr = dayData;
    arr.push(data);
    setDayData([...arr, data]);
  };

  return (
    <div className="w-6/12 mx-auto my-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        <label htmlFor="title">Аяллын гарчиг/Title:</label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="text"
          name="title"
          onChange={handleChange}
        />

        <label htmlFor="description">Тайлбар/Description:</label>
        <input
          className="inline-block p-2 rounded w-full border border-slate-600"
          type="text"
          name="description"
          onChange={handleChange}
        />

        {/* <TextEditor value={text} onChange={handleTextChange} /> */}

        <AddDay handleDayAdd={handleDayAdd} />

        <button
          className="mt-4 nline-block w-full border bg-blue-600 py-2 px-8 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTravelPage;
