import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TravelType } from "../../../util/types";
import Image from "next/image";
import Date from "../date";

export default function TravelPlan(): JSX.Element {
  const [travels, setTravels] = useState<TravelType[]>([]);

  useEffect(() => {
    const getFetchdata = async () => {
      const travels = await axios.get("http://localhost:3009/travels/get");
      const { data } = travels;

      setTravels(data);
    };
    getFetchdata();
  }, []);

  return (
    <>
      <div>
        <div>
          <section className="flex flex-col gap-2 my-8 container mx-auto">
            {travels.map((travel: TravelType, index: number) => (
              <Link href={`/travelJourney/${travel._id}`} key={index}>
                <div
                  className="max-full mt-4 px-4 text-slate-800 flex flex-col"
                  key={index}
                >
                  <h1 className="text-3xl text-start p-2 mb-6">
                    {travel.title}
                  </h1>
                  <p className="w-full text-justify text-lg mt-4 mb-10">
                    {travel.description}
                  </p>
                  <div>
                    {travel.day.map((oneday, index) => (
                      <div key={index}>
                        {index === 0 ? (
                          <div className="my-4 w-full">
                            <Image
                              src={oneday.image}
                              alt={oneday.image}
                              width={1450}
                              height={300}
                              className="rounded-md w-full"
                            />

                            <h2 className="font-bold text-slate-700 text-4xl mt-4 mb-2">
                              Day {index + 1}
                            </h2>
                            <p className="text-xl text-orange-500 font-normal">
                              {Date(travel.updatedAt)}
                            </p>
                            <h3 className="font-bold mb-2 text-lg">
                              {oneday.title}
                            </h3>
                            <p className="my-4 text-xl text-justify">
                              {oneday.description}
                            </p>
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
                              <p className="text-xl text-orange-500 font-normal">
                                {Date(travel.updatedAt)}
                              </p>
                              <h3 className="font-bold mb-2 text-lg">
                                {oneday.title}
                              </h3>
                              <p className="my-4 text-xl text-justify">
                                {oneday.description}
                              </p>
                              <h3 className="font-bold mt-2">
                                Очих газар: {oneday.destination}
                              </h3>
                              <h3 className="text-normal text-lg">
                                <span className="font-bold">
                                  Анхаарах зүйл:{" "}
                                </span>
                                {oneday.considerations}
                              </h3>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-between gap-x-20 items-center mt-8 mb-4">
                            <div className="flex-1">
                              <h2 className="font-bold text-slate-700 text-4xl mt-4 mb-2">
                                Day {index + 1}
                              </h2>
                              <p className="text-xl text-orange-500 font-normal">
                                {Date(travel.updatedAt)}
                              </p>
                              <h3 className="font-bold mb-2 text-lg">
                                {oneday.title}
                              </h3>
                              <p className="my-4 text-xl text-justify">
                                {oneday.description}
                              </p>
                              <h3 className="font-bold mt-2">
                                Очих газар: {oneday.destination}
                              </h3>
                              <h3 className="text-normal text-lg">
                                <span className="font-bold">
                                  Анхаарах зүйл:{" "}
                                </span>
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
                </div>
              </Link>
            ))}
          </section>
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
}
