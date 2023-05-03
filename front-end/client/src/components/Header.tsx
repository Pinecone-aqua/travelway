/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

interface HeaderType {
  user: any;
  setUser: (arg: any) => void;
}

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<null | string>();
  const [user, setUser] = useState<HeaderType | undefined>();
  const router = useRouter();

  const activatedStyle =
    "text-[30px] ease-in duration-300 md:w-[10rem] sm:w-[8rem] ";
  const defaultStyle =
    "w-[15rem] ease-in duration-300 md:w-[10rem] sm:w-[8rem] opacity-50 mt-3 sm:w-[5rem]";
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
                  ? ` w-[15rem]  mt-1 ${activatedStyle}`
                  : ` ${defaultStyle}`
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
                  ? `xl:w-[15rem] sm:text-[15px] w-[15rem] mt-1 ${activatedStyle}`
                  : `sm:text-[12.5px]  mt-4 ${defaultStyle}`
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
              nav == "Home" ? `w-[15rem]  ${activatedStyle}` : `${defaultStyle}`
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
                  ? `w-[15rem] mt-1 ${activatedStyle}`
                  : `${defaultStyle}`
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
                  ? `sm:text-[20px] xl:w-[15rem] sm:w-[2rem] mt-1 ${activatedStyle}`
                  : `${defaultStyle}`
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
              className="cursor-pointer flex items-center mt-3 opacity-50"
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
