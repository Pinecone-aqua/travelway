import React, { ChangeEvent, FormEvent, useState } from "react";
import { DayType } from "../../../util/types";
import TourDetails from "./TourDetails";
import axios from "axios";

const AddTour = () => {
  // const router = useRouter();

  const [activeClass, setActiveClass] = useState(0);
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
    images: [],
    userId: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dayData, setDayData] = useState<DayType[]>([
    {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
    },
  ]);

  const [message, setMessage] = useState("");
  const [coverImage, setCoverImage] = useState<File>();
  const [dayImage, setDayImage] = useState<File[]>([]);

  const handleSubmit = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const newFormData = {
        title: travelData.title,
        description: travelData.description,
        userId: "644947267fbc2625e4543407",
        images: [],
        day: [...dayData],
      };

      const sendFormData = new FormData();
      
      if (dayImage.length > 0) {
        dayImage.forEach((image) => sendFormData.append("images", image));
      }
      sendFormData.append("body", JSON.stringify(newFormData));

      const responseAll = await axios.post(
        `http://localhost:3009/travels/add`,
        sendFormData
      );

      // router.push("/addtravel");
    } catch (error) {
      console.error(error);
      setMessage("Failed to upload file.");
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
    const { name, value } = event.target;
    setDayData((prevData) => {
      const updateData = prevData.map((day, i) => {
        if (i === index) {
          return {
            ...day,
            [name]: value,
          };
        }
        return day;
      });
      return updateData;
    });
  };

  const handleAddDay = () => {
    const newDay = {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
    };
    setDayData((prevData) => [...prevData, newDay]);
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
    setDayData([
      {
        subTitle: "",
        describe: "",
        considerations: "",
        destination: "",
      },
    ]);
  };

  const handleCoverImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const headerImage = event.target.files;
      setCoverImage(headerImage[0]);
      console.log("Cover image");
      console.log(coverImage);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const images: FileList = event.target.files;

      for (let i = 0; i < images.length; i++) {
        dayImage.push(images[i]);
      }
      setDayImage([...dayImage]);
      console.log("Days images: ==> ");
      console.log(dayImage);
    }
  };

  return (
    <>
      <div className="w-6/12 mx-auto mt-16 mb-8">
        <div className="flex flex-col gap-y-2">
          <p className="text-red-400 font-normal text-sm">{message}</p>
          <form onSubmit={(e) => handleSubmit(e)}>
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
              <label htmlFor="coverImage">Зураг оруулах/Cover image:</label>
              <input
                className="inline-block -2 rounded w-full border border-slate-600"
                type="file"
                name="coverImage"
                onChange={handleCoverImageChange}
              />
            </>

            <div>
              <div className="flex flex-wrap">
                {dayData.map((dayDetail: DayType, index: number) => (
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
              {dayData.map((dayDetail: DayType, index: number) => (
                <div key={index + "di"} className="flex flex-col">
                  <div
                    key={index + 1}
                    className={`${index === activeClass ? "block" : "hidden"}`}
                  >
                    <TourDetails
                      index={index}
                      dayDetailOf={dayDetail}
                      handleFormChange={handleFormChange}
                      handleFileChange={handleFileChange}
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

export default AddTour;
