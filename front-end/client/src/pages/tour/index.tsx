import Head from "next/head";
import TravelProgram from "./travelProgram";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Аяллын хөтөлбөр</title>
      </Head>
      <TravelProgram />
    </div>
  );
}
