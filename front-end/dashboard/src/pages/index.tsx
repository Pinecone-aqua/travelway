import Statistic from "@/components/Statistic";
import axios from "axios";
import { AdminContext } from "@/context/AdminProvider";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { admin } = useContext(AdminContext);
  const [users, setUsers] = useState();
  const [stories, setStories] = useState();

  console.log(admin);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BACK_END_URL}/users/pageNum`)
      .then((response) => response.data)
      .then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BACK_END_URL}/stories/pageNum`)
      .then((response) => response.data)
      .then((res) => setStories(res));
  }, []);

  console.log(users);

  return (
    <div className=" ">
      <div className="bg-gray-200 h-12 w-64 flex items-center rounded-2xl justify-center text-2xl font-bold my-3">
        HELLO {admin?.userName}!
      </div>
      <div className="bg-white rounded-2xl h-screen w-full px-20 py-10 shadow-xl shadow-cyan-500 flex flex-col">
        <div className="flex ">
          <div className="">
            <p>Нийт түүх</p>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-12 w-24 rounded-2xl text-2xl text-white flex justify-center items-center">
              {stories}
            </div>
          </div>
        </div>
        <div>
          <Statistic />
        </div>
      </div>
    </div>
  );
}
