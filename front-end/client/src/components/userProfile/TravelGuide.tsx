import { useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { UserContextType } from "../../../util/types";

/* eslint-disable @next/next/no-img-element */
export default function TravelGuide() {
  const { token } = useContext(UserContext);
  console.log("usser", token);

  return (
    <>
      <div className=" flex justify-center">
        <img src="./images/work.webp" alt="pic" />
      </div>
    </>
  );
}
