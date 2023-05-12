import Link from "next/link";
import { useState } from "react";

export default function DropProfile(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full shadow-lg shadow-gray-500/100 text-white bg-gradient-to-r from-tocolor to-mycolor"
      >
        a
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="flex h-64 text-white justify-center flex-col w-32  absolute items-center mr-60 rounded-2xl bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg text-xl shadow-mycolor text-tocolor"
        >
          <Link
            href={"/profile"}
            className="bg-white  p-3 rounded-2xl w-24 my-2 "
          >
            profile
          </Link>
          <button className="bg-white p-3 rounded-2xl w-24 my-2 ">
            settings
          </button>
          <button
            className="bg-white text- p-3 rounded-2xl w-24 my-2 "
            onClick={() => localStorage.removeItem("login")}
          >
            log out
          </button>
        </div>
      )}
    </div>
  );
}
