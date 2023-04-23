import { getAllTravelData } from "../../../lib/travelsService";
import Link from "next/link";
import Header from "@/components/Header";
import { TravelType } from "./types";
import Layout from "@/components/Layout";
import Head from "next/head";

interface TravelProps {
  travels: TravelType[];
}

export default function Travel({ travels }: TravelProps) {
  // console.log(travels);
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
          {travels.map((travel) => (
            <Link href={`/travels/${travel._id}`} key={travel._id}>
              <div
                className="max-w-md border rounded bg-slate-100 flex p-0"
                key={travel._id}
              >
                <div className="max-h-60 w-[40%] overflow-hidden rounded-md">
                  Date: {travel.createdAt.toISOString().substring(0,11)}
                </div>
                <div key={`${travel._id}abcd3be`} className="flex flex-col w-[60%] p-4">
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
                    <span className="font-bold text-teal-800">
                      SEASON:
                    </span>{" "}
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
  const { travels } = await getAllTravelData();
  return {
    props: {
      travels,
    },
  };
}
