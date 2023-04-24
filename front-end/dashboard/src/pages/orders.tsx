/* eslint-disable unicorn/filename-case */
import CreateQuest from "@/components/mainComponent/createQuest";
import Quest from "@/components/mainComponent/Quest";
import { questType } from "@/util/types";
import { useEffect, useState } from "react";

export default function Orders(): JSX.Element {
  const [quest, setQuest] = useState<questType[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:3009/quests/get")
      .then((response) => response.json())
      .then((res) => setQuest(res));
  }, []);
  const [create, setCreate] = useState(false);

  return (
    <>
      {create == true ? (
        <div>
          <button className="bg-green-500" onClick={() => setCreate(false)}>
            bask
          </button>
          <CreateQuest />
        </div>
      ) : (
        <div>
          <button className="bg-green-500" onClick={() => setCreate(true)}>
            create
          </button>
          <table className="table-auto w-9/12">
            <thead className="h-24">
              <tr>
                <th scope="col">quest id</th>
                <th scope="col">Title</th>
                <th scope="col">province</th>

                <th>:</th>
              </tr>
            </thead>
            <tbody className="h-32">
              {quest?.map((unit: questType, index: number) => (
                <Quest key={index} unit={unit} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
