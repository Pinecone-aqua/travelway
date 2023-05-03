/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FormEvent, useState } from "react";
import AddDay from "../components/travel/AddDay";
import Header from "@/components/Header";
import axios from "axios";
// import axios from "axios";
// import { useRouter } from "next/router";

interface DayType {
  subTitle: "";
  describe: "";
  considerations: "";
  destination: "";
  image: "";
}

const AddTravelPage = () => {
  // const router = useRouter();
  const [activeClass, setActiveClass] = useState(0);
  const [color, setColor] = useState<string>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeColor(e: any): void {
    setColor(e.target.innerText);
  }

  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>([
    {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
      image: "",
    },
  ]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // console.log("Form Data");
    // console.log(formData);
    try {
      const nwData = {
        title: travelData.title,
        description: travelData.description,
        day: [...formData],
      };
      // console.log(nwData);
      //   console.log("NEW DAta ----> ");
      //   console.log(formData);
      const response = await axios.post(
        "http://localhost:3009/travels/add",
        nwData
      );
      console.log(response.data);
      //   router.push("/addtravel");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const data = [...formData];
    data[index][event.target.name] = event.target.value;
    setFormData(data);
  };

  const handleAddDay = () => {
    console.log(formData);

    const object = {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
      image: "",
    };
    setFormData([...formData, object]);
  };

  const handleCurrentDisplay = (e: FormEvent, index: number) => {
    e.preventDefault();
    setActiveClass(index);
  };

  const handleCleanObjects = () => {
    setTravelData({
      title: "",
      description: "",
    });
    setFormData([
      {
        subTitle: "",
        describe: "",
        considerations: "",
        destination: "",
        image: "",
      },
    ]);
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
          <form onSubmit={handleSubmit}>
            <>
              <label htmlFor="title">Аяллын гарчиг/Title:</label>
              <input
                className="inline-block p-2 rounded w-full border border-slate-600"
                type="text"
                name="title"
                defaultValue={travelData.title}
                onChange={handleChange}
                required
              />

              <label htmlFor="description">Тайлбар/Description:</label>
              <input
                className="inline-block p-2 rounded w-full border border-slate-600"
                type="text"
                name="description"
                defaultValue={travelData.description}
                onChange={handleChange}
                required
              />
            </>

            <div>
              <div className="flex flex-wrap">
                {formData.map((elem: DayType, index: number) => (
                  <button
                    key={index + "b"}
                    onClick={(e) => handleCurrentDisplay(e, index)}
                    className={`p-2 my-2 mx-1 text-sm bg-cyan-500 text-white rounded`}
                  >
                    {index === 0
                      ? `${index + 1} дэх өдөр`
                      : `${index + 1} дахь өдөр`}
                  </button>
                ))}
              </div>
              {formData.map((elem: DayType, index: number) => (
                <div key={index + "di"} className="flex flex-col">
                  <div
                    key={index + 1}
                    className={`${index === activeClass ? "block" : "hidden"}`}
                  >
                    <AddDay
                      index={index}
                      elem={elem}
                      handleFormChange={handleFormChange}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <input
                type="button"
                className="mt-4 bg-cyan-500 p-2 w-3/12 mx-5 text-white rounded text-sm uppercase"
                value="Өдөр нэмэх"
                onClick={handleAddDay}
              />
              <input
                type="reset"
                name="clearBtn"
                value="ЦЭВЭРЛЭХ"
                onClick={handleCleanObjects}
                className="mt-4 w-3/12 border bg-red-600 py-2 px-8 text-white rounded text-sm uppercase"
              />
              <button
                type="submit"
                className="mt-4 w-4/12 border bg-blue-600 py-2 px-8 text-white rounded text-sm uppercase"
              >
                ХАДГАЛАХ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTravelPage;
