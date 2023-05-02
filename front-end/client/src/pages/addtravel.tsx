import React, { ChangeEvent, FormEvent, useState } from "react";
import AddDay from "../components/travel/AddDay";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";

export interface DayType {
  subTitle: "";
  describe: "";
  considerations: "";
  destination: "";
  image: "";
}

const AddTravelPage = () => {
  const router = useRouter();
  const [activeClass, setActiveClass] = useState(-1);
  const [color, setColor] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeColor(e: any): void {
    setColor(e.target.innerText);
  }

  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });

  const [formData, setFormData] = useState<DayType[]>([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const nwData = {
        title: travelData.title,
        description: travelData.description,
        day: [...formData],
      };

      console.log("NEW DAta ----> ");
      console.log(formData);

      const response = await axios.post(
        "http://localhost:3009/travels/add",
        nwData
      );
      console.log(response.data);

      router.push("/addtravel");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log("Data list:===>");
  console.log(formData);

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
          <>
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
          </>
          <div className="flex">
            {formData.length < 1 ? (
              <div key={0}>
                <button
                  key={0}
                  onClick={() => setActiveClass(0)}
                  className={`p-2 bg-cyan-500 rounded-xl `}
                >
                  1 udriin aylal
                </button>
                <div className="block">
                  <AddDay setFormData={setFormData} />
                </div>
              </div>
            ) : (
              formData.map((elem: DayType, index: number) => (
                <div key={index}>
                  <button
                    key={index}
                    onClick={() => setActiveClass(index)}
                    className={`p-2 bg-cyan-500 rounded-xl `}
                  >
                    {index + 1}udriin aylal
                  </button>
                  <div
                    key={index}
                    className={`${index != activeClass ? "hidden" : "block"}`}
                  >
                    <AddDay setFormData={setFormData} />
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between items-center">
            <input
              type="reset"
              name="clearBtn"
              value="ЦЭВЭРЛЭХ"
              onClick={handleClear}
              className="mt-4 nline-block w-3/12 border bg-red-600 py-2 px-8 text-white rounded"
            />
            <input
              onClick={handleSubmit}
              type="button"
              value="ХАДГАЛАХ"
              className="mt-4 nline-block w-4/12 border bg-blue-600 py-2 px-8 text-white rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTravelPage;
