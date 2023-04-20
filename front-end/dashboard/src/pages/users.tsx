import { useEffect, useState } from "react";
//import axios from "axios";
import { userType } from "@/util/types";
import User from "@/components/mainComponent/User";

export default function Users(): JSX.Element {
  const [users, setUsers] = useState<userType[] | null>(null);

  useEffect(() => {
    // axios
    //   .get("http://localhost:9090/users")
    //   .then(({ data }) => setUsers(data.users));
    fetch("http://localhost:3009/users/get")
      .then((response) => response.json())
      .then((res) => setUsers(res));
    // fetch("http://localhost:3009/users").then
  }, []);
  console.log(users);

  return (
    <>
      <table className="table-auto w-9/12">
        <thead className="h-24">
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Овог</th>
            <th scope="col">Нэр</th>
            <th scope="col">И-мэйл хаяг</th>
            <th scope="col">Утас</th>
            <th scope="col">Аялал</th>
            <th scope="col">Огноо</th>
            <th>:</th>
          </tr>
        </thead>
        <tbody className="h-32">
          {users?.map((unit: userType, index: number) => (
            <User key={index} unit={unit} />
          ))}
        </tbody>
      </table>
    </>
  );
}
