import React, { ReactNode } from "react";
import Header from "./Header";
import Image from "next/image";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType): JSX.Element => (
  <>
    <div className=" drop-shadow-2xl  p-3">
      <Header />
      <div className=" drop-shadow-xl border rounded-xl mt-4 flex justify-center p-4 w-[100%]">
        <div className=" flex justify-center grid place-content-center p-2 gap-5">
          <div className="flex justify-center">
            <h2 className="font-bold text-[35px]">
              The Informed Retailer Blog
            </h2>
          </div>
          <p className="flex justify-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor
            sit amet consectetur architecto dolorum fuga pariatur?
          </p>
          <div className="box-border h-full">
            <div className="flex gap-3 justify-center ">
              <button className="rounded-full p-2 px-5  text-[20px] bg-black text-white">
                Get start
              </button>
            </div>
          </div>
        </div>
        <img
          width={500}
          height={500}
          src={`../../images/tokyofuji.webp`}
          alt=""
          className="border rounded-xl h-[500px]  object-cover w-[100%]"
        />
      </div>
    </div>
    <div>{children}</div>
    <Footer />
  </>
);

const Footer = () => (
  <div className="text-center text-slate-500 py-4 bg-slate-100 bottom-0 w-full">
    {"Copyright © 2023 Travelway development team."}
  </div>
);

export default Layout;
