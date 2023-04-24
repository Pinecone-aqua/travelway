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
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  function editHandler(e: any): void {
    e.preventDefault();

    axios.put(`http://localhost:3009/quests/${query.id}`, {
      title: e.target.title.value,
    });
  }

  return (
    <form action="" onSubmit={editHandler}>
      <div className="flex justify-around">
        <div className=" flex flex-col bg-pink-300 rounded-2xl w-1/2 h-100 items-center">
          <div>
            <div className="text-3xl"> title</div>
            <input
              className="text-2xl"
              name="title"
              defaultValue={data?.title}
            />
          </div>

          <div className="text-l">
            <div className="text-3xl">description</div>
            <input
              type="text"
              name="description"
              className="block w-auto text-slate-500 h-36 file:rounded-full"
              defaultValue={data?.description}
            />
          </div>
          <div className="text-2xl">домог хууч</div>
          <input
            type="text"
            name="legend"
            className="disabled:opacity-75"
            defaultValue={data?.legend}
          />
          <div>
            {" "}
            <div> hiij boloh zuils</div>
            {toDo?.map((unit: toDoType, index: number) => (
              <div key={index}>
                {" "}
                <input
                  type="text"
                  className="my-2"
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
          <p>зураг нэмэх</p>
          <input type="file" />
        </div>
      </div>
      <button type="submit">update</button>
    </form>
  );
}
