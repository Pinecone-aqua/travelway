import { MiniStoryType } from "@/util/types";
import axios from "axios";

export default function UserId(props: {
  miniStory: MiniStoryType[];
}): JSX.Element {
  const { miniStory } = props;

  function deleteHandler(_id: string) {
    axios.delete(`http://localhost:3009/miniStory/${_id}`);
  }
  console.log(miniStory);

  return (
    <>
      {miniStory.length === 0 ? (
        <div className="bg-white rounded-2xl h-full p-20 ">
          ene hereglegch mini story oruulaagui baina{" "}
        </div>
      ) : (
        <div className="bg-white rounded-2xl h-full p-20 ">
          {miniStory.map((story: MiniStoryType, index: number) => (
            <div
              key={index}
              className="rounded-2xl bg-cyan-500 p-2 m-5 flex gap-5 h-100"
            >
              <picture className="">
                {" "}
                <img
                  className="w-[100px] h-32 rounded-lg"
                  src={story.image}
                  alt=""
                />
              </picture>
              <div className="">
                <div>{story.title}</div>
                <div>{story.sentence}</div>
                <button
                  className="p-2 bg-white rounded-xl flex shadow-lg shadow-gray-500/100 rounded-xl self-end"
                  onClick={() => deleteHandler(story._id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3009/allUsers/allId");
  const ids = await res.json();

  const paths = await ids.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  console.log("paths shu", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(`http://localhost:3009/ministory/user${params.id}`);
    const data = await res.json();
    console.log("====>>>>>", data);
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        miniStory: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        miniStory: [],
      },
    };
  }
}
