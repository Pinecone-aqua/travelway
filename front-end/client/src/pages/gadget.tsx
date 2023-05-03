// import Header from "@/components/Header";

import ContainerPages from "./containerPages";

export default function Gadget() {
  return (
    <>
      <div>
        {/* <Header /> */}
        <ContainerPages />
        <div className=" flex justify-center">
          <picture>
            <img src="./images/work.webp" alt="pic" />
          </picture>
        </div>
      </div>
    </>
  );
}
