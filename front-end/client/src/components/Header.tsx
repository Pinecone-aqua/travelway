/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

interface HeaderType {
  user: any;
  setUser: (arg: any) => void;
}
=======
import { useState } from "react";
import "primereact/resources/primereact.min.css";
>>>>>>> Stashed changes

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<null | string>();
  const [user, setUser] = useState<HeaderType | undefined>();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get("token");

  useEffect(() => {
    if (token) setUser(jwtDecode(token));
  }, [token]);

  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <div className="relative sticky top-0">
      <div className="flex gap-3 justify-center content-center text-center  text-white  ">
        <div className="flex  h-7">
          <Link href="/travelJourney">
            <button
              className={
                nav == "Travel"
                  ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1 ease-in duration-300"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3 ease-in duration-300"
              }
              onClick={changeNav}
            >
              Travel
            </button>
          </Link>
          <Link href="/about">
            <button
              className={
                nav == "About"
                  ? "sm:text-[15px] text-[30px] xl:w-[15rem] md:w-[10rem] sm:w-[8rem] mt-3 ease-out duration-300"
                  : "sm:text-[12.5px] w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-4 ease-out duration-300"
              }
              onClick={changeNav}
            >
              About
            </button>
          </Link>
        </div>
        <Link href="/home">
          <button
            className={
              nav == "Home"
                ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] ease-in-out duration-300"
                : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3 ease-in-out duration-300"
            }
            onClick={changeNav}
          >
            Home
          </button>
        </Link>
        <div className="flex  h-7 ">
          <Link href="/gadget">
            <button
              className={
                nav == "Gadget"
                  ? "text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1 ease-out duration-300"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3 ease-out duration-300"
              }
              onClick={changeNav}
            >
              Gadget
            </button>
          </Link>
          <Link href="/contuctUs">
            <button
              className={
                nav == "Contact us"
                  ? "text-[30px] sm:text-[20px] xl:w-[15rem] md:w-[10rem] sm:w-[2rem] mt-1 ease-in duration-300"
                  : "w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50 mt-3 ease-in duration-300"
              }
              onClick={changeNav}
            >
              Contact us
            </button>
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex gap-5">
              <div>hello {user.user}</div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  Cookies.remove("token");
                  setUser(undefined);
                }}
              >
                Logout
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer flex items-center"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </div>
          )}
        </div>
        <div>
          <div className="absolute right-0 mr-[1rem] flex items-center mt-4">
            {/* <input type="text" className="relative right-0 items-center" /> */}
            <Link href="/user">
              <button className="bg-pink-500 w-8 h-6 ease-in duration-300">
                <picture>
                  <img
                    src="../../images/white.svg"
                    alt="pic"
                    className="w-5 ease-in"
                  />
                </picture>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
