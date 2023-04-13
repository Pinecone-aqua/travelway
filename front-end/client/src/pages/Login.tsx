import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type LoginForm = {
  username: string;
  password: string;
};

interface ApiResponse {
  data: string;
}

export default function Login() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const data = {
    //   username: loginForm.username,
    //   password: loginForm.password,
    // };

    const data = {
      username: (e.target as HTMLFormElement).username.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    if (loginForm.username === "admin") {
      if (loginForm.password === "pwd") {
        router.push("/");
      } else {
        setError("Админ хэрэглэгч дээр нууц үг буруу байна.");
      }
    } else {
      setError("");
    }

    const JSONdata = JSON.stringify(data);
    const endpoint = "http://localhost:9090/users/auth";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result: ApiResponse = await response.json();

    // console not print
    console.log("Your information: ", result.data);
  };

  return (
    <div className="py-24">
      <Head>
        <title>Хэрэглэгч нэвтрэх</title>
      </Head>
      <div className="flex container mx-auto shadow-md rounded p-6 justify-evenly items-center">
        <div className="w-6/12">
          <img
            src="/images/draw2.webp"
            style={{ width: 400 }}
            alt="Left side login image"
          />
        </div>

        <div className="flex flex-col w-6/12">
          <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className="block text-md">
                Хэрэглэгч нэр
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginForm.username}
                onChange={handleChange}
                placeholder="хэрэглэгч нэр"
                required
                className="border border-gray-500 px-4 py-2 text-md rounded"
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
                value={loginForm.password}
                onChange={handleChange}
                placeholder="нууц үг"
                required
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
              {" "}|{" "}<Link href="/register" className="text-sm text-slate-200">Шинээр бүртгүүлэх?</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
