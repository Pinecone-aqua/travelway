/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export default function TravelWay() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      {popup ? (
        <div>
          <div>
            <button onClick={() => setPopup(false)}>X</button>
          </div>
          <div className=""></div>
        </div>
      ) : (
        <button onClick={() => setPopup(true)}>
          <div className="flex justify-center h-[230px] drop-shadow-2xl rounded-xl pt-5 ">
            <div className="flex  justify-center  rounded-r-[10px] ">
              <img
                src="./images/efil.webp"
                alt="pic"
                className="object-cover w-[280%]  "
              />
              <div className="p-5 place-content-center grid h-[100%] container  rounded-r-xl border border-black">
                <p className="text-[20px] font-semibold">Halloo</p>
                <p className="container text-ellipsis overflow-hidden">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum culpa, odio beatae tenetur ducimus vel reiciendis a hic
                  modi quod blanditiis iure quam neque dolores eveniet
                  necessitatibus molestiae quasi non!
                </p>
              </div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
