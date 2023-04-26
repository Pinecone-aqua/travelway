/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import TravelJourney from "./travelJourney";
// import ContuctUs from "./contuctUs";
// import Layout from "@/components/Layout";
// import Gadget from "./gadget";
// import Home from "./home";
// import Link from "next/link";
import Header from "@/components/Header";
// import Ourcompany from "./ourcompany";

export default function ContainerPages() {
  // const [nav, setNav] = useState<null | string>();

  // function changeNav(e: any) {
  //   setNav(e.target.innerText);
  // }
  return (
    <>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px]  drop-shadow-2xl relative">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] h-full"
          />
        </picture>
        <Header />
        <div className="relative ms-5 h-full">
          <h2 className="text-white  xxl:text-[10rem] xl:text-[8rem] md:text-[5rem] sm:text-[3rem] ">
            Japan
          </h2>
          <p className="text-white text-[20px]">visited 20 Septenber 2020</p>
        </div>
      </div>
    </>
  );
}
