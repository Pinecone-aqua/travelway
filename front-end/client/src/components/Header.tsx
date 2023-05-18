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

    handleResize(); // Check on initial load
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
    <div className="sticky z-50">
      <div className="flex gap-3 justify-center content-center text-center  ">
        <div className="flex h-7 w-full scroll-m-2 ">
          {isResponsive ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxHamburgerMenu />}
              />
              <MenuList className="bg-white ">
                {MENULIST.map((menuItem, index) => (
                  // eslint-disable-next-line react/jsx-key
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
      <div className="absolute right-0 mr-[1rem] flex items-center">
        {user ? (
          <div className="flex items-center justify-center gap-2 cursor-pointer ">
            <span>Гарах</span>
            <div
              className="cursor-pointer"
              onClick={() => {
                Cookies.remove("usertoken");
                setUser(null);
              }}
            >
              <LoginButton />
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={loginCheckAuth}
          >
            <span>Нэвтрэх</span>
            <LoginButton />
          </div>
        )}
      </div>
    </>
  );
};

const LoginButton = () => (
  <button className="w-8 h-8 ">
    <picture>
      <img
        src="../../images/efil.webp"
        alt="pic"
        className="w-10 h-[33px] ease-in rounded-full border object-cover "
      />
    </picture>
  </button>
);
