import { miniStoryType } from "@/util/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

export default function UserId(): JSX.Element {
  const { query } = useRouter();
  const [load, setLoad] = useState(false);
  const [miniStory, setMiniStory] = useState<miniStoryType[] | null>(null);
  useEffect(() => {
    if (query.id) {
      setLoad(true);
      fetch(`http://localhost:3009/miniStory/user/${query.id}`)
        .then((response) => response.json())
        .then((res) => {
          setMiniStory(res), setLoad(false);
        });
    }
  }, [query.id]);
  function deleteHandler(_id: string) {
    axios.delete(`http://localhost:3009/miniStory/${_id}`);
  }

  return (
    <>
      {load === true ? (
        <div className="flex justify-center">
          <ClockLoader
            color="rgba(82, 179, 208, 1)"
            speedMultiplier={1}
            size={200}
          />
        </div>
      ) : (
        <>
          {miniStory?.length === 0 ? (
            <div className="bg-white rounded-2xl h-full p-20 ">
              ene hereglegch mini story oruulaagui baina{" "}
            </div>
          ) : (
            <div className="bg-white rounded-2xl h-full p-20 ">
              {miniStory?.map((story: miniStoryType, index: number) => (
                <div
                  key={index}
                  className="rounded-2xl bg-cyan-500 p-2 m-5 flex gap-5 h-100"
                >
                  <picture className="">
                    {" "}
                    <img
                      className="w-[100px] h-32 rounded-lg"
                      src={story.image}
                      alt=""
                    />
                  </picture>
                  <div className="">
                    <div>{story.title}</div>
                    <div>{story.sentence}</div>
                    <button
                      className="p-2 bg-white rounded-xl flex shadow-lg shadow-gray-500/100 rounded-xl self-end"
                      onClick={() => deleteHandler(story._id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
