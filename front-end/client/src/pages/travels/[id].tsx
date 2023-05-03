import React, { useEffect, useState } from "react";

import { DayType, TravelType } from "../../../util/types";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Travel({ result }: { result: TravelType }) {
  console.log(JSON.stringify(result, null, 2));

  const { query } = useRouter();
  const id = query.id;
  const [travelData, setTravelData] = useState<TravelType | null>(null);
  useEffect(() => {
    fetch(`http://localhost:3009/travels/${id}`)
      .then((response) => response.json())
      .then((res) => setTravelData(res));
  }, []);

  console.log("travelData", travelData);

  return (
    <>
      <div className="p-20">
        <div className="text-4xl p-5">{travelData?.title}</div>
        <div className="text-2xl">{travelData?.description}</div>
        {travelData?.day.map((oneday: DayType, index: number) => (
          <div key={index}>
            {index === 0 ? (
              <div className="my-4 w-full overflow-hidden">
                <Image
                  src={oneday.image}
                  alt={oneday.image}
                  width={1450}
                  height={300}
                  className="rounded-md w-full h-96 object-cover"
                />

                <h2 className="font-bold text-slate-700 text-4xl mt-4 mb-2">
                  Day {index + 1}
                </h2>
                {/* <p className="text-xl text-orange-500 font-normal">
                                {Date(page.updatedAt)}
                              </p> */}
                <h3 className="font-bold mb-2 text-lg">{oneday.subTitle}</h3>
                <p className="my-4 text-xl text-justify">{oneday.describe}</p>
                <h3 className="font-bold mt-2">
                  Очих газар: {oneday.destination}
                </h3>
                <h3 className="text-normal text-lg">
                  <span className="font-bold">Анхаарах зүйл: </span>
                  {oneday.considerations}
                </h3>
              </div>
            ) : index % 2 === 0 ? (
              <div className="flex justify-between gap-20 items-center mt-8 mb-4">
                <div className="flex-0">
                  <Image
                    src={oneday.image}
                    alt={oneday.image}
                    width={550}
                    height={400}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-4xl mt-4 mb-2">
                    Day {index + 1}
                  </h2>
                  {/* <p className="text-xl text-orange-500 font-normal">
                                  {Date(page.updatedAt)}
                                </p> */}
                  <h3 className="font-bold mb-2 text-lg">{oneday.subTitle}</h3>
                  <p className="my-4 text-xl text-justify">{oneday.describe}</p>
                  <h3 className="font-bold mt-2">
                    Очих газар: {oneday.destination}
                  </h3>
                  <h3 className="text-normal text-lg">
                    <span className="font-bold">Анхаарах зүйл: </span>
                    {oneday.considerations}
                  </h3>
                </div>
              </div>
            ) : (
              <div className="flex justify-between gap-20 items-center mt-8 mb-4">
                <div className="flex-1">
                  <h2 className="font-bold text-4xl mt-4 mb-2">
                    Day {index + 1}
                  </h2>
                  {/* <p className="text-xl text-orange-500 font-normal">
                                  {Date(page.updatedAt)}
                                </p> */}
                  <h3 className="font-bold mb-2 text-lg">{oneday.subTitle}</h3>
                  <p className="my-4 text-xl text-justify">{oneday.describe}</p>
                  <h3 className="font-bold mt-2">
                    Очих газар: {oneday.destination}
                  </h3>
                  <h3 className="text-normal text-lg">
                    <span className="font-bold">Анхаарах зүйл: </span>
                    {oneday.considerations}
                  </h3>
                </div>
                <div className="flex-0">
                  <Image
                    src={oneday.image}
                    alt={oneday.image}
                    width={550}
                    height={400}
                    className="rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
