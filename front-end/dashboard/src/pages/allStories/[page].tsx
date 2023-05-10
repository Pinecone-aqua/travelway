import Pagination from "@/components/Pagination";
import CreateStory from "@/components/story/CreateStory";
import Story from "@/components/story/Story";
import { StoryType } from "@/util/types";

import { useState } from "react";

export default function StoryPage(props: { data: StoryType[] }): JSX.Element {
  const { data } = props;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [create, setCreate] = useState(false);
  const path = "allStories";
  console.log("aaaaa", data);

  return (
    <>
      <div className="bg-white rounded-2xl h-full px-20 py-10 shadow-xl shadow-cyan-500">
        <div>
          {" "}
          {create == true ? (
            <div className="">
              <button
                className="bg-cyan-500 shadow-lg shadow-cyan-500/100 px-4 py-2 rounded-xl"
                onClick={() => setCreate(false)}
              >
                back
              </button>
              <CreateStory />
            </div>
          ) : (
            <div className="">
              <button
                className="bg-cyan-500 shadow-lg shadow-cyan-500/100 px-4 py-2  rounded-xl"
                onClick={() => setCreate(true)}
              >
                create
              </button>

              <table className="w-full h-[40rem] bg-slate-200 rounded-2xl mt-5 shadow-lg shadow-cyan-100">
                <thead className="h-24 text-left p-5">
                  <tr className="p-5">
                    <th scope="col" className="p-5">
                      story id
                    </th>
                    <th scope="col">Title</th>
                    <th scope="col">province</th>

                    <th>:</th>
                  </tr>
                </thead>
                <tbody className="h-32 ">
                  {data.map((unit: StoryType, index: number) => (
                    <Story key={index} unit={unit} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="absolute">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              path={path}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3009/allStories/pageNum`);
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
    `http://localhost:3009/allStories/page${params.page}`
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
