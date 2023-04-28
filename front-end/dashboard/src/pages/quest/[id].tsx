import { questType } from "../../util/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Suggest from "@/components/mainComponent/Suggest";

export default function QuestID(): JSX.Element {
  const { query } = useRouter();
  const [data, setData] = useState<questType | null>(null);
  const toDo = data?.toDo;

  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:3009/quests/${query.id}`)
        .then((response) => response.json())
        .then((res) => setData(res));
    }
  }, [query.id]);
  console.log("toDo", toDo);

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  function editHandler(e: any): void {
    e.preventDefault();

    axios.patch(`http://localhost:3009/quests/${query.id}`, {
      title: e.target.title.value,
      description: e.target.description.value,
      myth: e.target.myth.value,
      province: e.target.province.value,
      toDo: toDo,
    });
  }

  // function handleChangeTodo(e) {
  //   e.preventDefault();

  //   // setToDoList([...toDo, ])
  // }

  return (
    <>
      <button onClick={() => console.log(toDo)}>ghj</button>
      <form action="" onSubmit={editHandler}>
        <div className="flex justify-around">
          <div className=" flex flex-col bg-gray-300 rounded-2xl w-1/2 h-100 items-center shadow-xl shadow-cyan-700">
            <div className="w-96">
              <div className="text-3xl"> Гарчиг</div>
              <textarea
                className="text-2xl w-full text-slate-500 rounded-2xl p-2"
                name="title"
                defaultValue={data?.title}
              />
            </div>
            <div className="w-96">
              <div className="text-3xl"> province</div>
              <textarea
                className="text-2xl w-full text-slate-500 rounded-2xl p-2"
                name="province"
                defaultValue={data?.province}
              />
            </div>

            <div className="w-96">
              <div className="text-3xl">Тайлбар</div>
              <textarea
                name="description"
                className="block w-auto text-slate-500 h-64 file:rounded-full w-full rounded-2xl p-2"
                defaultValue={data?.description}
              />
            </div>
            <div className="w-96">
              <div>myth</div>
              <textarea
                name="myth"
                className="text-slate-500 h-64 w-full rounded-2xl p-2"
                defaultValue={data?.myth}
              />
            </div>
            <div className="w-96">
              <div>Хийж болох зүйлс</div>
              <Suggest toDo={toDo} />
            </div>
          </div>
          <div className="w-1/2">
            <picture>
              <img
                className="h-96 w-full rounded-2xl shadow-xl shadow-cyan-700 mx-2"
                src={data?.image}
                alt=""
              />
            </picture>
            <div className="flex justify-around p-2 ">
              <picture className="bg-gray-300 w-1/2 h-64 rounded-2xl m-2 shadow-xl shadow-cyan-700">
                <img src="" alt="" />
              </picture>
              <picture className="bg-gray-300 w-1/2 h-64 rounded-2xl m-2 shadow-xl shadow-cyan-700">
                <img src="" alt="" />
              </picture>
            </div>
            <p>зураг нэмэх</p>
            <input type="file" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 p-3 m-3 shadow-xl shadow-cyan-900 rounded-xl"
        >
          update
        </button>
      </form>
    </>
  );
}

// function Test(todos) {
//   const [currentTodos, setCurrentTodos] = useState(todos);
//   function todoChangeHandler(newVal, i) {
//     currentTodos[i] = newVal;
//     setCurrentTodos([...currentTodos]);
//   }
//   return (
//     <>
//       {currentTodos.map((todo,index) => (
//         <input
//           onChange={(e) => todoChangeHandler(e.target.value, index)}
//           className="my-2 text-slate-500  w-full rounded-2xl p-2"
//           name={`activity-${index}`}
//           defaultValue={todo}
//         />
//       ))}
//     </>
//   );
// }