import Link from "next/link";
import { useState } from "react";

export default function DropProfile(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>  <button
    onClick={() => setIsOpen((prev) => !prev)}
    className="w-10 h-10 rounded-full bg-green-500"
  >
  
  </button>
  {isOpen && (
   


    <div className="flex h-64 justify-center flex-col bg-green-100 w-32  absolute items-center mr-60 rounded-2xl  ">
      
      <Link href={"/profile"} className="bg-green-400 p-3 rounded-2xl w-24 my-2">profile</Link>
      <button className="bg-green-400 p-3 rounded-2xl w-24 my-2">settings</button>
      <button className="bg-green-400 p-3 rounded-2xl w-24 my-2">log out</button>
    </div>
      
   
  )}</div>
  );
}