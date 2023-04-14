import Header from "@/components/Header";

export default function TravelJourney(): JSX.Element {
  return (
    <>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px] drop-shadow-2xl">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] max-h-full "
          />
        </picture>
        <Header />
        <div className="relative ms-5 h-[300px] max-h-full  ">
          <h2 className="text-white  xxl:text-[10rem] xl:text-[8rem] md:text-[5rem] sm:text-[3rem] ">
            Japan
          </h2>
          <p className="text-white text-[20px]">visited 20 Septenber 2020</p>
        </div>
      </div>
      <div>
        <div className="flex justify-center  h-[84px] max-h-[125px] mt-5">
          <div className="flex w-[800px] gap-10 bg-gray-800 h-[84px] items-center rounded-[30px] ">
            <button className="text-white w-[250px] h-[54px]">
              Travel plan
            </button>
            <button className="text-black w-[250px] h-[54px] bg-orange-500 rounded-2xl">
              Description
            </button>
            <button className="text-white w-[250px] h-[54px]">Budget</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center bg-gray-500 xxl:w-[1280px] xl:w-[896px] lg:w-[640px] xmd:w-[360px] sm: h-[800px] mt-5 rounded-[20px]">
          input
        </div>
      </div>
    </>
  );
}
