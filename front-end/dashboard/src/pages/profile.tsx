import Loading from "@/components/subComponent/Loading";
import { AdminContext } from "@/context/AdminProvider";
import { StoryType, UserType } from "@/util/types";
import { useContext, useEffect, useState } from "react";

export default function Profile(): JSX.Element {
  const { admin } = useContext(AdminContext);

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState<StoryType[]>();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3009/allUsers/${admin?.id}`)
      .then((response) => response.json())
      .then((res) => {
        setUser(res), setLoading(false);
      });
  }, [admin?.id]);
  useEffect(() => {
    fetch(`http://localhost:3009/allStories/user${admin?.id}`)
      .then((response) => response.json())
      .then((res) => setStories(res));
  }, [admin?.id]);

  console.log("admins", user);

  return (
    <div className="bg-white rounded-2xl h-full px-20 py-10 shadow-xl shadow-cyan-500">
      {loading === true ? (
        <Loading />
      ) : (
        // <div className=" flex flex-col bg-gray-200 min-h-screen h-100 w-full p-5 rounded-xl">
        //   <div className="  w-3/6 flex flex-col me-0 ">
        //     <div className="bg-green-200 h-24 w-24 rounded-full ">a</div>
        //     <p>name</p>
        //     <input
        //       type="text"
        //       defaultValue={user?.username}
        //       className="w-32 h-10 rounded-xl"
        //     />
        //     <p>e Mail</p>
        //     <input
        //       type="eMail"
        //       className="w-32 h-10 rounded-xl"
        //       defaultValue={user?.email}
        //     />
        //     <p>bio</p>
        //     <input
        //       type="text"
        //       className="w-32 h-32 rounded-xl"
        //       defaultValue={user?.biography}
        //     />
        //   </div>

        //   <table className="table-auto w-full bg-white rounded-2xl mt-5 shadow-lg shadow-cyan-100">
        //     <thead className="h-24 text-left p-5">
        //       <tr className="p-5">
        //         <th scope="col" className="p-5">
        //           story id
        //         </th>
        //         <th scope="col">Title</th>
        //         <th scope="col">province</th>

        //         <th>:</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {stories &&
        //         stories.map((unit: StoryType, index: number) => (
        //           <Story key={index} unit={unit} />
        //         ))}
        //     </tbody>
        //   </table>
        // </div>
        <div className="bg-white rounded-2xl h-full p-20 flex flex-col w-full">
          <div className="w-full h-[350px] bg-slate-100 rounded-2xl flex justify-around">
            <div className="flex items-center w-[70%]">
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

            <div className="bg-white rounded-2xl w-1/4 h-100 w-[30%] m-5 p-5 flex flex-col justify-between items-center">
              <div className="rounded-full bg-mycolor w-[80px] h-[80px] flex justify-center items-center text-white  text-[30px] -mt-[60px]">
                <p>{admin?.userName.slice(0, 1).toUpperCase()}</p>
              </div>
              <p className="text-3xl italic w-[90%] border-b-2 text-mycolor">
                {admin?.userName}
              </p>
              <div className="border-b-2 w-[90%]">
                <p className="text-xl font-bold">TravelWay member since</p>
                <p className="text-xl italic  text-mycolor">
                  {user?.createdAt}
                </p>
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

          {/* <div className="flex justify-between">
          <div className="rounded-2xl bg-slate-100 p-2 m-5 flex flex-col gap-5 h-100 w-[50%]">
            <div className="text-2xl text-mycolor m-5 bg-white rounded-xl p-3">
              travels
            </div>
            {!travels[0] ? (
              <div className="rounded-2xl bg-white p-2 m-5 flex gap-5 h-100 w-[95%] ">
                Оруулсан түүх алга
              </div>
            ) : (
              <>
                {" "}

              </>
            )}
          </div>
  
          <div className="rounded-2xl bg-slate-100 p-2 m-5 flex flex flex-col gap-5 h-100 w-[50%]">
            <div className="text-2xl text-mycolor m-5 bg-white rounded-xl p-3">
              mini Stories
            </div>
            {!miniStory[0] ? (
              <div className="rounded-2xl bg-white p-2 m-5 flex gap-5 h-100 w-[95%]">
                Оруулсан түүх алга
              </div>
            ) : (
              <>
                {" "}
                <UserMiniStory miniStory={miniStory} />
              </>
            )}
          </div>
        </div> */}
        </div>
      )}
    </div>
  );
}
