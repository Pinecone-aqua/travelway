import React, { ReactNode } from "react";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      <div className="text-center text-slate-500 py-4 bg-teal-100">Copyright &copy; 2023 Travelway development team.</div>
    </div>
    </>
  );
};


export default Layout;
