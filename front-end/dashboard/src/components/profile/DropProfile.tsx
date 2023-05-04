import Link from "next/link";
import { useState } from "react";

export default function DropProfile(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {" "}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full shadow-lg shadow-gray-500/100 text-white bg-cyan-500"
      >
        a
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="flex h-64 text-white justify-center flex-col bg-cyan-100 w-32  absolute items-center mr-60 rounded-2xl  "
        >
          <Link
            href={"/profile"}
            className="bg-cyan-500 shadow-lg shadow-cyan-500/100  p-3 rounded-2xl w-24 my-2"
          >
            profile
          </Link>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/100  p-3 rounded-2xl w-24 my-2">
            settings
          </button>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/100  p-3 rounded-2xl w-24 my-2">
            log out
          </button>
        </div>
      )}
    </div>
  );
}
