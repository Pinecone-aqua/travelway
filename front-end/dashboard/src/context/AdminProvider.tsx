import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { AdminType } from "@/util/types";

export const AdminContext = createContext({});
interface PropType {
  children: ReactNode;
}
export default function AdminProvider({ children }: PropType): JSX.Element {
  const [admin, setAdmin] = useState<AdminType | undefined>(undefined);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const obj = {
        username: e.target.adminName.value,
        password: e.target.adminPassword.value,
        role: "admin",
      };
      axios.post("http://localhost:3009/auth/loginHandler", obj).then((res) => {
        localStorage.setItem("login", res.data.token);
      });
    } catch (error) {
      console.log(" Aldaa uslee");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("login");
    if (token) {
      setAdmin(jwtDecode(token));
    }
  }, []);
  console.log(admin);
  return (
    <AdminContext.Provider value={{ handleSubmit, admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
