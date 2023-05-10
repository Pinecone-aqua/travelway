import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { LoginForm } from "../../../util/types";
import { useUser } from "../../../context/user.context";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function Login(): JSX.Element {
  const [error, setError] = useState<string>("");
  const { setToken } = useUser();
  const router = useRouter();

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const onchangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    const data: LoginForm = {
      email: loginForm.email,
      password: loginForm.password,
    };

    console.log("data=====> ");
    console.log(data);

    try {
      if (!data.email || !data.password) {
        setError("Нэр болон нууц үгээ бүрэн оруулна уу");
        return;
      }

      const endpoint = `http://localhost:3009/auth/login`;
      const response = await axios.post(endpoint, data);

      console.log("RESPONSE ======> ");
      console.log(response);
      // response.data.status status
      // response.data.msg message
      // response.data.token token

      if (response.status === 201 || response.status === 200) {
        console.log("Token =======> ", response.data.token);

        localStorage.setItem("userId", response.data.token);
        Cookies.set("token", response.data.token);
        setToken(response.data.token);

        toast.success("Амжилттай нэвтэрлээ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.warning("Нэвтрэлт амжилтгүй, И-мэйл, нууц үгээ шалгана уу", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      router.push("/user");
    } catch (error) {
      console.log("Error occurred: ", error);
      setError(`Хэрэглэгчийн и-мейл, нууц үг буруу байна`);
    }
  }

  function googleLoginHandler() {
    axios.get(`http://localhost:3009/google-login`).then((response) => {
      console.log("Google");
      console.log(response.data);
      router.push(response.data);
    });
  }

  return (
    <div className="absolute top-0 z-100 bg-white w-full h-[100vh] flex flex-col items-center justify-center">
      <Head>
        <title>Хэрэглэгч нэвтрэх</title>
      </Head>
      <div className="flex flex-col md:flex-row container mx-auto rounded-md p-6 justify-normal md:justify-center items-center">
        <picture>
          <img
            src="/images/draw2.webp"
            style={{ width: 400 }}
            alt="Left side login image"
          />
        </picture>

        <div className="flex flex-col w-11/12 md:w-6/12 lg:w-4/12">
          <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
              <label htmlFor="email" className="block text-md mb-1">
                И-мейл хаяг
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={loginForm.email}
                onChange={onchangeHandle}
                placeholder="Email"
                required
                className="border border-gray-500 px-5 py-2 text-md rounded w-full"
              />
              <br />
              <br />
              <label htmlFor="password" className="block text-md mb-1">
                Нууц үг
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={loginForm.password}
                onChange={onchangeHandle}
                placeholder="нууц үг"
                required
                className="border border-gray-500 px-5 py-2 text-md rounded w-full"
              />
              <br />
              <br />
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm
                font-medium uppercase leading-normal text-white w-full"
              >
                нэвтрэх
              </button>

              <div
                onClick={googleLoginHandler}
                className="rounded-lg text-sm bg-cyan-500 px-5 py-2 mt-5 flex justify-between align-center text-white cursor-pointer"
              >
                <div className="flex items-center">
                  <FaGoogle className="my-auto text-white absolute" />
                </div>
                <span className="mx-auto text-white">Google-р НЭВТРЭХ</span>
              </div>

              <div className="text-sm font-normal text-slate-400 text-center mt-4 uppercase">
                Шинэ хэрэглэгч бүртгүүлэх бол
                <span
                  className="cursor-pointer text-blue-700"
                  onClick={() => {
                    router.push("/auth/register");
                  }}
                >
                  {" "}
                  Энд дарж{" "}
                </span>
                бүртгүүлнэ.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
