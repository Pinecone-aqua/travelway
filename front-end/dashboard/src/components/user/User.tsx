import { UserType } from "@/util/types";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteModalUser from "./UserDeleteModal";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";

// import UserDeleteModal from "./UserDeleteModal";

interface PropType {
  unit: UserType;
}
export default function User(props: PropType): JSX.Element {
  const data = props.unit;

  return (
    <>
      <tr className="border-t-2 border-white">
        <td className="p-4">{data._id.slice(0, 5)}...</td>
        <td>{data.nickname}</td>
        <td>{data.username}</td>
        <td>{data.email.slice(0, 5)}...</td>
        <td>{data.phone}</td>
        <td>{data.createdAt}</td>
        <td className="z-40">
          <div className="z-50">
            <Dropdown>
              <Dropdown.Toggle className="toggle">
                <BsThreeDotsVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={`/users/userprofile/${data._id}`}>
                  <Button className="button">Profile</Button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <DeleteModalUser username={data.username} id={data._id} />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    </>
  );
}

// {details && (
//   <div className="flex flex-col justify-around items-center rounded-2xl h-32 w-32 absolute bg-gradient-to-r from-tocolor to-mycolor">
//     <button className="w-24 p-2 bg-white text-mycolor text-xl rounded-lg">
//       <Link href={`/miniStory/${data._id}`}>profile</Link>
//     </button>
//     {/* <UserDeleteModal username={data.username} id={data._id} /> */}
//   </div>
// )}
