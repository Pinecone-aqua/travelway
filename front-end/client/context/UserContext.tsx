import Cookies from "js-cookie";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  currentUser: string;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function useUser() {
  return useContext(UserContext);
}

interface UserProviderType {
  children: ReactNode;
}

export default function UserProvider({ children }: UserProviderType) {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setCurrentUser(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
