import { AdminContext } from "@/components/context/AdminProvider";
import { useContext } from "react";

export default function Login(): JSX.Element {
  const { handleSubmit, admin } = useContext(AdminContext);
  return (
    <div className="flex flex-col md:flex-row container mx-auto rounded-md p-6 md:2 justify-normal md:justify-around items-center">
      <div className="w-11/12 md:w-6/12">
        <img
          src="/images/draw2.webp"
          style={{ width: 400 }}
          alt="Left side login image"
        />
      </div>

      <div className="flex flex-col w-11/12 md:w-6/12">
        <div>
          {/* {error && <p>{error}</p>} */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-md">
              Хэрэглэгч нэр
            </label>
            <input
              type="text"
              id="username"
              name="username"
              // value={loginForm.username}
              // onChange={handleChange}
              placeholder="хэрэглэгч нэр"
              required
              className="border border-gray-500 px-4 py-1 text-md rounded"
            />
            <br />
            <br />
            <label htmlFor="password" className="block text-md">
              Нууц үг
            </label>
            <input
              type="text"
              id="password"
              name="password"
              // value={loginForm.password}
              // onChange={handleChange}
              placeholder="нууц үг"
              required
              className="border border-gray-500 px-4 py-1 text-md rounded"
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
            <span className="ms-4 text-sm text-slate-400">
              {" "}
              {/* | <Link href="/register">Шинээр бүртгүүлэх?</Link> */}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
