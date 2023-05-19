import { AdminContext } from "@/context/AdminProvider";
import React, { ReactNode, useContext } from "react";
import Header from "./Header";
import Login from "./Login";
import SideMenu from "./SideMenu";
import Loader from "../subComponent/Loader";

interface PropType {
  children: ReactNode;
}
export default function Layout({ children }: PropType): JSX.Element {
  const { admin } = useContext(AdminContext);

  return (
    <>
      {admin ? (
        <div className="flex bg-mycolor min-h-screen">
          <SideMenu />
          <div className="w-5/6 flex flex-col bg-slate-100 rounded-l-[50px] justify-center items-center border-">
            <div className="w-[90%]">
              <Header />
              <div className="min-h-screen h-100">
                <Loader>{children}</Loader>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
