// import { StoryType } from "../../util/types";
import HeroSection from "@/components/heroSection";
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
      <HeroSection />
      <div className="h-[8rem]" />
      <div className="flex flex-col items-center justify-center gap-10 relative">
        <p className="font-bold text-2xl md:text-4xl">{"userName"}</p>
        <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2  gap-10">
          <hr className="border-black drop-shadow-xl" />
          <div className="flex flex-wrap justify-center items-start">
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
