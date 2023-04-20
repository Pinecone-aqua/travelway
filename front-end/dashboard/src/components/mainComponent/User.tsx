import { userType } from "@/util/types";
import { FcEmptyTrash } from "react-icons/fc";
import axios from "axios";

export default function User(props: { unit: userType }): JSX.Element {
  const data = props.unit;
  function deleteHandler(userId: string) {
    axios.delete(`http://localhost:3009/users/${userId}`);
  }
  return (
    <tr>
      <td>{data._id.slice(0, 5)}...</td>
      <td>{data.lastName}</td>
      <td>{data.firstName}</td>
      <td>{data.eMail}</td>
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
