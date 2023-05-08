import { get } from "http";
import Cookies from "js-cookie";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Nav } from "react-bootstrap";

interface UserContextType {
  userId: string;
  token: string;
}
interface UserProviderType {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export function useUser() {
  return useContext(UserContext);
}

// const handleChange = (e: DataInput) => {
//   const { name, value } = e.target;
//   setLoginForm((prev) => ({ ...prev, [name]: value }));
// };

export default function UserProvider({ children }: UserProviderType) {
  navigate useNavigate()
  const [currentUser, setCurrentUser] = useState({
    userId: "",
    token: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (localStorage.getItem("userId") && token) {
      setCurrentUser((prev) => ({...prev, userId: localStorage?.getItem("userId"), token}));
    }
  }, []);

  function loginHandler(e) {
    e.
    axios get

    setCurrentUser
    Nav
    localStorage
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
