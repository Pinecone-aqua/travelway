import Link from "next/link";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";

export default function HeroSection() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className=" drop-shadow-xl border rounded-xl mt-4  md:flex justify-center p-4 w-[100%] ">
        <div className=" flex justify-center grid place-content-center p-2 md:gap-5 z-50 gap-3">
          <div className="flex justify-center">
            <h2 className="font-bold text-[32px] text-center">
              The Informed Retailer Blog
            </h2>
          </div>
          <p className="flex justify-center text-center">
            Welcome to TravelWay, a travel blog where travelers can share their
            stories, knowledge, and suggestions with fellow adventure
            enthusiasts.
          </p>
          <div className="box-border h-full">
            <div className="flex gap-3 justify-center ">
              {user ? (
                <Link
                  href="/user"
                  className="rounded-full font-semibold px-5 py-2 pl-[10px] text-[18px] bg-black text-white cursor-pointer hover:bg-gray-700 transition-colors duration-300 ease-in-out transform-gpu hover:scale-105 active:bg-gray-900"
                >
                  Get started
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="rounded-full font-semibold px-5 py-2 pl-[10px] text-[18px] bg-black text-white cursor-pointer hover:bg-gray-700 transition-colors duration-300 ease-in-out transform-gpu hover:scale-105 active:bg-gray-900"
                >
                  Get started
                </Link>
              )}
            </div>
          </div>
        </div>
        <picture className="w-[100%]">
          <img
            width={500}
            height={500}
            src={`../../images/tokyofuji.webp`}
            alt=""
            className="border rounded-xl h-[500px]  object-cover w-[100%]"
          />
        </picture>
      </div>
    </>
  );
}
