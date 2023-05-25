import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser } from "../../context/user.context";
import Dropdown from "react-bootstrap/Dropdown";

interface HeaderType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (arg: any) => void;
}

const MENULIST = [
  { name: "Нүүр", uri: "/" },
  { name: "Аялал", uri: "/stories" },
  { name: "Аяллын блог", uri: "/travelBlog" },
  { name: "Бидний тухай", uri: "/about" },
];

export default function Header(): JSX.Element {
  const [nav, setNav] = useState<string | null>();
  const [isResponsive, setIsResponsive] = useState(false);
  const { user, setUser } = useUser();
  // user has email password

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeNav(e: any) {
    setNav(e.target.innerText);
  }

  return (
    <header id="header">
      <div className="innerHeader active">
        <div className="contentWrapper flex justify-between">
          <div className="left">
            {isResponsive ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<RxHamburgerMenu />}
                  style={{ backgroundColor: "transparent" }}
                />
                <MenuList className="bg-white">
                  {MENULIST.map((menuItem, index) => (
                    <Link href={menuItem.uri} key={index}>
                      <MenuItem
                        key={index}
                        className="hover:bg-gray text-black"
                      >
                        <button>{menuItem.name}</button>
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              MENULIST.map((menuItem, index) => (
                <Link key={index} href={menuItem.uri} className="ml-5">
                  <button onClick={changeNav}>{menuItem.name}</button>
                </Link>
              ))
            )}
          </div>
          <div className="logo">
            <Link href="/">
              <svg
                className="w-[77.99px] h-[40px] mainLogo"
                viewBox="0 0 77.99 40"
              >
                <path d="M69.23,5.67c-4.38-2.11-9.49-2.09-13.86,0.06l0.57,0.66c0.29,0.33,0.75,0.44,1.16,0.27 c3.73-1.47,7.91-1.3,11.52,0.45c3.21,1.49,5.69,4.21,6.89,7.55c2.86,7.36-0.78,15.64-8.14,18.51c-1.63,0.63-3.35,0.96-5.1,0.97 c-2.53,0-5.01-0.69-7.18-1.98v-0.01l-1.05-0.68c-6.38-4.58-7.85-13.46-3.27-19.84c0.82-1.15,1.82-2.17,2.94-3.03 c4.53,5.76,5.22,13.64,1.77,20.1c-0.4,0.75-0.16,1.68,0.55,2.14l0,0c4.6-7.14,4.19-16.41-1.03-23.12l0,0l-1.01-1.21h-0.01 c-7.34-8.1-19.86-8.72-27.97-1.38c-0.56,0.51-1.09,1.05-1.59,1.62C19.96,3.79,14.32,3.27,9.4,5.36c-3.62,1.44-6.5,4.27-8.02,7.86 c-4.77,11.46,3.53,22.49,14.35,22.49c2.48,0,4.93-0.6,7.14-1.74l0,0c-0.58-0.72-1.55-0.98-2.41-0.65 c-3.82,1.35-8.02,1.03-11.59-0.87c-2.76-1.4-4.93-3.75-6.1-6.62C-1.45,15.54,6.01,5.67,15.73,5.67c2.73,0,5.41,0.8,7.69,2.3 l1.13,0.82c6.14,4.9,7.14,13.85,2.24,19.99c-0.65,0.82-1.39,1.56-2.21,2.22c-4.2-5.67-4.8-13.25-1.54-19.51 c0.4-0.76,0.18-1.71-0.52-2.22l0,0c-4.44,6.99-4.12,15.99,0.8,22.64c0,0,0.01,0,0,0.01l0.98,1.21c0.01-0.01,0,0.01,0,0 c7.14,8.28,19.64,9.2,27.93,2.06c0.66-0.57,1.28-1.18,1.85-1.82c2.46,1.53,5.3,2.34,8.19,2.34c10.75,0,19.02-10.9,14.43-22.28 C75.29,9.98,72.62,7.21,69.23,5.67z M39.3,38.44c-5.26,0-10.27-2.27-13.74-6.23c6.8-5.47,7.87-15.42,2.4-22.22 c-0.68-0.85-1.45-1.62-2.29-2.31c6.7-7.53,18.23-8.2,25.76-1.5c0.44,0.39,0.86,0.8,1.25,1.23c-6.9,5.32-8.18,15.22-2.87,22.13 c0.85,1.11,1.85,2.09,2.96,2.94C49.32,36.27,44.43,38.44,39.3,38.44L39.3,38.44z" />
              </svg>
            </Link>
          </div>
          <div className="right">
            <div className="link ml-[10px] mt-[5px]">
              <LoginAuthentication user={user} setUser={setUser} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
const LoginAuthentication = ({ user, setUser }: HeaderType) => {
  const router = useRouter();
  function loginCheckAuth() {
    if (user?.email) {
      router.push("/user");
    } else {
      router.push("/auth/login");
    }
  }

  return (
    <>
      {user ? (
        <>
          <Dropdown>
            <Dropdown.Toggle className="border-0 hover:bg-none  ">
              <LoginButton user={user} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="border-gray-200 pr-10">
              <Dropdown.Item href="/user">Profile</Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => {
                  Cookies.remove("usertoken");
                  setUser(null);
                  router.push("/");
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <div
          className="flex items-center justify-center gap-2 cursor-pointer m-2 pr-3"
          onClick={loginCheckAuth}
        >
          <span>Нэвтрэх</span>
        </div>
      )}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoginButton = ({ user }: any) => (
  <div className="mr-3">
    {user && user.image && (
      <picture>
        <img
          src={`${user.image}`}
          alt="pic"
          className=" object-cover rounded-full w-[40px] h-[40px]  bg-gray-200  text-center"
        />
      </picture>
    )}
  </div>
);
