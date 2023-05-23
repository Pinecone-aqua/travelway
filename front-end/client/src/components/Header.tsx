import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser } from "../../context/user.context";

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

  const activatedStyle =
    "opacity-100 text-xl hover:text-black  text-black ease-out duration-300 md:w-[192px] sm:w-[142px] w-[96px] border-b-4 border-gray-400 ";
  const defaultStyle =
    "opacity-70 text-lg hover:text-black ease-out duration-300 md:w-[160px] sm:w-[128px] w-[80px]";

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
    <div className=" z-10">
      <div className="flex gap-3 justify-center content-center text-center  ">
        <div className="flex h-7 w-full scroll-m-2 ">
          {isResponsive ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxHamburgerMenu />}
                style={{ backgroundColor: "white" }}
              />
              <MenuList className="bg-white ">
                {MENULIST.map((menuItem, index) => (
                  <Link href={menuItem.uri} key={index}>
                    <MenuItem key={index} className="hover:bg-gray">
                      <button>{menuItem.name}</button>
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          ) : (
            MENULIST.map((menuItem, index) => (
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
            ))
          )}
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
    console.log("User autnentication here:-----> ", user);
    if (user?.email) {
      router.push("/user");
    } else {
      router.push("/auth/login");
    }
  }

  return (
    <>
      <div className="absolute right-0 flex items-center ">
        {user ? (
          <>
            <Menu>
              <MenuButton>
                <LoginButton user={user} />
              </MenuButton>
              <MenuList>
                <Link href="/user">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    Cookies.remove("usertoken");
                    setUser(null);
                    router.push("/");
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <div
            className="flex items-center justify-center gap-2 cursor-pointer m-2"
            onClick={loginCheckAuth}
          >
            <span>Нэвтрэх</span>
          </div>
        )}
      </div>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoginButton = ({ user }: any) => (
  <div className="w-[40px] h-[40px] mr-3">
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
