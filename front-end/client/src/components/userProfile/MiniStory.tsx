/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { miniStoryType } from "../../../util/mini-story-type";
// import Dropdown from "react-bootstrap/Dropdown";

export default function MiniStory(props: {
  storyType: miniStoryType;
}): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(false);
  const [mark, setMark] = useState<boolean>(false);
  const data = props.storyType;
  const [hover, setHover] = useState("");

  return (
    <>
      <div className="card flex w-[31%] ">
        <div>
          <button className={`absolute bg-white ${hover}`}>botton</button>
          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <img
            src={data.image}
            alt="pic"
            className="w-[100%]  object-cover rounded-xl"
            onClick={() => setVisible(true)}
            onMouseEnter={() => setHover("bg-red-700 visible opacity")}
            onMouseLeave={() => setHover("invisible")}
          />
        </div>

        <Dialog
          header={
            <>
              <div className="m-0 flex items-center gap-2 ">
                <img
                  src={data.image}
                  alt="pic"
                  className="w-[2rem]  rounded-full h-[2rem]"
                />
                <label className="text-gray-400 text-[13px]">
                  by Robert Harrisont
                </label>
              </div>
            </>
          }
          visible={visible}
          modal={false}
          style={{ width: "70vw", padding: "none" }}
          onHide={() => setVisible(false)}
        >
          <div className=" gap-4 md:flex ">
            <img
              src={data.image}
              alt="pic"
              className="md:w-[60%] object-cover h-[40rem]"
            />
            <div className="m-0 md:w-[50%] px-5 relative">
              <div className="m-0 flex items-center gap-2 hidden md:visible ">
                <img
                  src="./images/fuji.webp"
                  alt="pic"
                  className="w-[3rem]  rounded-full h-[3rem]"
                />
                <label className="text-gray-400">by Robert Harrisont</label>
              </div>
              <p className="font-semibold text-[21px] py-4">{data.title}</p>
              <p>{data.sentence}</p>
              <div className="h-[70px]" />
              <div className="absolute flex justify-between pb-2 bottom-0 w-[100%] ">
                <div className="flex gap-4">
                  {heart == false ? (
                    <button onClick={() => setHeart(true)}>
                      <AiOutlineHeart size={"2em"} />
                    </button>
                  ) : (
                    <button onClick={() => setHeart(false)}>
                      <AiFillHeart size={"2em"} />
                    </button>
                  )}
                </div>
                <div className="pr-5">
                  {mark == false ? (
                    <button onClick={() => setMark(true)}>
                      <BiBookmark size={"2em"} />
                    </button>
                  ) : (
                    <button onClick={() => setMark(false)}>
                      <BsFillBookmarkFill size={"2em"} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
