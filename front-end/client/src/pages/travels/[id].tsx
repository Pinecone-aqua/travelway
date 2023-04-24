import Layout from "@/components/Layout";
import Head from "next/head";
import { getAllTravelIDs, getTravelData } from "../../../lib/travelsService";
import { GetStaticProps } from "next";
import Header from "@/components/Header";
import { useEffect } from "react";
import axios from "axios";

type IdsType = { _id: string };
interface TravelType {
  _id: string;
  title: string;
  description: string;
  day: [
    {
      title: string;
      description: string;
      image: string;
      considerations: string;
      destination: string;
    }
  ];
  season: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface TravelData {
  travelData: TravelType;
}

export async function getStaticPaths() {
  try {
    const result = await axios.get("http://localhost:3009/travels/allid");

    const { data } = result;
    const idsData: IdsType[] = data;

    // console.log(idsData);

    return idsData.map(({ _id }) => ({
      params: {
        id: _id,
      },
    }));
  } catch (error) {
    console.error(error);
    return [];
  }

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
  const travelData: TravelType = await getTravelData(id as string);

  return {
    props: {
      travelData,
    },
  };
};

export default function Travel({ travelData }: TravelData) {
  const travel = travelData;

  console.log(travel);
  useEffect;

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
            {travel.title}
          </div>
          <div className="px-2 py-4 flex flex-col gap-y-2">
            <p className="text-slate-800">
              <span className="text-sm font-bold text-gray-900">
                Товч мэдээлэл:{" "}
              </span>
              {travel.description}
            </p>
            <p className="text-slate-800">
              <span className="text-sm font-bold text-gray-900">
                Тохиромжтой улирал:{" "}
              </span>
              {travel.season}
            </p>
            <p className="text-slate-800">
              <span className="text-sm font-bold text-gray-900 text-justify">
                {travel.createdAt.toISOString().substring(0, 9)}
              </span>
            </p>
            <p>
              <span className="text-sm font-bold text-gray-900">Title: </span>/
              {travel.season.map((elem, index) => (
                <span key={index}>{elem}, </span>
              ))}
              /
            </p>
            <p>
              <span className="text-sm font-bold text-gray-900">Day: </span>[
              {travel.day.map((item, index) => (
                <span key={index}>{item.title}</span>
              ))}
              ]
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
