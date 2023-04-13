/* eslint-disable react/no-unescaped-entities */

export default function Introduction(): JSX.Element {
  // function search() {
  //   if()
  // }
  return (
    <div>
      <div className="w-full">
        <picture>
          <img src="./fuji.jpg" alt="pic" className="absolute w-full h-full" />
        </picture>
        <div className="flex justify-center content-center ">
          <p className="relative text-white text-[250px] mt-[200px] font-roboto font-extrabold drop-shadow-2xl transition ease-in-out  delay-300 ">
            Let's Travel
          </p>
        </div>
        <form className="flex justify-center content-center">
          <input
            type="text"
            className="rounded-s-2xl h-[40px]  w-2/5 outline-0 placeholder-gray-350 pl-6 drop-shadow-2xl"
            placeholder="Where you wanna go?"
            name="search"
          />
          <button className="relative bg-white rounded-e-xl" type="submit">
            <picture>
              <img src="./Search.svg" alt="pic" className="w-[20px] me-3" />
            </picture>
          </button>
        </form>
      </div>
    </div>
  );
}
