import { useEffect, useState } from "react";
import axios from "axios";

interface userType {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: 0,
  password: ""
}

export default function Users(): JSX.Element {
  const[user,setUser]= useState();

  useEffect(()=>{
    axios.get("http://localhost:9090/users/get").then((user)=>setUser(user.data))
  },[]);

  console.log("user",user);
  
  return (
  
    <>
      <div className="bg-violet-400 rounded-2xl w-10/12 h-2/3 "> 
      <div>{user?.map((unit: userType, index: string) => (


        ))}</div>
      
      </div>
    </>
  );
}
