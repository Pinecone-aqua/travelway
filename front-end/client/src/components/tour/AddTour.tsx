import React from "react";
import { DayType } from "../../../util/types";
import TourDetails from "./TourDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTourController from "./add.tour.controller";
import Link from "next/link";

const AddTour = () => {
  const {
    activeClass,
    travelData,
    dayData,
    message,
    handleSubmit,
    handleChange,
    handleTextAreaChange,
    handleFormChange,
    handleAddDay,
    handleCurrentDisplay,
    handleCleanObjects,
    handleCoverImageChange,
    handleFileChange,
  } = AddTourController();

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
