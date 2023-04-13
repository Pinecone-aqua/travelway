import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-96 flex ">
      <div className="h-screen w-full  bg-purple-100">
        home
      
      </div>
    </div>
  );
}
