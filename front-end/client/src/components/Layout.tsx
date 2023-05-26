import React, { ReactNode } from "react";
import Header from "./Header";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType): JSX.Element => (
  <>
    <div>
      <Header />
      <div className="content bg-[#121718]">
        <div className="contentScroller">
          <div
            className="dataScroller"
            style={{
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              opacity: 1,
              pointerEvents: "all",
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

const Footer = () => (
  <div className="text-slate-500  bg-[#121718]  w-full h-[200px] flex justify-center items-center ">
    <p> Copyright © 2023 Travelway development team.</p>
  </div>
);

export default Layout;
