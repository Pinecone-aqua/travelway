import Head from "next/head";
import React from "react";
import {data} from "../../util/user";

interface UserType  {
        firstname: string;
        password: string;
}

export default function Login(allDataUser: UserType) {
    

  return <div className="bg-slate-100 flex items-center justify-center flex-col">
    <Head>
        <title>Хэрэглэгч нэвтрэх</title>
    </Head>
    <div>НЭВТРЭХ</div>
    <input type="text" name="username" value={allDataUser.firstname}/>
    <input type="password" name="password" value={allDataUser.password} />
    <button>Нэвтрэх</button>
    </div>
}

export async function getStaticProps() {
    const { users } = data;
    const allDataUser = users;
    console.log("All users==> ", allDataUser);


    return {
      props: {
        allDataUser
      }
    }
  }
