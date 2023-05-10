import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import * as dotenv from "dotenv";

dotenv.config();

interface InputStateType {
  username: string;
  nickname: string;
  email: string;
  phone: number;
  password: string;
  biography: string;
  role: string;
  image: string;
}

type DataInput = { target: { name: string; value: string } };

export default function Register(): JSX.Element {
  const router = useRouter();
  const userRole = "user";
  const [registerForm, setRegisterForm] = useState<InputStateType>({
    username: "",
    nickname: "",
    email: "",
    phone: 0,
    password: "",
    biography: "",
    image: "",
    role: "",
  });
  // const [inputImageData, setInputImageData] = useState<FileList | null>(null);

  const handleChange = (e: DataInput) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  // @typescript-eslint/no-misused-promises
  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    try {
      const data: InputStateType = {
        username: registerForm.username,
        nickname: registerForm.nickname,
        email: registerForm.email,
        phone: registerForm.phone,
        password: registerForm.password,
        biography: registerForm.biography,
        image: registerForm.image,
        role: userRole,
      };

      const endpoint = `${process.env.LOCAL_SERVER}:${process.env.SERVER_PORT}/auth/signup`;

      const resData = await axios.post(endpoint, data);
      const result = resData.data;
      console.log(result);

      toast.success("Амжилттай хадгалагдлаа");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute top-0 left-0 z-100 w-full bg-white h-[100vh]">
      <Head>
        <title>Хэрэглэгч бүртгүүлэх</title>
      </Head>
      <div className="container mx-auto flex flex-col mt-4 md:flex-row items-center mb-8">
        <picture className="mx-0 md:mx-0 w-full flex-1">
          <img
            src={"/images/efil.webp"}
            width={200}
            height={400}
            className="w-auto sm:w-full"
            alt="Register image"
          />
        </picture>

        <div className="mx-auto md:mx-0 md:flex-1 flex-1 pt-5 pb-5">
          <form onSubmit={handleSubmit}>
            <h3 className="uppercase text-center">БҮРТГҮҮЛЭХ</h3>
            <div className="flex justify-center md:flex-row">
              <div className="formgroup mx-auto flex flex-col my-4 w-[80%] px-2 md:w-[60%] gap-3">
                <label htmlFor="username">Өөрийн нэр</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Хэрэглэгч нэр"
                  className="text-md border border-slate-500 rounded p-1  placeholder-gray-300 mb-4"
                />

                <label htmlFor="nickname">Nickname</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder="nickname"
                  className="text-md border border-slate-500 rounded p-1  placeholder-gray-300 mb-4"
                />

                <label htmlFor="email">И-мейл хаяг</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email хаяг"
                  className="text-md border border-slate-500 rounded p-1  placeholder-gray-300 mb-4"
                />
                <label htmlFor="phone">Утасны дугаар</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Утасны дугаар"
                  className="text-md border border-slate-500 rounded p-1  placeholder-gray-300 mb-4"
                />

                <label htmlFor="prepassword">Нууц үг</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="prepassword"
                  id="prepassword"
                  placeholder="Нууц үг"
                  className="text-md border border-slate-500 rounded p-1 placeholder-gray-300 mb-4"
                />

                <label htmlFor="password">Нууц үгээ давтан оруулна</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Нууц үг"
                  className="text-md border border-slate-500 rounded p-1 placeholder-gray-300 mb-4"
                />

                <label htmlFor="biography">Өөрийн товч мэдээлэл оруулна</label>
                <textarea
                  onChange={handleChange}
                  name="biography"
                  id="biography"
                  placeholder="Товч мэдээлэл"
                  className="text-md border border-slate-500 rounded p-1 placeholder-gray-300 mb-4"
                />

                <label htmlFor="profileimage">Профайл зураг оруулна</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="image"
                  id="profileimage"
                  placeholder="Image URL"
                  className="text-md border border-slate-500 rounded p-1 placeholder-gray-300 mb-4"
                />

                <button
                  type="submit"
                  className="inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
                >
                  БҮРТГҮҮЛЭХ
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
