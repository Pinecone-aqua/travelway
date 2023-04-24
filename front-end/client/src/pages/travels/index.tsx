import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { TravelType } from "../../../util/types";

interface TravelProps {
  travels: TravelType[];
}

export default function Travel({ travels }: TravelProps) {
  console.log("data shuu", travels);

  return (
    <Layout>
      <Head>
        <title>Travel Name here</title>
      </Head>
      <div className="bg-slate-800">
        <Header />
      </div>
      <div>
        <section className="flex flex-wrap gap-4 my-8 container mx-auto">
          {travels.map((travel: TravelType, index: number) => (
            <Link href={`/travels/${travel._id}`} key={index}>
              <div
                className="max-w-md border rounded bg-slate-100 flex p-0"
                key={travel._id}
              >
                <div
                  key={`${travel._id}abcd3be`}
                  className="flex flex-col w-[60%] p-4"
                >
                  <p className="text-slate-600 text-justify">
                    <span className="font-bold text-teal-800">
                      Description:
                    </span>{" "}
                    {travel.description}
                  </p>
                  <p className="text-slate-600 text-justify">
                    <span className="font-bold text-teal-800">TITLE:</span>{" "}
                    {travel.title}
                  </p>
                  <p className="text-slate-600 text-justify">
                    <span className="font-bold text-teal-800">SEASON:</span>{" "}
                    {travel.season}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const travels = await axios.get("http://localhost:3009/travels/get");
  const result = await travels.data;

  return {
    props: {
      travels: result,
    },
  };
}
