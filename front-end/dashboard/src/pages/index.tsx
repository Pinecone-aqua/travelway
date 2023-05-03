import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-96 flex ">
      <div className="bg-white rounded-2xl h-screen w-full px-20 py-10 shadow-xl shadow-cyan-500">
        Тавтай морилно уу
      </div>
    </div>
  );
}
