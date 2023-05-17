import React, { ChangeEvent, FormEvent, useState } from "react";
import { DayType } from "../../../util/types";
import TourDetails from "./TourDetails";
import axios from "axios";
import { useUser } from "../../../context/user.context";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTour = () => {
  // const router = useRouter();

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

  const handleSubmit = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();

    try {

      if (token) {
        const userFromToken = jwtDecode(token);
        const userId = userFromToken?._id;

        const newFormData = {
          title: travelData.title,
          description: travelData.description,
          userId: userId,
          image: "",
          day: [...dayData],
        };
  
        const sendFormData = new FormData();
        sendFormData.append('images', coverImage);
        if (dayImage.length > 0) {
          dayImage.forEach((image) => sendFormData.append('images', image));
        }
        sendFormData.append("body", JSON.stringify(newFormData));
  

        const responseAll = await axios.post(
          `http://localhost:3009/travels/add`,
          sendFormData
        );

        console.log(responseAll);
        notifySaveSuccess();
        // router.push("/addtravel");
      }
    } catch (error) {
      notifySaveError()
      console.error(error);
      setMessage("Failed to upload file.");
      setTimeout(() => {
        setMessage("");
      }, 10000);
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
    if (event.target.files) {
      const images: FileList = event.target.files;

      for (let i = 0; i < images.length; i++) {
        dayImage.push(images[i]);
      }
      setDayImage([...dayImage]);
    }
  };

  const notifySaveSuccess = () =>
    toast.success("🦄 Successfull login!", {
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
    toast.warn("🦄 Login unsuccessful, please check email password!", {
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
