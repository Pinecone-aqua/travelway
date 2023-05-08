import React, { ReactNode } from "react";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType ): JSX.Element => (
  <>
    <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px]  drop-shadow-2xl relative">
      <picture>
        <img
          src="./images/sdcfvgbhnjik8765432wdfghjkio87654.webp"
          alt="pic"
          className="w-full object-cover absolute md:h-[400px] h-full"
        />
      </picture>
      <Header />
      <div className="box-border relative ms-5 h-full">
        <h2 className="text-white  xxl:text-[10rem] xl:text-[8rem] md:text-[5rem] sm:text-[3rem]">
          Mongolia
        </h2>
        <p className="inline-block bg-white bg-opacity-40 rounded-lg right-0 text-center py-1 px-4">
          <span className="opacity-100 text-white text-3xl font-bold">
            {new Date().toISOString().substring(0, 10)}
          </span>
        </p>
      </div>
    </div>
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;

const Footer = () => (
  <div className="text-center text-slate-500 py-4 bg-slate-100 bottom-0 w-full">
    {"Copyright © 2023 Travelway development team."}
  </div>
);
