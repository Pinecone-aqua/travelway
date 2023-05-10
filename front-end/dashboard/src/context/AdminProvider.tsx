import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { AdminType } from "@/util/types";
interface PropType {
  children: ReactNode;
}
interface ContextType {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  admin: AdminType | undefined;
  setAdmin: Dispatch<SetStateAction<AdminType | undefined>>;
}

export const AdminContext = createContext<ContextType>({} as ContextType);
export default function AdminProvider({ children }: PropType): JSX.Element {
  const [admin, setAdmin] = useState<AdminType | undefined>(undefined);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const target = e.currentTarget;
      const obj = {
        username: target.adminName.value,
        password: target.adminPassword.value,
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

  return (
    <AdminContext.Provider value={{ handleSubmit, admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
