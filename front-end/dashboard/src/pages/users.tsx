import { useEffect, useState } from "react";

import { userType } from "@/util/types";
import User from "@/components/mainComponent/User";
import { ClimbingBoxLoader } from "react-spinners";

export default function Users(): JSX.Element {
  const [users, setUsers] = useState<userType[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3009/users/get")
      .then((response) => response.json())
      .then((res) => {
        setUsers(res), setLoading(false);
      })
      .catch((error) => {
        console.error(error), setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded-2xl h-full p-20">
      {loading === true ? (
        <div className="flex justify-center items-center">
          <ClimbingBoxLoader
            color="rgba(82, 179, 208, 1)"
            size={50}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <table className="table-auto bg-gray-200 w-full h-100 rounded-2xl shadow-lg shadow-cyan-100">
          <thead className="h-24 text-left p-5">
            <tr className="ml-5">
              <th scope="col" className="p-5">
                User ID
              </th>
              <th scope="col">Хоч</th>
              <th scope="col">Нэр</th>
              <th scope="col">И-мэйл хаяг</th>
              <th scope="col">Утас</th>

              <th>:</th>
            </tr>
          </thead>
          <tbody className="h-32">
            {users?.map((unit: userType, index: number) => (
              <User key={index} unit={unit} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
