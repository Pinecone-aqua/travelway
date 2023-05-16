import { MiniStoryType, TravelType, UserType } from "@/util/types";
import axios from "axios";
import Link from "next/link";

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
    <div className="bg-white rounded-2xl h-full p-20 flex flex-col w-full">
      <div className="w-full h-[350px] bg-slate-100 rounded-2xl flex justify-around">
        <div className="flex items-center w-[70%]">
          <div className="w-[22%] h-32 m-3 p-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex">
            <div>
              <p className="font-bold text-xl">travels</p>
              <p className="text-[60px]">{travels.length}</p>
            </div>
          </div>
          <div className="w-[22%] h-32 m-3 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-2xl p-4 flex">
            <div>
              <p className="font-bold text-xl">story</p>
              <p className="text-[60px]">{miniStory.length}</p>
            </div>
          </div>
          <div className="w-[22%] h-32 m-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 flex">
            <div className="flex flex-col justify-between">
              <p className="font-bold text-xl">phone</p>
              <p className="text-2xl w-full">{user.phone}</p>
            </div>
          </div>
          <div className="w-[22%] h-32 m-5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 flex">
            <div className="flex flex-col justify-between">
              <p className="font-bold text-xl">role</p>
              <p className="text-[35px]">{user.role}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl w-1/4 h-100 w-[30%] m-5 p-5 flex flex-col justify-between items-center">
          <div className="rounded-full bg-mycolor w-[80px] h-[80px] flex justify-center items-center text-white  text-[30px] -mt-[60px]">
            <p>{user.username.slice(0, 1).toUpperCase()}</p>
          </div>
          <p className="text-3xl italic w-[90%] border-b-2 text-mycolor">
            {user.username}
          </p>
          <div className="border-b-2 w-[90%]">
            <p className="text-xl font-bold">TravelWay member since</p>
            <p className="text-xl italic  text-mycolor">
              {user.createdAt.slice(0, 10)}
            </p>
          </div>
          <div className="w-[90%]">
            <p className="text-2xl font-bold">e-Mail</p>
            <textarea
              name=""
              id=""
              className="text-xl w-full text-mycolor italic"
              defaultValue={user.email}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="rounded-2xl bg-slate-100 p-2 m-5 flex flex-col gap-5 h-100 w-[50%]">
          <div className="text-2xl text-mycolor m-5 bg-white rounded-xl p-3">
            travels
          </div>
          {!travels[0] ? (
            <div className="rounded-2xl bg-white p-2 m-5 flex gap-5 h-100 w-[95%] ">
              Оруулсан түүх алга
            </div>
          ) : (
            <>
              {" "}
              <UserTravels travels={travels} />
            </>
          )}
        </div>

        <div className="rounded-2xl bg-slate-100 p-2 m-5 flex flex flex-col gap-5 h-100 w-[50%]">
          <div className="text-2xl text-mycolor m-5 bg-white rounded-xl p-3">
            mini Stories
          </div>
          {!miniStory[0] ? (
            <div className="rounded-2xl bg-white p-2 m-5 flex gap-5 h-100 w-[95%]">
              Оруулсан түүх алга
            </div>
          ) : (
            <>
              {" "}
              <UserMiniStory miniStory={miniStory} />
            </>
          )}
        </div>
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
          className="rounded-2xl bg-white p-2 m-5 flex  gap-5 h-100 w-[90%]"
        >
          <picture className="">
            {" "}
            <img
              className="w-[100px] h-32 rounded-lg"
              src={story.image}
              alt=""
            />
          </picture>
          <div className="flex w-[90%] justify-between">
            <div className="flex flex-col justify-around">
              <p className="text-2xl">{story.title}</p>
              <p className="text-xl">{story.sentence}</p>
            </div>
            <button
              className="p-2 bg-mycolor text-white text-xl rounded-xl flex shadow-lg shadow-gray-500/100 rounded-xl self-end"
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
    axios.delete(`http://localhost:3009/travels/${_id}`);
  }

  return (
    <>
      {travels.map((travel: TravelType, index: number) => (
        <>
          <Link href={`/travels/travel/${travel._id}`}>
            <div
              key={index}
              className="rounded-2xl bg-white p-2 m-5 flex gap-5 h-100 w-[95%]"
            >
              <picture className="">
                {" "}
                <img
                  className="w-[100px] h-32 rounded-lg"
                  src={travel.image}
                  alt=""
                />
              </picture>
              <div className="flex w-[90%] justify-between">
                <div className="flex flex-col h-[90%] justify-between">
                  <p className="text-2xl">{travel.title}</p>
                  <p className="text-xl">{travel.createdAt}</p>
                </div>
                <div>
                  <button
                    className="p-2 bg-mycolor text-white text-xl rounded-xl flex shadow-lg shadow-gray-500/100 rounded-xl self-end"
                    onClick={() => deleteHandler(travel._id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
