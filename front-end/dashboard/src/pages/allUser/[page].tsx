import Pagination from "@/components/Pagination";
import User from "@/components/user/User";
import { userType } from "@/util/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

export default function AllUser(): JSX.Element {
  //const [pageNumber, setPageNumber] = useState<number | undefined>();
  const query = useRouter();
  const pageQuery = query.query.page;
  const [users, setUsers] = useState<userType[] | null>(null);

  const [pageNum, setPageNum] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [loading, setLoading] = useState(false);
  const lastPage = pageNum && Math.ceil(pageNum / 8);
  const path = "allUser";

  useEffect(() => {
    fetch("http://localhost:3009/users/pageNum")
      .then((response) => response.json())
      .then((res) => setPageNum(res));
  }, []);
  console.log("pageNum", pageNum);

  useEffect(() => {
    if (pageQuery) {
      setLoading(true);
      fetch(`http://localhost:3009/users/page/${pageQuery}`)
        .then((response) => response.json())
        .then((res) => {
          setUsers(res), setLoading(false);
        });
    }
  }, [pageQuery]);

  console.log("pageQuery", pageQuery);
  console.log("users", users);

  return (
    <div className="bg-white rounded-2xl h-full p-20">
      {loading === true ? (
        <ClimbingBoxLoader
          color="rgba(82, 179, 208, 1)"
          size={50}
          speedMultiplier={1}
        />
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
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            lastPage={lastPage}
            path={path}
          />
        </table>
      )}
    </div>
  );
}
