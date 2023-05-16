import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginForm, UserContextType } from "../util/types";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

interface UserProviderType {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<LoginForm | null>();
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
