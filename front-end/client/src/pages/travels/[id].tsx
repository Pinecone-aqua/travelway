import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import Header from "../../components/Header";
import axios from "axios";

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

export async function getStaticProps({ params }: any) {
  try {
    const id = params?.id ?? "";
    if (id == "") {
      console.log("Amjilttgui");
      return;
    }
    // console.log("Params id:===> " +id);
    // console.log(typeof params.id);

    const travelData = await axios.get(`http://localhost:3009/travels/${id}`);

    const result = travelData.data;

    return {
      props: {
        result: result,
      },
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function getStaticPaths() {
  try {
    const result = await axios.get("http://localhost:3009/travels/get");
    const { data } = result;

    const path = data.map((el: TravelType) => ({
      params: {
        id: String(el._id),
      },
    }));

    return {
      paths: path,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Travel({ result }: { result: TravelType }) {

  // console.log(JSON.stringify(result, null, 2));
  // console.log(await result);

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
            {result.title}
          </div>
          <div className="px-2 py-4 flex flex-col gap-y-2">
            <p className="text-slate-800">
              <span className="text-sm font-bold text-gray-900">
                Товч мэдээлэл:{" "}
              </span>
              {result.description}
            </p>
            <p className="text-slate-800">
              <span className="text-sm font-bold text-gray-900">
                Тохиромжтой улирал:{" "}
              </span>
              {result.season}
            </p>
            <p className="text-slate-800">
              <span className="text-sm font-bold text-gray-900 text-justify">
                {/* {result.createdAt.toISOString().substring(0, 9)} */}
              </span>
            </p>
            <p>
              <span className="text-sm font-bold text-gray-900">Title: </span>/
              {
                JSON.stringify(result.season, null, 2)
              
              // .map((elem, index) => (
              // <span key={index}>{elem}, </span>
              // ))
              
              }
              /
            </p>
            <p>
              <span className="text-sm font-bold text-gray-900">Day: </span>
              {
                JSON.stringify(result.day, null, 2)

                // .map((item, index) => (
                //   <span key={index}>{item.title}</span>
                // ))
              }
            </p>
          </div>
        </div>{" "}
        */
      </article>
    </Layout>
  );
}

{
}
