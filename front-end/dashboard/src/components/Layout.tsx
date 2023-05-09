import { AdminContext } from "@/context/AdminProvider";
import React, { ReactNode, useContext } from "react";
import Header from "./Header";
import Login from "./Login";
import SideMenu from "./SideMenu";

interface PropType {
  children: ReactNode;
}
export default function Layout({ children }: PropType): JSX.Element {
  const { admin } = useContext(AdminContext);

  return (
    <>
      {admin ? (
        <div className="bg-slate-200">
          <div>
            <Header />
          </div>
          <div className="flex mt-12">
            <SideMenu />
            <div className="w-9/12 mr-20">{children}</div>
          </div>
          <div>footer</div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
