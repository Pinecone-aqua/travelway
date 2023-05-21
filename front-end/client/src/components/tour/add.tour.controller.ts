import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useUser } from "../../../context/user.context";
import { toast } from "react-toastify";
import { UserDataContextType } from "../../../util/types";
import { DayType } from "../../../util/types";

const AddTourController = () => {
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

        axios
          .post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/travels/add`,
            sendFormData
          )
          .then((response) => response.data)
          .then((responseAll) => {
            console.log(responseAll);
            notifySaveSuccess();
          });
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

  return {
    activeClass,
    travelData,
    dayData,
    message,
    coverImage,
    dayImage,
    token,
    handleSubmit,
    handleChange,
    handleTextAreaChange,
    handleFormChange,
    handleAddDay,
    handleCurrentDisplay,
    handleCleanObjects,
    handleCoverImageChange,
    handleFileChange,
  };
};

export default AddTourController;
