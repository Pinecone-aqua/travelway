import Pagination from "@/components/Pagination";
import User from "@/components/user/User";
import { UserType } from "@/util/types";
import { useState } from "react";

export default function AllUser(props: { users: UserType[] }): JSX.Element {
  const { users } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const path = "allUsers";

  return (
    <div className="bg-white rounded-2xl h-full p-20">
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
          {users.map((unit: UserType, index: number) => (
            <User key={index} unit={unit} />
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        path={path}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3009/allUsers/pageNum`);
  const pages = await res.json();
  const lastPage = pages && Math.ceil(pages / 8);

  const numbers = [];

  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }
  const paths = numbers.map((number) => ({
    params: { page: number.toString() },
  }));

  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { page: string } }) {
  const response = await fetch(
    `http://localhost:3009/allUsers/page/${params.page}`
  );
  const data = await response.json();
  console.log("data", data);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users: data,
    },
  };
}
