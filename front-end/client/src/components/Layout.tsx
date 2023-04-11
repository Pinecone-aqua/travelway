import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default Layout;
