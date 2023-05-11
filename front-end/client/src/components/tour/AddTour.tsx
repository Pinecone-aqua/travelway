import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { DayType } from "../../../util/types";
import TourDetails from "./TourDetails";

const AddTour = () => {
  // const router = useRouter();
  const [activeClass, setActiveClass] = useState(0);
  const [travelData, setTravelData] = useState({
    title: "",
    description: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dayFormData, setDayFormData] = useState<any>([
    {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
      image: "",
    },
  ]);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (!imageFile) {
      setMessage("Please select a file.");
      return;
    }

    try {
      const formInputData = new FormData();
      const imageRef: File = imageFile;
      const imageDetails = {
        title: "Image title here",
        description: "Image description details",
      };

      formInputData.append("image", imageRef);
      formInputData.append("body", JSON.stringify(imageDetails));

      console.log("Form Data here ====> ");
      console.log(formInputData);

      console.log("\nResponse Data here ====> ");
      const response = await axios
        .post("http://localhost:3009/travels/uploadimg", formInputData)
        .then((res) => console.log(res))
        .catch((error) => console.error(error));

      console.log("After response here");
      console.log(response);
      setMessage(`File uploaded successfully. URL: ${response}`);

      // const nwData = {
      //   title: travelData.title,
      //   description: travelData.description,
      //   image: "image url here",
      // };

      // const responseAll = await axios.post(
      //   `http://localhost:3009/travels/add`,
      //   nwData
      // );
      // console.log(responseAll.data);
      // router.push("/addtravel");
    } catch (error) {
      console.error(error);
      setMessage("Failed to upload file.");
    }
  };

  // const runAllFetch = (data: FormData, formData: FormData) => {
    
  // }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: FileList = e.target.files;
      setImageFile(files[0]);
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
    const data = [...dayFormData];
    data[index][event.target.name] = event.target.value;
    setDayFormData(data);
  };

  const handleAddDay = () => {
    console.log(dayFormData);

    const object = {
      subTitle: "",
      describe: "",
      considerations: "",
      destination: "",
      image: "",
    };
    setDayFormData([...dayFormData, object]);
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

  return (
    <>
      <div className="w-6/12 mx-auto mt-16 mb-8">
        <div className="flex flex-col gap-y-2">
          <p className="text-red-400 font-thin text-sm">{message}</p>
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
