import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

type LoginForm = {
  username: string;
  password: string;
};

interface ApiResponse {
    data: string;
}

const Login: React.FC = () => {
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
    }

    if(loginForm.username === "admin") {
        if (loginForm.password === "pwd") {
          router.push("/dashboard");
        } else {
            setError("Админ хэрэглэгч дээр нууц үг буруу байна.");
        }
    }

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

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
    <div className="bg-slate-100 h-85vh">
      <Head>
        <title>Хэрэглэгч нэвтрэх</title>
      </Head>
      <h1>Login page</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="block text-xl">
          User name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={loginForm.username}
          onChange={handleChange}
          placeholder="username"
          required
          className="border border-gray-500 px-4 py-2 text-xl rounded"
        />
        <br />
        <br />
        <label htmlFor="password" className="block text-xl">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
          placeholder="password"
          required
          className="border border-gray-500 px-4 py-2 text-xl rounded"
        />
        <br />
        <br />
        <button
          type="submit"
          className="border border-slate-500 rounded px-8 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
