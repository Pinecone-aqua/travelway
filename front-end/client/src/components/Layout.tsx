import React, { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
    <div>
      {/* <Header /> */}
      <div>{children}</div>
      <div>Footer</div>
    </div>
    </>
  );
};


export default Layout;
