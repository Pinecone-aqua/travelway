import { AdminContext } from "@/context/AdminProvider";
import Link from "next/link";
import { useContext, useState } from "react";

export default function DropProfile(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { admin } = useContext(AdminContext);
  const buttonStyle = "bg-white text-mycolor p-3 rounded-2xl w-28 my-2";
  return (
    <div>
      {" "}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full shadow-lg shadow-gray-500/100 text-white bg-gradient-to-r from-tocolor to-mycolor text-2xl"
      >
        {admin?.userName.slice(0, 1).toUpperCase()}
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="flex h-64 text-white justify-center flex-col w-40  absolute items-center -ml-10 mt-10 rounded-2xl bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg text-xl shadow-mycolor text-tocolor"
        >
          <Link href={"/profile"} className={buttonStyle}>
            профайл
          </Link>
          <button className={buttonStyle}>Тохиргоо</button>
          <button
            className={buttonStyle}
            onClick={() => localStorage.removeItem("login")}
          >
            Гарах
          </button>
        </div>
      )}
    </div>
  );
}
