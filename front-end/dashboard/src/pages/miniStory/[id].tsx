import { MiniStoryType, TravelType, UserType } from "@/util/types";
import axios from "axios";

interface PropType {
  travels: TravelType[];
  user: UserType;
  miniStory: MiniStoryType[];
}

export default function UserId(props: PropType): JSX.Element {
  const { travels, user, miniStory } = props;

  console.log("users", user);
  console.log("travels", travels);

  return (
    <div className="bg-white rounded-2xl h-full p-20 flex w-full">
      <div>
        <p>{user.username}</p>
      </div>
      <div>
        travels
        {!travels[0] ? (
          <>oruulagui bainoo</>
        ) : (
          <>
            {" "}
            <UserTravels travels={travels} />
          </>
        )}
      </div>

      <div>
        miniStorys
        {!miniStory[0] ? (
          <>oruulagui bainoo</>
        ) : (
          <>
            {" "}
            <UserMiniStory miniStory={miniStory} />
          </>
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3009/allUsers/allId");
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
  try {
    const res = await fetch(
      `http://localhost:3009/ministory/user/${params.id}`
    );
    const miniStory = await res.json();
    const response = await fetch(
      `http://localhost:3009/travels/user/${params.id}`
    );
    const travels = await response.json();
    const resUser = await fetch(`http://localhost:3009/allUsers/${params.id}`);
    const user = await resUser.json();

    if (!user) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        miniStory: miniStory,
        travels: travels,
        user: user,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        miniStory: [],
        travels: [],
        user: {},
      },
    };
  }
}

function UserMiniStory(props: { miniStory: MiniStoryType[] }): JSX.Element {
  const { miniStory } = props;

  function deleteHandler(_id: string) {
    axios.delete(`http://localhost:3009/miniStory/${_id}`);
  }
  return (
    <>
      {miniStory.map((story: MiniStoryType, index: number) => (
        <div
          key={index}
          className="rounded-2xl bg-cyan-500 p-2 m-5 flex gap-5 h-100 w-[50%]"
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
    </>
  );
}

function UserTravels(props: { travels: TravelType[] }) {
  const { travels } = props;

  function deleteHandler(_id: string) {
    axios.delete(`http://localhost:3009/miniStory/${_id}`);
  }

  return (
    <>
      {travels.map((travel: TravelType, index: number) => (
        <div
          key={index}
          className="rounded-2xl bg-cyan-500 p-2 m-5 flex gap-5 h-100 w-[50%]"
        >
          <picture className="">
            {" "}
            <img
              className="w-[100px] h-32 rounded-lg"
              src={travel.image}
              alt=""
            />
          </picture>
          <div className="">
            <div>{travel.title}</div>

            <button
              className="p-2 bg-white rounded-xl flex shadow-lg shadow-gray-500/100 rounded-xl self-end"
              onClick={() => deleteHandler(travel._id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
