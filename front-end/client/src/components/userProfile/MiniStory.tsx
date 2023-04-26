/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

export default function MiniStory(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="card flex justify-content-center">
        <button onClick={() => setVisible(true)} className="w-[33%]">
          <img src="./images/fuji.webp" alt="pic" />
        </button>
        <Dialog
          header={
            <>
              <div className="m-0 flex items-center gap-2 ">
                <img
                  src="./images/fuji.webp"
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
              src="./images/fuji.webp"
              alt="pic"
              className="md:w-[60%] object-cover "
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
              <p className="font-semibold text-[21px] py-4">Hallo</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="h-[70px]" />
              <div className="absolute flex justify-between pb-2 bottom-0 w-[100%] ">
                <div className="flex gap-4">
                  <p>
                    <AiOutlineHeart size={"2em"} />
                  </p>
                </div>
                <div className="pr-5">
                  <BiBookmark size={"2em"} />
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
