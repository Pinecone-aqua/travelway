import Image from "next/image";
import { Inter } from "next/font/google";
import DropDown from "@/components/DropDown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-96 flex ">
      <div className="h-screen w-full  bg-purple-100">
        home
        <DropDown />
      </div>
    </div>
  );
}
