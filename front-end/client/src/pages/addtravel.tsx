import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddDay from "../components/travel/AddDay";
import Header from "@/components/Header";

export interface DayType {
  subTitle: "";
  describe: "";
  considerations: "";
  destination: "";
  image: "";
}

const AddTravelPage = () => {
  const [color, setColor] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeColor(e: any): void {
    setColor(e.target.innerText);
  }

  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });

  const [formData, setFormData] = useState<DayType>({
    subTitle: "",
    describe: "",
    considerations: "",
    destination: "",
    image: "",
  });

  // console.log(travelData);
  // console.clear();
  // console.log("Form Data ===>");
  // console.log(formData);
  const [dayDataList, setDayDataList] = useState<DayType[]>([]);

  const router = useRouter();

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     const nwData = {
  //       title: travelData.title,
  //       description: travelData.description,
  //       day: [...dayDataList],
  //     };

  //     const response = await axios.post("/travels/add", nwData);
  //     console.log(response.data);

  //     router.push("/travelJourney");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };
  const dataArray = [];
  useEffect(() => {
    dataArray.push(formData);
  }, [formData]);

  // console.log("Data list:===>");
  // console.log(dayDataList);

  const handleClear = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    router.push("addtravel");
  };

  return (
    <>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px] sm:h-[150px] drop-shadow-2xl">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] max-h-full  drop-shadow-2xl"
          />
        </picture>
        <Header />
        <div className="flex justify-center  h-[84px] max-h-[125px] w-full  absolute bottom-0 bottom-[-40px]">
          <div className="flex rounded-[10px] p-3 gap-10 bg-gray-500 h-[84px] items-center  justify-center drop-shadow-2xl">
            <button
              className={
                color === "Description"
                  ? "transition ease-in-out  delay-100 active:scale-110 text-black w-full h-[54px] bg-orange-500 rounded-2xl drop-shadow-2xl "
                  : "text-white w-[250px] h-[54px]"
              }
              onClick={changeColor}
            >
              Description
            </button>

            <button
              className={
                color === "Travel Plan"
                  ? "transition ease-in-out  delay-100 active:scale-110 text-black w-full h-[54px] bg-orange-500 rounded-2xl drop-shadow-2xl"
                  : "text-white w-[250px] h-[54px]"
              }
              onClick={changeColor}
            >
              Travel Plan
            </button>
          </div>
        </div>
      </div>
      <div className="w-6/12 mx-auto mt-16 mb-8">
        <div className="flex flex-col gap-y-2">
          <form>
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

            <button
              className="mt-4 nline-block w-4/12 border bg-blue-600 py-2 px-8 text-white rounded"
              type="submit"
            >
              Submit
            </button>
          </form>

          <AddDay setFormData={setFormData} />

          <div className="flex justify-between items-center">
            <input
              type="button"
              name="clearBtn"
              value="ЦЭВЭРЛЭХ"
              onClick={handleClear}
              className="mt-4 nline-block w-3/12 border bg-red-600 py-2 px-8 text-white rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTravelPage;
