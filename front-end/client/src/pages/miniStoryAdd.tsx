import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import MiniStoryOffCanvas from "@/components/userProfile/MiniStoryOffCanvas";

export default function MiniStoryAdd(): JSX.Element {
  // const [popup, setPopup] = useState(false);
  // function popUpHandler() {
  //   setPopup(true);
  // }
  /**
   *  user mini collection
   * _id
   * userId
   * notes: [
   * {
   * noteContent: string;
   * noteStyle: string;
   * },
   * {}
   * ]
   *  */
  type NoteType = {
    noteText: string;
    noteStyle: string;
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [userNotes, setUserNote] = useState<NoteType[]>([]);
  const [currStyle, setCurStyle] = useState<string>("");

  useEffect(() => {
    handleInputNotes(currStyle);
  }, [currStyle]);

  const handleInputNotes = (styleText: string) => {
    console.log("Button Clicked ====???");
    if (userNotes.length) {
      const newNotes = userNotes;
      newNotes.push({ noteText: "", noteStyle: styleText });

      setUserNote([...newNotes]);
    }
  };

  function handleOptionSelect(option: string) {
    setSelectedOption(option);
    setCurStyle(option);
  }

  function miniStoryHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post(`http://localhost:3009/minitory/add`, {
      image: e.currentTarget.image.value,
      title: e.currentTarget.title.value,
      sentence: e.currentTarget.sentence.value,
      blockType: selectedOption,
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function miniStoryHandler(e: any) {
  //   e.preventDefault();
  //   axios.post(`http://localhost:3009/miniStory/add`, {
  //     image: e.target.image.value,
  //     title: e.target.title.value,
  //     sentence: e.target.sentence.value,
  //   });
  //   console.log(e.target.sentence.value);
  // }

  return (
    <>
      <div>
        <button className="border p-3 rounded-2xl font-semibold px-[25px] mb-5">
          <a href="/user">back</a>
        </button>
        <div className="w-[100%]  bg-white p-5 z-50  ">
          <div className=" bg-white p-5 z-50">
            <form
              className=" place-content-center gap-5 w-[100%] justify-center flex"
              onSubmit={miniStoryHandler}
            >
              <div className="gap-2 grid ">
                <input
                  name="title"
                  type="text"
                  placeholder="Give me a name"
                  className="border-b-[2px]  p-2  placeholder:text-[25px] font-semibold text-[25px] activate:border-none"
                />
                <div className="flex justify-center">
                  <MiniStoryOffCanvas onOptionSelect={handleOptionSelect} />
                </div>
                {/* <input
                  type="text"
                  placeholder="image"
                  className="border  p-2 rounded-xl w-[800px] h-[300px] bg-gray-30 "
                  name="image"
                />
                <div className="flex justify-center">
                  <MiniStoryOffCanvas onOptionSelect={handleOptionSelect} />
                </div>
                <textarea
                  name="sentence"
                  placeholder="Enter you'r text here"
                  className="border h-auto p-2 rounded-xl text-[25px] placeholder-center"
                />
                <div className="flex justify-center">
                  <MiniStoryOffCanvas onOptionSelect={handleOptionSelect} />
                </div> */}
                <div>
                  {userNotes.map((note, index) => (
                    <textarea
                      cols={30}
                      rows={8}
                      key={index}
                      defaultValue={note}
                    />
                  ))}
                </div>
                <button type="submit" className="border p-2 drop-shadow-xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* <MiniStoryOffCanvas /> */}
        </div>
      </div>
    </>
  );
}
