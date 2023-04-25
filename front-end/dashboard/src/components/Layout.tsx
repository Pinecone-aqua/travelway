import React, { ReactNode } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="bg-slate-200">
      <div>
        <Header />
      </div>
      <div className="flex mt-12">
        <SideMenu />
        <div className="w-9/12 mr-20">{children}</div>
      </div>
      <div>footer shuu</div>
    </div>
  );
}
