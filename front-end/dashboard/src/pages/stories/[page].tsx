import Pagination from "@/components/subComponent/Pagination";
import CreateStory from "@/components/story/CreateStory";
import Story from "@/components/story/Story";
import { StoryType } from "@/util/types";
import { ToastContainer } from "react-toastify";

export default function StoryPage(props: { data: StoryType[] }): JSX.Element {
  const { data } = props;

  const path = "stories";

  return (
    <>
      <div className="bg-white rounded-2xl h-full px-20 py-10">
        <div>
          <div className="">
            <div className="flex justify-between h-12">
              <div className="h-12">
                <Pagination path={path} />
                <ToastContainer position="top-right" />
              </div>

              <CreateStory />
            </div>

            <table className=" w-full bg-slate-100 rounded-2xl mt-5 shadow-lg shadow-gray-300">
              <thead className="h-14 text-left p-5">
                <tr className="p-5">
                  <th scope="col" className="p-5">
                    story id
                  </th>
                  <th scope="col">Title</th>
                  <th scope="col">province</th>
                </tr>
              </thead>
              <tbody className="h-32">
                {data.map((unit: StoryType, index: number) => (
                  <Story key={index} unit={unit} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3009/stories/pageNum`);
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
    `http://localhost:3009/stories/page${params.page}`
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
