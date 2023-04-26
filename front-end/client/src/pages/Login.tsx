import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

type DataInput = { target: { name: string; value: string } };

export default function Login(): JSX.Element {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: DataInput) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const data: LoginForm = {
        email: loginForm.email,
        password: loginForm.password,
      };

      console.log("Data Object");
      console.log(data);

      // Validate email or password here
      if (!data.email || !data.password) {
        setError("Нэр болон нууц үгээ бүрэн оруулна уу");
        return;
      }

      const endpoint = "http://localhost:3009/auth/login";

      // const options = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // };

      const response = await axios.post(endpoint, data);

      if (response.status === 200 || response.status === 201) {
        // console not print
        console.log("Your information status: ", response.status);
        console.log("Your response body: ");
        console.log(JSON.stringify(response, null, 2));
        router.push("/");

        return;
      }
    } catch (error) {
      setError(`OnSubmit deer aldaa garsan fn: ${error}`);
    }
  };

  return (
    <Layout>
      <div className="py-24">
        <Head>
          <title>Хэрэглэгч нэвтрэх</title>
        </Head>
        <div className="flex flex-col md:flex-row container mx-auto rounded-md p-6 md:2 justify-normal md:justify-around items-center">
          <picture className="w-11/12 md:w-6/12">
            <img
              src="/images/draw2.webp"
              style={{ width: 400 }}
              alt="Left side login image"
            />
          </picture>

          <div className="flex flex-col w-11/12 md:w-6/12">
            <div>
              {error && <p>{error}</p>}
              <form onSubmit={onSubmit}>
                <label htmlFor="email" className="block text-md">
                  Хэрэглэгч нэр
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleChange}
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
                  value={loginForm.password}
                  onChange={handleChange}
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
                  | <Link href="/register">Шинээр бүртгүүлэх?</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
