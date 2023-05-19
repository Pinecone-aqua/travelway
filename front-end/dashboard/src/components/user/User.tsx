import { UserType } from "@/util/types";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteModalUser from "./UserDeleteModal";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";

// import UserDeleteModal from "./UserDeleteModal";

interface PropType {
  unit: UserType;
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[] | undefined>>;
}
export default function User(props: PropType): JSX.Element {
  const { users, setUsers, unit } = props;

  return (
    <>
      <tr className="border-t-2 border-gray-300">
        <td className="p-4">{unit._id.slice(0, 5)}...</td>
        <td>{unit.nickname}</td>
        <td>{unit.username}</td>
        <td>{unit.email.slice(0, 5)}...</td>
        <td>{unit.phone}</td>
        <td>{unit.createdAt}</td>
        <td className="z-40">
          <div className="z-50">
            <Dropdown>
              <Dropdown.Toggle className="toggle">
                <BsThreeDotsVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={`/users/userprofile/${unit._id}`}>
                  <Button className="button">Profile</Button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <DeleteModalUser
                    username={unit.username}
                    id={unit._id}
                    setUsers={setUsers}
                    users={users}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    </>
  );
}
