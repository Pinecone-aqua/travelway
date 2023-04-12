import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default Layout;
