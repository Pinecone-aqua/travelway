import { miniStoryType } from "@/util/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserId(): JSX.Element {
  const { query } = useRouter();
  const [miniStory, setMiniStory] = useState<miniStoryType[] | null>(null);
  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:3009/miniStory/user/${query.id}`)
        .then((response) => response.json())
        .then((res) => setMiniStory(res));
    }
  }, [query.id]);
  function deleteHandler(_id: string) {
    axios.delete(`http://localhost:3009/miniStory/${_id}`);
  }

  console.log("mini story", miniStory);

  return (
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
              className="p-2 bg-white rounded-xl"
              onClick={() => deleteHandler(story._id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
