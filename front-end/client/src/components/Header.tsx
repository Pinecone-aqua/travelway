export default function Header(): JSX.Element {
  return (
    <div className="relative">
      <div className="flex gap-3 justify-center content-center text-center  text-white  ">
        <div className="flex w-[15rem] h-7 mt-3">
          <button className="w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50">
            Tool
          </button>
          <button className="w-[15rem] md:w-[10rem] sm:w-[7rem] opacity-70">
            Article
          </button>
        </div>
        <button className="text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] mt-1 font-serif">
          Home
        </button>
        <div className="flex w-[15rem] h-7 mt-3">
          <button className="w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-70">
            Travel
          </button>
          <button className="w-[15rem] md:w-[10rem] sm:w-[5rem] opacity-50">
            Random
          </button>
        </div>
      </div>
    </div>
  );
}
