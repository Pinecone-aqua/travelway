import Story from "@/components/story/Story";
import Loading from "@/components/subComponent/Loading";
import { AdminContext } from "@/context/AdminProvider";
import { AdminType, StoryType, UserType } from "@/util/types";
import { useContext, useEffect, useState } from "react";

export default function Profile(): JSX.Element {
  const { admin }: AdminType | undefined = useContext(AdminContext);
  console.log(admin);

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState<StoryType[]>();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3009/allUsers/${admin.id}`)
      .then((response) => response.json())
      .then((res) => {
        setUser(res), setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3009/allStories/user${admin.id}`)
      .then((response) => response.json())
      .then((res) => setStories(res));
  }, []);
  console.log("?????", stories);

  return (
    <div className="bg-white rounded-2xl h-full px-20 py-10 shadow-xl shadow-cyan-500">
      {loading === true ? (
        <Loading />
      ) : (
        <div className=" flex  bg-gray-200 min-h-screen h-100 w-full p-5 rounded-xl">
          <div className="  w-3/6 flex flex-col me-0 ">
            <div className="bg-green-200 h-24 w-24 rounded-full ">a</div>
            <p>name</p>
            <input
              type="text"
              defaultValue={user?.username}
              className="w-32 h-10 rounded-xl"
            />
            <p>e Mail</p>
            <input
              type="eMail"
              className="w-32 h-10 rounded-xl"
              defaultValue={user?.email}
            />
            <p>bio</p>
            <input
              type="text"
              className="w-32 h-32 rounded-xl"
              defaultValue={user?.biography}
            />
          </div>

          <div className="w-3/6">
            {stories &&
              stories.map((unit: StoryType, index: number) => (
                <Story key={index} unit={unit} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
