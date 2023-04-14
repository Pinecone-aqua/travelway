import { userType } from "@/util/types";
import { FcEmptyTrash } from "react-icons/fc";
import axios from "axios";

export default function User(props: { unit: userType }): JSX.Element {
  const data = props.unit;
  function deleteHandler(userId: string) {
    axios.delete(`http://localhost:9090/users/delete/${userId}`);
  }
  return (
    <tr>
      <td>{data._id.slice(0, 5)}...</td>
      <td>{data.lastname}</td>
      <td>{data.firstname}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>a</td>
      <td>{data.updatedAt}</td>
      <td>
        <button onClick={() => deleteHandler(data._id)}>
          <FcEmptyTrash />
        </button>
      </td>
    </tr>
  );
}
