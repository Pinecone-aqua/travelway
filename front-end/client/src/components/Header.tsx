import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import "primereact/resources/primereact.min.css";

interface HeaderType {
  user: string;
  setUser: (arg: string) => void;
}

const MENULIST = [
  { name: "Home", uri: "/" },
  { name: "MiniStories", uri: "/stories" },
  { name: "Аяллын хөтөлбөр", uri: "/tour" },
  { name: "Travel Blog", uri: "/gadget" },
  { name: "About us", uri: "/about" },
];

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<null | string>();
  const [user, setUser] = useState<HeaderType | undefined>();

  const activatedStyle =
    "opacity-100 text-xl mt-3 ease-out duration-300 md:w-[192px] sm:w-[142px] w-[96px]";
  const defaultStyle =
    "opacity-70 text-lg mt-3 ease-out duration-300 md:w-[160px] sm:w-[128px] w-[80px]";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get("token");

  useEffect(() => {
    if (token) setUser(jwtDecode(token));
  }, [token]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeNav(e: any) {
    setNav(e.target.innerText);
  }
  return (
    <div className="sticky top-0">
      <div className="flex gap-3 justify-center content-center text-center text-white">
        <div className="flex items-center justify-center h-7 w-full scroll-m-2">
          {MENULIST.map((menuItem, index) => (
            <Link key={index} href={menuItem.uri}>
              <button
                className={
                  nav == menuItem.name
                    ? `w-[240px]  ${activatedStyle}`
                    : `${defaultStyle}`
                }
                onClick={changeNav}
              >
                {menuItem.name}
              </button>
            </Link>
          ))}
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

const LoginAuthentication = () => (
  <>
    {/* <div>
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
        </div>  */}
  </>
);
