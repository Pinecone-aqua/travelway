import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
  <>
    {/* <Header /> */}
    <div>{children}</div>
    <div>Footer</div>
  </>
);

export default Layout;
