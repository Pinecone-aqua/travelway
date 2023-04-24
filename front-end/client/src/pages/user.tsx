import Header from "@/components/Header";

export default function User() {
  return (
    <>
      <div className="w-full justify-center flex xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px]  drop-shadow-2xl relative bg-black">
        <img
          src="./images/fuji.webp"
          alt="pic"
          className="w-full object-cover h-[500px] h-full"
        />
        {/* <Header /> */}
        <div className="flex justify-center absolute bottom-0 -bottom-[80px] ">
          <img
            src=""
            alt="pic"
            className="rounded-full w-[150px] h-[150px] bg-black border border-[3px] "
          />
        </div>
      </div>
    </>
  );
}
