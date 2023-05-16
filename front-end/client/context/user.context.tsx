import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginForm, UserContextType, UserDataContextType } from "../util/types";
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
  const [token, setToken] = useState<string | undefined>(Cookies.get("usertoken"));
  const [role, setRole] = useState<string | undefined>();

  useEffect(() => {
    if (token) {
      const tokenData: UserDataContextType = jwtDecode(token);
      setUser({ email: tokenData.email, password: "" });
      setRole(tokenData.role);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, setRole, role }}
    >
      {children}
    </UserContext.Provider>
  );
}

// const lggUserId: UserLoginType = jwtDecode(tokenStr);
// const contextUserID = lggUserId._id;
// const contextEmail = lggUserId.email;
// localStorage.setItem("userToken", tokenStr);
// localStorage.setItem("contextUserId", contextUserID);
// localStorage.setItem("contextEmail", contextEmail);
