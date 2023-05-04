import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Head from "next/head";
import TravelProgram from "./travelProgram";


export default function Index() {

  return (
    <Layout>
      <Head>
        <title>Аяллын хөтөлбөр</title>
      </Head>
      <div className="w-full xxl:h-[500px] xl:h-[400px] lg:h-[300px] md:h-[200px] sm:h-[150px] drop-shadow-2xl">
        <picture>
          <img
            src="./images/fuji.webp"
            alt="pic"
            className="w-full object-cover absolute h-[500px] max-h-full  drop-shadow-2xl"
          />
        </picture>
        <Header />
        <div className="flex justify-center  h-[84px] max-h-[125px] w-full  absolute bottom-0 bottom-[-40px]">
            <TravelProgram />
        </div>
      </div>
    </Layout>
  );
}
