import { questType } from "@/util/types";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Quest(props: { unit: questType }): JSX.Element {
  const data = props.unit;
  const [isOpen, setIsOpen] = useState(false);
  function deleteHandler(questId: string) {
    // fetch(`http://localhost:3009/quests/${questId}`);
    axios.delete(`http://localhost:3009/quests/${questId}`);
  }
  return (
    <tr>
      <td onClick={() => setIsOpen(false)}>{data._id.slice(0, 5)}...</td>
      <td>{data.title}</td>
      <td>
        <picture>{data.province}</picture>
      </td>

      <td>
        <BsThreeDotsVertical onClick={() => setIsOpen((prev) => !prev)} />{" "}
        {isOpen && (
          <div className="flex flex-col rounded-2xl h-36 justify-around w-32 absolute bg-red-300 items-center">
            <button className="flex h-10 bg-red-500 w-24  rounded-xl">
              <Link href={`quest/${data._id}`}>засварлах</Link>
            </button>

            <button
              onClick={() => deleteHandler(data._id)}
              className="h-10 bg-red-500 w-24 rounded-xl"
            >
              устгах
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
