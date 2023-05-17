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
import { toast, ToastContainer } from "react-toastify";

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
        if (res.data.token !== undefined) {
          localStorage.setItem("login", res.data.token);

          console.log("hi", res.data);
        }

        if (res.data.token !== undefined) {
          toast.success("Амжилттай нэвтэрлээ", {
            position: "top-left",
            type: "success",
            autoClose: 1000,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("И-мейл хаяг эсвэл нууц үг буруу байна!", {
            position: "top-left",
            type: "error",
            autoClose: 1000,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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
      <ToastContainer position="top-left" />

      {children}
    </AdminContext.Provider>
  );
}
