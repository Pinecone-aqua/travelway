// import { StoryType } from "../../util/types";
import AddTour from "@/components/tour/AddTour";

export default function User(): JSX.Element {
  // const [stories, setStories] = useState<StoryType[]>([]);
  // const [userData, setUserData] = useState([]);
  // let userName = "";
  // let userImage = "";

  // try {
    // useEffect(() => {
    //   if (!localStorage.getItem("userId")) return;

    //   getFetchdata();
    //   getUserFetch();
    // }, []);

  //   const logUser = localStorage.getItem("userId");

  //   const getFetchdata = async (): Promise<void> => {
  //     const travels = await axios.get("http://localhost:3009/miniStory/get");
  //     const disp = travels.data;
  //     setStories(disp);
  //   };

  //   const getUserFetch = async (): Promise<void> => {
  //     const user = await axios.get(`http://localhost:3009/allUsers/profile`);
  //     const currentUser = user.data;
  //     setUserData(currentUser);
  //   };

  //   if (logUser) {
  //     userData
  //       .filter(
  //         (user: { _id: string; username: string; image: string }) =>
  //           user._id === logUser
  //       )
  //       .map((user: { username: string; image: string }) => {
  //         userName = user.username;
  //         userImage = user.image;
  //       });
  //   } else {
  //     console.log("Error user not found");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <>
      <div className="h-[8rem]" />
      <div className="items-center justify-center flex flex-col gap-10 relative ">
        <p className="font-bold text-[26px]">{"userName"}</p>
        <div className="w-[80%] grid gap-10">
          <hr className=" border-black  drop-shadow-xl" />
          <div className="flex flex-wrap justify-center items-start">
            Stories HERE
            <AddTour />
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Stories to link profile component
 */
