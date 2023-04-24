import React, { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
    <>
    <div>
      {/* <Header /> */}
      <div>{children}</div>
      <div className="text-center text-slate-500 py-4 bg-teal-100">Copyright &copy; 2023 Travelway development team.</div>
    </div>
    </>
  );


export default Layout;
