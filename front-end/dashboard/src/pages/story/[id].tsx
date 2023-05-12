import { useRouter } from "next/router";

import axios from "axios";
import Suggest from "@/components/story/Suggest";
import { StoryType } from "@/util/types";

export default function StoryID(props: { data: StoryType }): JSX.Element {
  const { query } = useRouter();
  const { data } = props;
  const toDo = data.toDo;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  function editHandler(e: any): void {
    e.preventDefault();

    axios.patch(`http://localhost:3009/allStories/${query.id}`, {
      title: e.target.title.value,
      description: e.target.description.value,
      myth: e.target.myth.value,
      province: e.target.province.value,
      toDo: toDo,
    });
  }
  return (
    <>
      <form action="" onSubmit={editHandler}>
        <div className="flex justify-around">
          <div className=" flex flex-col bg-gray-100 rounded-2xl w-1/2 h-100 items-center shadow-lg  shadow-gray-600">
            <div className="w-[80%]">
              <div className="text-3xl"> Гарчиг</div>
              <textarea
                className="text-2xl w-full text-slate-500 rounded-2xl p-2"
                name="title"
                defaultValue={data.title}
              />
            </div>
            <div className="w-[80%]">
              <div className="text-3xl"> province</div>
              <textarea
                className="text-2xl w-full text-slate-500 rounded-2xl p-2"
                name="province"
                defaultValue={data.province}
              />
            </div>

            <div className="w-[80%]">
              <div className="text-3xl">Тайлбар</div>
              <textarea
                name="description"
                className="block w-auto text-slate-500 h-52 file:rounded-full w-full rounded-2xl p-2"
                defaultValue={data.description}
              />
            </div>

            <div className="w-[80%]">
              <div>myth</div>
              <textarea
                name="myth"
                className="text-slate-500 h-52 w-full rounded-2xl p-2"
                defaultValue={data.myth}
              />
            </div>
            <div className="w-[80%]">
              <div>Хийж болох зүйлс</div>
              <Suggest toDo={toDo} />
            </div>
          </div>
          <div className="w-1/2">
            <picture>
              <img
                className="h-96 w-full rounded-2xl shadow-xl shadow-cyan-700 mx-2"
                src={data.image}
                alt=""
              />
            </picture>
            <div className="flex justify-around p-2 ">
              <picture className="bg-gray-300 w-1/2 h-64 rounded-2xl m-2 shadow-xl shadow-cyan-700">
                <img src="" alt="" />
              </picture>
              <picture className="bg-gray-300 w-1/2 h-64 rounded-2xl m-2 shadow-xl shadow-cyan-700">
                <img src="" alt="" />
              </picture>
            </div>
            <p>зураг нэмэх</p>
            <input type="file" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-tocolor to-mycolor text-white shadow-lg  shadow-mycolor p-3 m-3 rounded-xl"
        >
          update
        </button>
      </form>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3009/allStories/allId");
  const ids = await res.json();

  const paths = await ids.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { data } = await axios.get(
    `http://localhost:3009/allStories/${params.id}`
  );
  return {
    props: {
      data: data,
    },
  };
}
