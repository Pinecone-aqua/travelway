import { userType } from "@/util/types";
import { FcEmptyTrash } from "react-icons/fc";
import axios from "axios";

export default function User(props: { unit: userType }): JSX.Element {
  const data = props.unit;
  function deleteHandler(userId: string) {
    axios.delete(`http://localhost:3009/users/${userId}`);
  }
  return (
    <tr className="border-t-2 border-cyan-500 ml-10">
      <td className="p-5">{data._id.slice(0, 5)}...</td>
      <td>{data.nickname}</td>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>a</td>
      <td>{data.created_date}</td>
      <td>
        <button onClick={() => deleteHandler(data._id)}>
          <FcEmptyTrash />
        </button>
      </td>
    </tr>
  );
}
