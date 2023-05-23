import React, { ReactNode } from "react";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType): JSX.Element => (
  <>
    <div>
      <div className="pt-3 p-1">
        <Header />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  </>
);

const Footer = () => (
  <div className="text-center text-slate-500 py-4 bg-slate-100  w-full ">
    {"Copyright © 2023 Travelway development team."}
  </div>
);

export default Layout;
