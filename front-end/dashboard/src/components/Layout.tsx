import React, { ReactNode } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex">
        <SideMenu />
        <div className="w-9/12">{children}</div>
      </div>
      <div>footer</div>
    </>
  );
}
