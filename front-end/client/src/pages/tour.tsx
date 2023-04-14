import Layout from "@/components/Layout";
import Head from "next/head";

export default function Tour() {
  return (
    <Layout>
      <Head>
        <title>Аяллын хөтөлбөр</title>
      </Head>
      <section>
        <p>Title here Big Headline</p>
      </section>
      <section>
        <p>CARDS</p>
        {/* All travels data here */}
      </section>
    </Layout>
  );
}
