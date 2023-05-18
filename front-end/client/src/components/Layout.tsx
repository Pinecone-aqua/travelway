import Link from "next/link";
import React, { ReactNode } from "react";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType): JSX.Element => (
  <>
    <div className="pt-3 p-1">
      <Header />
    </div>
    <div>{children}</div>
    <Footer />
  </>
);

const Footer = () => (
  <div className="text-center text-slate-500 py-4 bg-slate-100 bottom-0 w-full">
    {"Copyright © 2023 Travelway development team."}
  </div>
);

export default Layout;
