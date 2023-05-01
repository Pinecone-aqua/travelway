import React, { useEffect, useState } from "react";
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
      subTitle: string;
      describe: string;
      image: string;
      considerations: string;
      destination: string;
    }
  ];
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const id = params.id;
    if (id == "") {
      console.log("Amjilttgui");
      return;
    }
    // console.log("Params id:===> " + id);
    // console.log(typeof params.id);

    const travelData = await axios.get(`http://localhost:3009/travels/${id}`);
    const result = travelData.data;

    // console.log("TravelData => ", travelData);
    // console.log("Result in PROPS==> ");
    // console.log(result);

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

    // console.log("Get static Paths====>  ");
    // console.log(path);

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

  const [travelData, setTravelData] = useState<TravelType | null>(null);

  useEffect(() => {
    setTravelData(result);
  }, [result]);

  console.log(travelData);

  return (
    <Layout>
      <Head>
        <title>Аялал</title>
      </Head>
      <Header />
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
              <span className="text-sm font-bold text-gray-900 text-justify">
                {/* {result.createdAt.toISOString().substring(0, 9)} */}
              </span>
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
        </div>
      </article>
    </Layout>
  );
}
