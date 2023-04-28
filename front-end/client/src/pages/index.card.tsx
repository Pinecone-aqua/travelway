import axios from "axios";
import { TravelType } from "../../util/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Date from "@/components/date";

export default function TravelHome(): JSX.Element {
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
    <div>
      <div>
        <section className="flex flex-wrap justify-between gap-1 my-8 container mx-auto">
          {travels.map((travel: TravelType, index: number) => (
            <div className="flex flex-col gap-y-4 mt-4 text-slate-800" key={index}>
                {travel.day.map((oneday, index) => (
                <div className="w-full h-auto overflow-hidden mb-4 border-b-2 bg-slate-50" key={index}>
                  <Image
                    src={oneday.image}
                    alt={oneday.image}
                    width={350}
                    height={600}
                    className="rounded-t-md object-cover w-full" />
                  <p className="text-xl text-orange-500 font-normal px-2 py-4">
                    {Date(travel.updatedAt)}
                  </p>
                  <h3 className="font-thin text-lg px-2 mb-2 text-slate-900">{oneday.title}</h3>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
