import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { TravelType } from "../../../util/types";

export default function TravelCard(props: { data: TravelType }): JSX.Element {
  const data = props.data;
  console.log(data);
  const [like, setLike] = useState(false);

  return (
    <div className="w-64 h-96 rounded-2xl border-dashed-l bg-cyan-200 m-5 relative shadow-2xl shadow-slate-500  overflow-hidden">
      <Link href={`travels/${data._id}`}>
        <picture>
          <img src={data.image} className="w-full rounded-2xl h-96" alt="" />
        </picture>
      </Link>
      <div className="flex justify-between absolute bottom-0 bg-cover bg-gray-500 h-24 w-full bg-center text-white bg-opacity-50 rounded-b-2xl">
        <div className="p-3">{data.title}</div>
        <button onClick={() => setLike((prev) => !prev)} className="p-4">
          {like === true ? (
            <BsFillArrowThroughHeartFill size={30} />
          ) : (
            <AiOutlineHeart size={30} />
          )}
        </button>
      </div>
    </div>
  );
}
