import React, { ChangeEvent, FormEvent, useState } from "react";
import { DayType } from "../../../util/types";
import TourDetails from "./TourDetails";
import axios from "axios";
import ImageUploader from "./ImageUploader";

const AddTour = () => {
  // const router = useRouter();

  const [activeClass, setActiveClass] = useState(0);
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dayFormData, setDayFormData] = useState<DayType[]>([
    {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
      image: "",
    },
  ]);

  const [message, setMessage] = useState("");
  const [coverImage, setCoverImage] = useState<File>();

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      if (dayFormData[0].image) {
        const newDataObj = {
          title: travelData.title,
          description: travelData.description,
          image: coverImage,
          day: [...dayFormData],
          userId: "644947267fbc2625e4543407",
        };
        // setAllData((prevAllData) => ({
        //   ...prevAllData,
        //   title: travelData.title,
        //   description: travelData.description,
        //   day: [...dayFormData],
        // }));

        const responseAll = await axios.post(
          `http://localhost:3009/travels/add`,
          newDataObj
        );
        console.log("ALL data =======> ");
        console.log("New Data");
        console.log(newDataObj);
      } else {
        setMessage("Error: Complete form and image upload button click");
      }

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

  const handleImageUrl = (imageUrl: string, index: number) => {
    // setDayFormData((prevData) => {
    //   const newImage = [...prevData];
    //   newImage[index] = {
    //     ...newImage[index],
    //     image: imageUrl,
    //   };
    //   return newImage;
    // });

    setDayFormData((prevData) => {
      const updatedData = prevData.map((day, i) => {
        if (i === index) {
          return {
            ...day,
            image: imageUrl,
          };
        }
        return day;
      });
      return updatedData;
    });
  };

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // setDayFormData((prevData) => {
    //   const newData = [...prevData];
    //   newData[index] = {
    //     ...newData[index],
    //     [event.target.name]: event.target.value,
    //   };
    //   return newData;
    // });

    const { name, value } = event.target;
    setDayFormData((prevData) => {
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
      image: "",
    };
    setDayFormData((prevData) => [...prevData, newDay]);
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
    setDayFormData([
      {
        subTitle: "",
        describe: "",
        considerations: "",
        destination: "",
        image: "",
      },
    ]);
  };

  const handleCoverImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCoverImage(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="w-6/12 mx-auto mt-16 mb-8">
        <div className="flex flex-col gap-y-2">
          <p className="text-red-400 font-normal text-sm">{message}</p>
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
                {dayFormData.map((dayDetail: DayType, index: number) => (
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
              {dayFormData.map((dayDetail: DayType, index: number) => (
                <div key={index + "di"} className="flex flex-col">
                  <div
                    key={index + 1}
                    className={`${index === activeClass ? "block" : "hidden"}`}
                  >
                    <TourDetails
                      index={index}
                      dayDetailOf={dayDetail}
                      handleFormChange={handleFormChange}
                      handleImageUrl={handleImageUrl}
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
