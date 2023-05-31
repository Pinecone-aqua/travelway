import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useUser } from "../../../context/user.context";
import { UserDataContextType, DayType } from "../../../util/types";
import TourDetails from "./TourDetails";
import axios from "axios";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTravelData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCoverImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const headerImage = event.target.files[0];
      setCoverImage(headerImage);
      console.log("Cover - ", coverImage);
    }
  };

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    setDayData((prevData) =>
      prevData.map((day, i) => (i === index ? { ...day, [name]: value } : day))
    );
  };

  // Images from form
  // and add to useState()
  // how can I also change image in state and form
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImage: FileList = event.target.files;

      for (let i = 0; i < selectedImage.length; i++) {
        // if(index === i) {
        // dayImage.splice(index, 1, selectedImage[i]);
        // } else {
        dayImage.push(selectedImage[i]);
        // }
      }
      setDayImage([...dayImage]);
      // event.target.images.value = null;
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.count("Assert-");
    // console.log("ALL DATA Check===> ");

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

        console.log("SUBMITED ======> Selected images");
        console.log(dayImage);

        const sendFormData = new FormData();
        if (coverImage) {
          sendFormData.append("images", coverImage);
        }

        for (let i = 0; i < dayImage.length; i++) {
          sendFormData.append("images", dayImage[i]);
        }

        sendFormData.append("body", JSON.stringify(newFormData));

        console.log("All images 0__0/? ====> ");
        console.log(newFormData);
        console.log(sendFormData.get("body"));
        console.log("IMA?GES LIST 0)_(0 ==> ");
        console.log(sendFormData.getAll("images"));

        axios
          .post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/travels/add`,
            sendFormData
          )
          .then((response) => response.data)
          .then((responseAll) => {
            console.log(responseAll);
          });
        notifySaveSuccess();
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

  return (
    <>
      <button className="border p-3 rounded-xl font-semibold px-[25px] m-4">
        <Link href="/user">back</Link>
      </button>
      <div className="container w-8/12 mt-16 mb-8 sm:w-6/12 md:w-6/12 lg:w-4/12 text-black ">
        <h2 className="text-center text-slate-800 font-thin">
          Аяллын хөтөлбөр нэмэх
        </h2>
        <div className="flex flex-col gap-y-2">
          <p className="text-red-400 font-normal text-sm">{message}</p>
          <form onSubmit={handleSubmit}>
            <>
              <label htmlFor="title">Аяллын гарчиг/Title:</label>
              <input
                className="inline-block p-2 rounded w-full border border-slate-600 text-black"
                type="text"
                name="title"
                defaultValue={travelData.title}
                onChange={handleChange}
                required
              />

              <label htmlFor="description" className="mt-2 md:mt-4 text-black">
                Тайлбар/Description:
              </label>
              <textarea
                className="inline-block w-full p-2 rounded border border-slate-300 text-black"
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
                className="inline-block p-2 rounded w-full border border-slate-600 text-black"
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
                    className={`${
                      index === activeClass
                        ? "p-2 my-2 mx-1 text-sm bg-cyan-600 text-white rounded"
                        : "p-2 my-2 mx-1 text-sm bg-cyan-500 text-white rounded"
                    }`}
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
                className="mt-2 text-black sm:mt-4 md:text-sm bg-cyan-500 p-2 mx-auto w-10/12 md:w-3/12 text-white rounded text-[10px] uppercase"
                value="Өдөр нэмэх"
                onClick={handleAddDay}
              />
              <input
                type="reset"
                name="clearBtn"
                value="ЦЭВЭРЛЭХ"
                onClick={handleCleanObjects}
                className="mt-2 sm:mt-4 text-black md:text-sm border bg-red-600 py-2 mx-auto w-10/12 md:w-3/12 px-8 text-white rounded text-[10px] uppercase"
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
