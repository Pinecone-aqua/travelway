import { AdminContext } from "@/context/AdminProvider";
import Image from "next/image";
import { useContext } from "react";

export default function Login(): JSX.Element {
  const { handleSubmit } = useContext(AdminContext);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex  container  rounded-md p-6 justify-center items-center">
        <Image
          src="/images/draw2.webp"
          style={{ width: 600 }}
          alt="Left side login image"
          width={500}
          height={300}
        />

        <form
          onSubmit={handleSubmit}
          className="w-[300px] h-12 bg-gray-30 flex flex-col justify-center"
        >
          <label htmlFor="username" className="block text-xl my-3">
            Е-мэйл хаяг
          </label>
          <input
            type="text"
            name="adminName"
            placeholder="е-мэйл хаягаа оруулна уу!"
            className="border border-gray-500 px-4 py-2 text-md rounded"
          />
          <br />
          <br />
          <label htmlFor="password" className="block text-xl my-3">
            Нууц үг
          </label>
          <input
            type="password"
            name="adminPassword"
            placeholder="нууц үгээ оруулна уу!"
            className="border border-gray-500 px-4 py-2 text-md rounded"
          />
          <br />
          <br />
          <button
            type="submit"
            className="inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm
              font-medium uppercase leading-normal text-white"
          >
            нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
}
