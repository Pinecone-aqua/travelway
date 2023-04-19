import { useState } from "react";
import TravelJourney from "./travelJourney";
import ContuctUs from "./contuctUs";
import Gudget from "./gudget";
import Ourcompany from "./ourcompany";
import Layout from "@/components/Layout";

export default function Home() {
  const [nav, setNav] = useState<null | string>();

  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <Layout>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px] drop-shadow-2xl">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] max-h-full "
          />
        </picture>
        /* hero section */
        <div className="relative">
        <div className="flex gap-3 justify-center content-center text-center  text-white  ">
          <div className="flex w-[15rem] h-7">
            <button
              className={
                nav == "Travel"
                  ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
              }
              onClick={changeNav}
            >
              Travel
            </button>
            <button
              className={
                nav == "Our company"
                  ? "text-[30px] xl:w-[25rem] md:w-[10rem] sm:w-[8rem] mt-1"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
              }
              onClick={changeNav}
            >
              Our company
            </button>
          </div>
          <button
            className={
              nav == "Home"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem]"
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
            }
            onClick={changeNav}
          >
            Home
          </button>
          <div className="flex w-[15rem] h-7 ">
            <button
              className={
                nav == "Gadget"
                  ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
              }
              onClick={changeNav}
            >
              Gadget
            </button>
            <button
              className={
                nav == "Contact us"
                  ? "text-[30px] xl:w-[25rem] md:w-[10rem] sm:w-[8rem] mt-1"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3"
              }
              onClick={changeNav}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
        /* hero section */
        <div className="relative ms-5 h-[300px]   ">
          <h2 className="text-white  xxl:text-[10rem] xl:text-[8rem] md:text-[5rem] sm:text-[3rem] ">
            Japan
          </h2>
          <p className="text-white text-[20px]">visited 20 Septenber 2020</p>
        </div>
      </div>
      <div>
        { nav == "Travel" ? (
          <TravelJourney />
        ) : nav == "Our company" ? (
          <Ourcompany />
        ) :  nav == "Gudget" ? (
          <Gudget />
        ) : nav == "Contact us" ? (
          <ContuctUs />
        ) : (
          <TravelJourney/>
        )}
      </div>
    </Layout>
  );
}