//import Pagination from "@/components/Pagination";
import CreateStory from "@/components/story/CreateStory";
import Story from "@/components/story/Story";

import { StoryType } from "@/util/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

export default function Orders(): JSX.Element {
  const [story, setStory] = useState<StoryType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const query = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3009/stories/get/1")
      .then((response) => response.json())
      .then((res) => {
        setStory(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const [create, setCreate] = useState(false);

  console.log(query);

  return (
    <div className="bg-white rounded-2xl h-full px-20 py-10 shadow-xl shadow-cyan-500">
      {loading === true ? (
        <div className="flex justify-center">
          <ClockLoader
            color="rgba(82, 179, 208, 1)"
            speedMultiplier={1}
            size={200}
          />
        </div>
      ) : (
        <div>
          {" "}
          {create == true ? (
            <div className="">
              <button
                className="bg-cyan-500 shadow-lg shadow-cyan-500/100 px-4 py-2 rounded-xl"
                onClick={() => setCreate(false)}
              >
                back
              </button>
              <CreateStory />
            </div>
          ) : (
            <div className="">
              <button
                className="bg-cyan-500 shadow-lg shadow-cyan-500/100 px-4 py-2  rounded-xl"
                onClick={() => setCreate(true)}
              >
                create
              </button>
              <table className="table-auto w-full h-100 bg-gray-200 rounded-2xl mt-5 shadow-lg shadow-cyan-100">
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
                <tbody className="h-32 ">
                  {story?.map((unit: StoryType, index: number) => (
                    <Story key={index} unit={unit} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
