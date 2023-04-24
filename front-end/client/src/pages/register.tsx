import Layout from "@/components/Layout";
import { FormEvent, useState } from "react";

type formType = {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
};

export default function Register() {
  const [registerForm, setRegisterForm] = useState<formType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: 0,
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  // Async function declare here
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      firstname: registerForm.firstname,
      lastname: registerForm.lastname,
      email: registerForm.email,
      phone: registerForm.phone,
      password: registerForm.password,
    };

    try {
      // console.log("User entered data: ", data);

      const JSONdata = JSON.stringify(data);
      const endpoint = "http://localhost:9090/users/create";

      // console.log(`JSON data and Endpoint JSON:/ ${JSONdata} P:/ ${endpoint}`);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      // console.log(`OPTIONS===>`);
      // console.log(options);
      const resData = await fetch(endpoint, options);

      const dataResult = await resData.json();
      console.log(dataResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-4 md:mt-16 mx-auto max-w-screen-md">
        <form onSubmit={handleSubmit}>
          <h3 className="uppercase text-center">бүртгүүлэх</h3>
          <div className="flex justify-center md:flex-row">
            <div className="formgroup mx-auto flex flex-col my-4 w-[80%] px-2 md:w-[60%] gap-3">
              <label htmlFor="firstname">Нэр</label>
              <input
                onChange={handleChange}
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Хэрэглэгч нэр"
                className="text-md border border-slate-500 rounded p-1  placeholder-gray-300 mb-4"
              />

              <label htmlFor="lastname">Овог</label>
              <input
                onChange={handleChange}
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Овог"
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

              <label htmlFor="password">Нууц үг</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Нууц үг"
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
    </Layout>
  );
}
