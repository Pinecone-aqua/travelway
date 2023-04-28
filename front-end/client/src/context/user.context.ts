import { createContext, ReactNode, useContext, useEffect } from "react";

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
  });
}

export default UserContext;
