import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { LoginForm } from "../../../util/types";
import { useUser } from "../../../context/user.context";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

type UserLoginType = {
  _id: string;
  email: string;
};

export default function Login(): JSX.Element {
  const [error, setError] = useState<string>("");
  const { setToken, setUser } = useUser();
  const router = useRouter();

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
    userId: "",
  });

  const onchangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(e: any): void {
    e.preventDefault();
    const data: LoginForm = {
      email: loginForm.email,
      password: loginForm.password,
      userId: "",
    };

    try {
      if (!data.email || !data.password) {
        setError("Нэр болон нууц үгээ бүрэн оруулна уу");
        return;
      }

      const endpoint = `http://localhost:3009/auth/login`;
      const response = await axios.post(endpoint, data);
      // response.data.status status
      // response.data.msg message
      // response.data.token token

      if (response.status === 201 || response.status === 200) {
        if (response.data.token) {
          const tokenStr = response.data.token;

          const lggUserId: UserLoginType = jwtDecode(tokenStr);
          const contextUserID = lggUserId._id;
          const contextEmail = lggUserId.email;
          localStorage.setItem("userToken", tokenStr);
          localStorage.setItem("contextUserId", contextUserID);
          localStorage.setItem("contextEmail", contextEmail);
          Cookies.set("token", tokenStr);

          // User Context settlement
          setToken(tokenStr);
          setUser({
            email: contextEmail,
            password: "",
            userId: contextUserID,
          });

          toast.success("Амжилттай нэвтэрлээ");

          router.push("/user");
        }
      } else {
        toast.warning("Нэвтрэлт амжилтгүй, И-мэйл, нууц үгээ шалгана уу");
      }
    } catch (error) {
      console.log("Error occurred: ", error);
      setError(`Хэрэглэгчийн и-мейл, нууц үг буруу байна`);
    }
  }

  function googleLoginHandler() {
    axios.get(`http://localhost:3009/google-login`).then((res) => {
      console.log("Google", res.data);
      router.push(res.data);
    });
  }

  return (
    <div className="absolute top-0 z-100 bg-white w-full h-[100vh] flex flex-col items-center justify-center">
      <Head>
        <title>Хэрэглэгч нэвтрэх</title>
      </Head>

      <div className="flex flex-col w-11/12 md:w-6/12 lg:w-4/12 border p-16 rounded">
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
  );
}
