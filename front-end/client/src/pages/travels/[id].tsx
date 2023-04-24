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
 
  let { id } = travelData;
  let { travel } = travelData;

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
          <div className="max-h-60 w-full overflow-hidden rounded-md bg-blue-500">
            <img src={travel.image} alt="profile image 1" className="w-full shadow-lg" />
          </div>
          <div className="px-2 py-4 flex flex-col gap-y-2">
            <p className="text-slate-800"><span className="text-sm font-bold text-gray-900">Аймаг: </span>{travel.destination}</p>
            <p className="text-slate-800"><span className="text-sm font-bold text-gray-900">Сум, газрын нэр: </span>{travel.subDest}</p>
            <p className="text-slate-800"><span className="text-sm font-bold text-gray-900 text-justify">Товч мэдээлэл: </span>{travel.description}</p>
            <p><span className="text-sm font-bold text-gray-900">Тохиромжтой улирал: </span>
            /{travel.season.map(elem => (<span>{elem}, </span>))}/
            </p>
            <p><span className="text-sm font-bold text-gray-900">Tags: </span>
            [{travel.tags.map(item => (<span>{item.name},{" "}</span>))}]
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
