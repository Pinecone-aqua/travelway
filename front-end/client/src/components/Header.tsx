import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import "primereact/resources/primereact.min.css";

interface HeaderType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (arg: any) => void;
}

const MENULIST = [
  { name: "Home", uri: "/" },
  { name: "Stories", uri: "/stories" },
  { name: "Travel Blog", uri: "/gadget" },
  { name: "About us", uri: "/about" },
];

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<string | null>();
  const [user, setUser] = useState<HeaderType>();

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
          <LoginAuthentication user={user} setUser={setUser} />
        </div>
      </div>
    </div>
  );
}

const LoginAuthentication = ({ user, setUser }: HeaderType) => {
  const router = useRouter();
  function loginCheckAuth() {
    console.log("User autnentication here:-----> ");
    console.log(user);
    if (user) {
      router.push("/user");
    } else {
      router.push("/auth/login");
    }
  }

  return (
    <>
      <div className="absolute right-0 mr-[1rem] flex items-center">
        {user ? (
          <div className="flex items-center justify-center gap-5 cursor-pointer">
            <div>Нэвтэрсэн {user.user}</div>
            <div
              className="cursor-pointer"
              onClick={() => {
                Cookies.remove("token");
                setUser(undefined);
              }}
            >
              <LoginButton />
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer flex items-center mt-3 opacity-100"
            onClick={loginCheckAuth}
          >
            <LoginButton />
          </div>
        )}
      </div>
    </>
  );
};

const LoginButton = () => (
  <button className="w-8 h-8 ease-in duration-300">
    <picture>
      <img
        src="../../images/efil.webp"
        alt="pic"
        className="w-8 h-8 ease-in rounded-full border border-[2px]"
      />
    </picture>
  </button>
);
