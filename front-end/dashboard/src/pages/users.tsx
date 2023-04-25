import { useEffect, useState } from "react";

import { userType } from "@/util/types";
import User from "@/components/mainComponent/User";

export default function Users(): JSX.Element {
  const [users, setUsers] = useState<userType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3009/users/get")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);
  console.log(users);

  return (
    <div className="bg-white rounded-2xl h-full p-20">
      <table className="table-auto bg-gray-200 w-full h-100 rounded-2xl ">
        <thead className="h-24 text-left p-5">
          <tr className="ml-5">
            <th scope="col" className="p-5">
              User ID
            </th>
            <th scope="col">Хоч</th>
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
    </div>
  );
}
