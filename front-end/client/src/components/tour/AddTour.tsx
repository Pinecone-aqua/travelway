import React from "react";
import { DayType } from "../../../util/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { useUser } from "../../../context/user.context";
import { ToastContainer, toast } from "react-toastify";
import { UserDataContextType } from "../../../util/types";
import Link from "next/link";
import TourDetails from "./TourDetails";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

const AddTour = () => {
  const [activeClass, setActiveClass] = useState(0);
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
    image: "",
    userId: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dayData, setDayData] = useState<DayType[]>([
    {
      image: "",
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
    },
  ]);

  const [message, setMessage] = useState("");
  const [coverImage, setCoverImage] = useState<File | string>();
  const [dayImage, setDayImage] = useState<File[]>([]);
  const { token } = useUser();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    try {
      if (token) {
        const userFromToken: UserDataContextType = jwtDecode(token);
        const userId = userFromToken._id;

        const newFormData = {
          title: travelData.title,
          description: travelData.description,
          userId: userId,
          image: "",
          day: [...dayData],
        };

        const sendFormData = new FormData();
        sendFormData.append("images", String(coverImage));
        if (dayImage.length > 0) {
          dayImage.forEach((image) => sendFormData.append("images", image));
        }
        sendFormData.append("body", JSON.stringify(newFormData));

        console.log("FORM Data ==> ");
        console.log(sendFormData);

        // axios
        //   .post(
        //     `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/travels/add`,
        //     sendFormData
        //   )
        //   .then((response) => response.data)
        //   .then((responseAll) => {
        //     console.log(responseAll);
        //     notifySaveSuccess();
        //   });
      }
    } catch (error) {
      notifySaveError();
      console.error(error);
      setMessage("Failed to upload file.");
      setTimeout(() => {
        setMessage("");
      }, 10000);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
      image: "",
    };
    setDayData((prevData) => [...prevData, newDay]);
    setActiveClass(dayData.length);
  };

  const handleCurrentDisplay = (e: FormEvent, index: number) => {
    e.preventDefault();
    setActiveClass(index);
  };

  const handleCleanObjects = () => {
    setTravelData({
      title: "",
      description: "",
      image: "",
      userId: "",
    });
    setDayData([
      {
        subTitle: "",
        describe: "",
        considerations: "",
        destination: "",
        image: "",
      },
    ]);
    setActiveClass(0);
  };

  const handleCoverImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const headerImage = event.target.files[0];
      setCoverImage(headerImage);
      console.log("Cover event listener");
      console.log(headerImage);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const images: FileList = event.target.files;

      for (let i = 0; i < images.length; i++) {
        dayImage.push(images[i]);
      }
      setDayImage([...dayImage]);
    }
  };

  const notifySaveSuccess = () =>
    toast.success("Амжилттай холбогдлоо!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifySaveError = () =>
    toast.warn("И-мэйл хаяг болон нууц үг буруу байна!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  

  return (
    <>
      <button className="border p-3 rounded-xl font-semibold px-[25px] m-4">
        <Link href="/user">back</Link>
      </button>
      <div className="container w-8/12 mt-16 mb-8 sm:w-6/12 md:w-6/12 lg:w-4/12 ">
        <h2 className="text-center text-slate-800 font-thin">Аяллын хөтөлбөр нэмэх</h2>
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

              <label htmlFor="description" className="mt-2 md:mt-4">
                Тайлбар/Description:
              </label>
              <textarea
                className="inline-block w-full p-2 rounded border border-slate-300"
                rows={5}
                cols={100}
                name="description"
                defaultValue={travelData.description}
                onChange={handleTextAreaChange}
                required
              />
              <label htmlFor="coverImage" className="mt-2 md:mt-4">
                Зураг оруулах/Cover image:
              </label>
              <input
                className="inline-block p-2 rounded w-full border border-slate-600"
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

            <div className="flex flex-col md:flex-row sm:justify-between sm:items-center">
              <input
                type="button"
                className="mt-2 sm:mt-4 md:text-sm bg-cyan-500 p-2 mx-auto w-10/12 md:w-3/12 text-white rounded text-[10px] uppercase"
                value="Өдөр нэмэх"
                onClick={handleAddDay}
              />
              <input
                type="reset"
                name="clearBtn"
                value="ЦЭВЭРЛЭХ"
                onClick={handleCleanObjects}
                className="mt-2 sm:mt-4 md:text-sm border bg-red-600 py-2 mx-auto w-10/12 md:w-3/12 px-8 text-white rounded text-[10px] uppercase"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-4  md:text-sm border bg-blue-600 py-2 mx-auto w-10/12 md:w-3/12 sm:px-5 px-8 text-white rounded text-[10px] uppercase"
              >
                ХАДГАЛАХ
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddTour;
