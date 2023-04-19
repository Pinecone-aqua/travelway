import Layout from "@/components/Layout";
import Head from "next/head";
import { getAllTravelIDs, getTravelData } from "../../../lib/travels";
import { TravelType } from "../../../lib/TravelType";
import { GetStaticProps } from "next";
import Header from "@/components/Header";

interface TravelTypeID {
  id: string;
  travel: TravelType;
}

interface TravelData {
  travelData: TravelTypeID;
}

export async function getStaticPaths() {
  const paths = await getAllTravelIDs();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<TravelData> = async ({
  params,
}) => {
  const id = params?.id ?? "";
  const travelData: TravelTypeID = await getTravelData(id as string);

  return {
    props: {
      travelData,
    },
  };
};

export default function Travel({ travelData }: { travelData: TravelTypeID }) {
  const { travel } = travelData;

  return (
    <Layout>
      <Head>
        <title>Аялал</title>
      </Head>
      <div className="bg-slate-800">
        <Header />
      </div>
      <article>
        <div className="flex gap-2 justify-center items-center bg-white w-[90vw] mx-auto m-4 rounded-sm shadow-md">
          <div className="w-full rounded-md">
            <h4>Description</h4>
            <p>{travel.description}</p>
          </div>
          {travel.plan.map((day, index) => (
            <div className="px-2 py-4 flex gap-y-2" key={index}>
              <div className="bg-red-400">
                <picture>
                <img src={day.image} width={90} alt="Card image" />
                </picture>
              </div>
              <div className="bg-blue-500">
                <h4>{day.title}</h4>
                <p>{day.description}</p>
                <p>{day.considerations}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  );
}
