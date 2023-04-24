import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

interface LoginForm {
  username: string;
  password: string;
}

type DataInput = { target: { name: string; value: string } };

export default function Login(): JSX.Element {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
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
        username: loginForm.username,
        password: loginForm.password,
      };

      // Validate username or password here
      if (!data.username || !data.password) {
        setError("Нэр болон нууц үгээ бүрэн оруулна уу");
        return;
      }

      const endpoint = "http://localhost:3009/users/auth";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(endpoint, options);

      if (response.ok) {
        // console not print
        console.log("Your information status: ", response.status);
        console.log("Your response body: ");
        console.log(JSON.stringify(response, null, 2));
        router.push("/");
        
        return;

      } else {
        setError("Your name and password is wrong, Please check in try again");
      }

    } catch (error) {
      console.log("Error occure: ", error);
      setError(`Error occurence in onSubmit fn: ${error}`);
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
