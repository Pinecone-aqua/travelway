import Pagination from "@/components/Pagination";
import Travel from "@/components/travel/Travel";
import { TravelType } from "@/util/types";

import { useState } from "react";

export default function TravelPage(props: {
  data: TravelType[] | undefined;
}): JSX.Element {
  const { data } = props;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const path = "travels";

  return (
    <>
      <div className="bg-white rounded-2xl h-full p-20">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          path={path}
        />

        <table className="w-full bg-slate-100 rounded-2xl mt-5 shadow-lg shadow-gray-300">
          <thead className="h-14 text-left p-5">
            <tr className="p-5">
              <th scope="col" className="p-5">
                travel id
              </th>
              <th scope="col">Title</th>
              <th scope="col">created date</th>
            </tr>
          </thead>
          <tbody className="h-32">
            {data?.map((unit: TravelType, index: number) => (
              <Travel key={index} unit={unit} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3009/travels/pageNumber`);
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
    `http://localhost:3009/travels/page${params.page}`
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