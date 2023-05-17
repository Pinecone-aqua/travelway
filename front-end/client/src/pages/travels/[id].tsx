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
  }, [id]);

  console.log("travelData", travelData);

  return (
    <>
      <div className="container mx-auto p-8">
        {travelData?.day.map((oneday: DayType, index: number) => (
          <div key={index} className="border p-4 rounded-md mb-8">
            <h2 className="font-bold text-3xl mb-2 md:text-4xl">
              Day {index + 1}
            </h2>
            <div className="md:flex">
              {index % 2 === 0 ? (
                <>
                  <div className="md:flex-shrink-0 w-full md:w-1/2">
                    <Image
                      src={oneday.image}
                      alt={oneday.image}
                      width={550}
                      height={400}
                      className="rounded-md w-full h-auto"
                    />
                  </div>
                  <div className="md:ml-4 md:w-1/2">
                    <h3 className="font-bold mb-2 text-lg">
                      {oneday.subTitle}
                    </h3>
                    <p className="my-4 text-lg md:text-xl text-justify">
                      {oneday.describe}
                    </p>
                    <h3 className="font-bold mt-2">
                      Очих газар: {oneday.destination}
                    </h3>
                    <h3 className="text-normal text-lg">
                      <span className="font-bold">Анхаарах зүйл: </span>
                      {oneday.considerations}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:flex-1 md:w-1/2">
                    <h3 className="font-bold mb-2 text-lg">
                      {oneday.subTitle}
                    </h3>
                    <p className="my-4 text-lg md:text-xl text-justify pr-10">
                      {oneday.describe}
                    </p>
                    <h3 className="font-bold mt-2">
                      Очих газар: {oneday.destination}
                    </h3>
                    <h3 className="text-normal text-lg">
                      <span className="font-bold">Анхаарах зүйл: </span>
                      {oneday.considerations}
                    </h3>
                  </div>
                  <div className="md:flex-shrink-0 md:w-1/2">
                    <Image
                      src={oneday.image}
                      alt={oneday.image}
                      width={550}
                      height={400}
                      className="rounded-md w-full h-auto"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
