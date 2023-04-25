/* eslint-disable unicorn/filename-case */
import { questType, toDoType } from "../../util/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function QuestID(): JSX.Element {
  const { query } = useRouter();
  const [data, setData] = useState<questType | null>(null);
  const toDo = data?.toDoList;
  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:3009/quests/${query.id}`)
        .then((response) => response.json())
        .then((res) => setData(res));
    }
  }, [query.id]);
  console.log(query);

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  function editHandler(e: any): void {
    e.preventDefault();

    axios.patch(`http://localhost:3009/quests/${query.id}`, {
      title: e.target.title.value,
      description: e.target.description.value,
      myth: e.target.myth.value,
    });
  }

  return (
    <form action="" onSubmit={editHandler}>
      <div className="flex justify-around">
        <div className=" flex flex-col bg-gray-300 rounded-2xl w-1/2 h-100 items-center">
          <div className="w-96">
            <div className="text-3xl"> Гарчиг</div>
            <textarea
              className="text-2xl w-full rounded-2xl"
              name="title"
              defaultValue={data?.title}
            />
          </div>

          <div className="w-96">
            <div className="text-3xl">Тайлбар</div>
            <textarea
              name="description"
              className="block w-auto text-slate-500 h-64 file:rounded-full w-full rounded-2xl"
              defaultValue={data?.description}
            />
          </div>
          <div className="w-96">
            <div>myth</div>
            <textarea
              name="myth"
              className="disabled:opacity-75 h-64 w-full rounded-2xl"
              defaultValue={data?.myth}
            />
          </div>
          <div className="w-96">
            <div>Хийж болох зүйлс</div>
            {toDo?.map((unit: toDoType, index: number) => (
              <div key={index}>
                <textarea
                  className="my-2 w-full rounded-2xl"
                  defaultValue={unit.activity}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <picture>
            <img className="h-96 w-full rounded-2xl" src={data?.image} alt="" />
          </picture>
          <div className="flex justify-around p-2">
            <picture className="bg-gray-300 w-1/2 h-64 rounded-2xl m-2">
              <img src="" alt="" />
            </picture>
            <picture className="bg-gray-300 w-1/2 h-64 rounded-2xl m-2">
              <img src="" alt="" />
            </picture>
          </div>
          <p>зураг нэмэх</p>
          <input type="file" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-cyan-500 p-3 m-3 shadow-lg shadow-gray-500/100 rounded-xl"
      >
        update
      </button>
    </form>
  );
}
