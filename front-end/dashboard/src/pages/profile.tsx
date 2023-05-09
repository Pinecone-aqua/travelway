import Story from "@/components/story/Story";
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

  return (
    <div className="bg-white rounded-2xl h-full px-20 py-10 shadow-xl shadow-cyan-500">
      {loading === true ? (
        <Loading />
      ) : (
        <div className=" flex flex-col bg-gray-200 min-h-screen h-100 w-full p-5 rounded-xl">
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

          <table className="table-auto w-full bg-white rounded-2xl mt-5 shadow-lg shadow-cyan-100">
            <thead className="h-24 text-left p-5">
              <tr className="p-5">
                <th scope="col" className="p-5">
                  story id
                </th>
                <th scope="col">Title</th>
                <th scope="col">province</th>

                <th>:</th>
              </tr>
            </thead>
            <tbody>
              {stories &&
                stories.map((unit: StoryType, index: number) => (
                  <Story key={index} unit={unit} />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
