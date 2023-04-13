import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <div>Footer</div>
    </>
  );
};

export default Layout;
