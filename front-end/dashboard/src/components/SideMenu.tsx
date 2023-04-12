import Link from "next/link";

export default function SideMenu(): JSX.Element {
  return (
    <>
      <div className="w-3/12 h-screen bg-purple-200 ">
        <ul className="flex flex-col ">
          <Link
            className="bg-purple-500 flex justify-center items-center  rounded-2xl w-64 h-16 m-7"
            href={"/orders"}
          >
            {" "}
            Orders
          </Link>
          <Link
            className="bg-purple-500 flex justify-center items-center  rounded-2xl w-64 h-16 py-1.5 m-7"
            href={"/travels"}
          >
            {" "}
            Travels
          </Link>
          <Link
            className="bg-purple-500 flex justify-center items-center  rounded-2xl w-64 h-16 m-7"
            href={"/users"}
          >
            {" "}
            Users
          </Link>
        </ul>
      </div>
    </>
  );
}
