import { AdminContext } from "@/context/AdminProvider";
import { StoryType, UserType } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Profile(): JSX.Element {
  const { admin } = useContext(AdminContext);

  const [user, setUser] = useState<UserType | null>(null);

  const [stories, setStories] = useState<StoryType[]>();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BACK_END_URL}/users/${admin?.id}`)
      .then((response) => response.json())
      .then((res) => {
        setUser(res);
      });
  }, [admin?.id]);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BACK_END_URL}/stories/user${admin?.id}`
    )
      .then((response) => response.json())
      .then((res) => setStories(res));
  }, [admin?.id]);

  return (
    <div className="bg-white rounded-2xl h-100 p-4 shadow-xl shadow-cyan-500">
      <div className="bg-white rounded-2xl h-full flex flex-col">
        <div className="w-full h-100 bg-slate-100 rounded-2xl flex justify-around">
          <div className="flex items-center w-[65%] m-3">
            <div className="w-[22%] h-32 m-3 p-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex">
              <div>
                <p className="font-bold text-xl">travels</p>
                <p className="text-[60px]">{stories?.length}</p>
              </div>
            </div>
            <div className="w-[22%] h-32 m-3 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-2xl p-4 flex">
              <div>
                <p className="font-bold text-xl">story</p>
                <p className="text-[60px]">{stories?.length}</p>
              </div>
            </div>
            <div className="w-[22%] h-32 m-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 flex">
              <div className="flex flex-col justify-between">
                <p className="font-bold text-xl">phone</p>
                <p className="text-2xl w-full">{user?.phone}</p>
              </div>
            </div>
            <div className="w-[22%] h-32 m-5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 flex">
              <div className="flex flex-col justify-between">
                <p className="font-bold text-xl">role</p>
                <p className="text-[35px]">{user?.role}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl w-1/4 h-[300px] w-[30%] p-2 flex flex-col justify-between items-center m-5">
            <div className="rounded-full bg-mycolor w-[80px] h-[80px] flex justify-center items-center text-white  text-[30px] -mt-[60px]">
              <p>{admin?.userName.slice(0, 1).toUpperCase()}</p>
            </div>
            <p className="text-3xl italic w-[90%] border-b-2 text-mycolor">
              {admin?.userName}
            </p>
            <div className="border-b-2 w-[90%]">
              <p className="text-xl font-bold">TravelWay member since</p>
              <p className="text-xl italic  text-mycolor">{user?.createdAt}</p>
            </div>
            <div className="w-[90%]">
              <p className="text-2xl font-bold">e-Mail</p>
              <textarea
                name=""
                id=""
                defaultValue={user?.email}
                className="text-xl w-full text-mycolor italic"
              />
            </div>
          </div>
        </div>
        <div>
          {stories?.map((story: StoryType, index: number) => (
            <Link
              href={`/stories/story/${story._id}`}
              key={index}
              className="flex bg-gray-200 rounded-xl h-24 m-2 p-2 justify-between"
            >
              <Image
                src={story.image[0]}
                alt=""
                width={60}
                height={80}
                className="w-24 h-full"
              />
              <div className="text-2xl">{story.title}</div>
              <div className="text-2xl">{story.province}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
