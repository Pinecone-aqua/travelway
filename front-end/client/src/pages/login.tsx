import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
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

      // Validate email or password here gehdee barag ajillahgvi
      if (!data.email || !data.password) {
        setError("Нэр болон нууц үгээ бүрэн оруулна уу");
        return;
      }

      const endpoint = "http://localhost:3009/auth/login";

      const response = await axios.post(endpoint, data);

      if (response.status === 200 || response.status === 201) {
        console.log("Response Data ============>");
        console.log(response);

        router.push("/travelJourney");

        return;
      }
    } catch (error) {
      console.log("Error occure: ", error);
      setError(`Хэрэглэгчийн и-мейл, нууц үг буруу байна`);
    }
  };

  return (
    <Layout>
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <Head>
          <title>Хэрэглэгч нэвтрэх</title>
        </Head>
        <div className="flex flex-col md:flex-row container mx-auto rounded-md p-6 justify-normal md:justify-center items-center">
          <picture className="w-11/12 md:w-6/12">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="нууц үг"
                  required
                  className="border border-gray-500 px-5 py-2 text-md rounded w-full"
                />
                <br />
                <br />
                <button
                  type="submit"
                  className="inline-block rounded bg-blue-500 px-5 py-2 text-sm
                font-medium uppercase leading-normal text-white w-full"
                >
                  нэвтрэх
                </button>
                <div className="text-sm font-normal text-slate-400 text-center mt-4 uppercase">
                  Шинэ хэрэглэгч бүртгүүлэх бол
                  <span className="cursor-pointer text-blue-700" onClick={() => {
                    router.push('/register');
                  }} >
                    Энд дарж
                  </span>
                  бүртгүүлнэ.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
