import { StoryType } from "@/util/types";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
interface PropsType {
  unit: StoryType;
}

export default function Story(props: PropsType): JSX.Element {
  const data = props.unit;
  const [isOpen, setIsOpen] = useState(false);
  function deleteHandler(storyId: string) {
    axios.delete(`http://localhost:3009/allStories/${storyId}`);
  }
  return (
    <tr className="border-t-2 border-white">
      <td className="p-4" onClick={() => setIsOpen(false)}>
        {data._id.slice(0, 5)}...
      </td>
      <td>{data.title}</td>
      <td>
        <picture>{data.province}</picture>
      </td>

      <td>
        <BsThreeDotsVertical onClick={() => setIsOpen((prev) => !prev)} />{" "}
        {isOpen && (
          <div className="flex flex-col rounded-2xl h-36 justify-around w-32 absolute  items-center">
            <button className="flex p-4 w-28 bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg  shadow-mycolor rounded-xl">
              <Link href={`/story/${data._id}`}>засварлах</Link>
            </button>

            <button
              onClick={() => {
                deleteHandler(data._id), setIsOpen(false);
              }}
              className="flex p-4 w-28  bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg  shadow-mycolor rounded-xl"
            >
              устгах
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
