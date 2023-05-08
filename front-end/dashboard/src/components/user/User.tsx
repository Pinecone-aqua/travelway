import { userType } from "@/util/types";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface PropType {
  unit: userType;
}
export default function User(props: PropType): JSX.Element {
  const data = props.unit;
  const [details, setDetails] = useState(false);
  const [allow, setAllow] = useState(false);
  function deleteHandler(userId: string) {
    axios.delete(`http://localhost:3009/allUsers/${userId}`);
  }

  return (
    <>
      {allow === true ? (
        <div className="absolute flex flex-col  justify-around items-center bg-cyan-500 rounded-2xl h-32 w-76 shadow-xl shadow-cyan-900 ms-32">
          <p className="p-2">
            ta {data.username}iig ustgahdaa itgeltei baina uu
          </p>
          <div>
            <button
              className="w-24 p-2 bg-cyan-100 rounded-lg m-4"
              onClick={() => setAllow(false)}
            >
              ugui
            </button>
            <button
              className="w-24 p-2 bg-cyan-100 rounded-lg m-4"
              onClick={() => {
                deleteHandler(data._id), setAllow(false);
              }}
            >
              tiim
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <tr className="border-t-2 border-cyan-500 ml-10">
        <td className="p-5">{data._id.slice(0, 5)}...</td>
        <td>{data.nickname}</td>
        <td>{data.username}</td>
        <td>{data.email.slice(0, 5)}...</td>
        <td>{data.phone}</td>

        <td>{data.created_date}</td>

        <td className="z-40">
          <div onClick={() => setDetails((prev) => !prev)} className="z-50">
            <BsThreeDotsVertical />
            {details && (
              <div className="flex flex-col justify-around items-center bg-cyan-500 rounded-2xl h-24 w-32 absolute">
                <button className="w-24 p-2 bg-cyan-100 rounded-lg">
                  <Link href={`/miniStory/${data._id}`}>miniStory</Link>
                </button>
                <button
                  className="w-24 p-2 bg-cyan-100 rounded-lg"
                  onClick={() => setAllow(true)}
                >
                  delete
                </button>
              </div>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}
