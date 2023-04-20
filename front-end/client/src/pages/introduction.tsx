/* eslint-disable react/no-unescaped-entities */

export default function Introduction(): JSX.Element {
  return (
    <>
      <div className="w-full 2xl:w-[1920px] sm:w-full ">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="absolute w-full h-full object-cover "
          />
        </picture>
        <div className="flex justify-center content-center ">
          <p className="disable-text-selection text-transparent bg-clip-text  bg-gradient-to-r from-blue-300 via-blue-500 to-pink-300  xl:text-[250px]  xmd:text-[150px] md:text-[100px] sm:text-[90px] xl:mt-[5rem]  sm:mt-[12rem] font-roboto font-extrabold drop-shadow-2xl">
            Let's Travel
          </p>
        </div>
        <form className="flex justify-center content-center">
          <input
            type="text"
            className="xl:w-[550px] xmd:w-[450px] sm:w-[270px] rounded-s-2xl h-[40px]  w-2/5 outline-0 placeholder-gray-350 pl-6 drop-shadow-2xl"
            placeholder="Where you wanna go?"
            name="search"
          />
          <button className="relative bg-white rounded-e-xl" type="submit">
            <picture>
              <img
                src="./images/search.svg"
                alt="pic"
                className="w-[20px] me-3"
              />
            </picture>
          </button>
        </form>
      </div>
    </>
  );
}
