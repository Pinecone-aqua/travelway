
export default function Header(): JSX.Element {
  return (
    <div className="relative">
      <div className="flex gap-3 justify-center content-center text-center  text-white  ">
        <div className="flex w-[15rem] h-7 mt-3">
          <p className="w-[15rem] md:w-[10rem] sm:w-[5rem]">shop</p>
          <p className="w-[15rem] md:w-[10rem] sm:w-[7rem]">Article</p>
        </div>
        <p className="text-[30px] w-[15rem] md:w-[10rem] sm:w-[8rem] font-serif">
          Home
        </p>
        <div className="flex w-[15rem] h-7 mt-3">
          <p className="w-[15rem] md:w-[10rem] sm:w-[5rem]">Travel</p>
          <p className="w-[15rem] md:w-[10rem] sm:w-[5rem]">Home</p>
        </div>
      </div>
    </div>
  );
}
