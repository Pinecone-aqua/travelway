import Pagination from "@/components/subComponent/Pagination";

import User from "@/components/user/User";
import { UserType } from "@/util/types";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function AllUser(props: { data: UserType[] }): JSX.Element {
  const [users, setUsers] = useState<UserType[]>();
  const path = "users";

  const { data } = props;
  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <div className="bg-white rounded-2xl h-full p-20">
      <Pagination path={path} />
      <ToastContainer position="top-right" />

      <table
        className="
      w-full bg-slate-100 rounded-2xl mt-5 shadow-lg shadow-gray-300"
      >
        <thead className="h-14 text-left p-5">
          <tr className="ml-5">
            <th scope="col" className="p-5">
              User ID
            </th>
            <th scope="col">Хоч</th>
            <th scope="col">Нэр</th>
            <th scope="col">И-мэйл хаяг</th>
            <th scope="col">Утас</th>
            <th scope="col">бидэнтэй нэгдсэн огноо</th>
          </tr>
        </thead>
        <tbody className="h-32">
          {users &&
            users.map((unit: UserType, index: number) => (
              <User key={index} unit={unit} users={users} setUsers={setUsers} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BACK_END_URL}/users/pageNum`
  );
  const pages = await res.json();
  const lastPage = pages && Math.ceil(pages / 8);

  const numbers = [];

  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }
  const paths = numbers.map((number) => ({
    params: { page: number.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { page: string } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BACK_END_URL}/users/page/${params.page}`
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
}
