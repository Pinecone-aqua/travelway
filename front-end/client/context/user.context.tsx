import Cookies from "js-cookie";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

export default function UserProvider({ children }: UserProviderType) {
  const [currentUser, setCurrentUser] = useState({
    userId: "",
    token: "",
  });

  export const getLoginCheck = () => {
    try {
      
      
    } catch (error) {
      
    }
    }
  }

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setCurrentUser((prev) => {userId: prev.userId, token});
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
