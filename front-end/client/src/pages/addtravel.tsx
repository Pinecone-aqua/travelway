import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import AddDay from "../components/travel/AddDay";

export interface DayType {
  subTitle: "";
  describe: "";
  considerations: "";
  destination: "";
  image: "";
}

const AddTravelPage = () => {
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });

  const [dayDataList, setDayDataList] = useState<DayType[]>([]);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const nwData = {
        title: travelData.title,
        description: travelData.description,
        day: [...dayDataList],
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
    setDayDataList([...dayDataList, data]);
  };

  const handleClear = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    router.push("addtravel");
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

        <AddDay handleDayAdd={handleDayAdd} />

        <div className="flex justify-between items-center">
          <input
            type="button"
            name="clearBtn"
            value="ЦЭВЭРЛЭХ"
            onClick={handleClear}
            className="mt-4 nline-block w-3/12 border bg-red-600 py-2 px-8 text-white rounded"
          />
          <button
            className="mt-4 nline-block w-4/12 border bg-blue-600 py-2 px-8 text-white rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTravelPage;
