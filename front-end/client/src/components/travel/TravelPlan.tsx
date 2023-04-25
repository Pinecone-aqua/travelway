import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TravelType } from "../../../util/types";

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
      <div className="bg-teal-500 ">
        <div>
          <section className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 container mx-auto bg-slate-500">
            {travels.map((travel: TravelType, index: number) => (
              <Link href={`/travels/${travel._id}`} key={index}>
                <div
                  className="max-w-md border rounded bg-slate-100 flex p-0"
                  key={travel._id}
                >
                  <div
                    key={`${travel._id}abcd3be`}
                    className="flex flex-col w-[60%] p-4"
                  >
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
                      <span className="font-bold text-teal-800">SEASON:</span>{" "}
                      {travel.season}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
          <div>HERE Tour Plan Information</div>
        </div>
      </div>
    </>
  );
}
