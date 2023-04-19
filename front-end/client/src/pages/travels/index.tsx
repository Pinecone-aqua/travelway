import { getAllTravelData } from "../../../lib/travels";
import Link from "next/link";
import Header from "@/components/Header";
import { TravelType } from "../../../lib/TravelType";
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
              <div className="flex flex-col">
                <div>
                  <h2>{travel.title}</h2>
                  <p>{travel.description}</p>
                </div>
                <div>
                  { travel.plan.map((day, index) => (
                    <div className="flex gap-4" key={index}>
                      <div>{<img src={day.image} width={80} />}</div>
                      <div>{day.description}</div>
                    </div>
                  ))
                  }
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
