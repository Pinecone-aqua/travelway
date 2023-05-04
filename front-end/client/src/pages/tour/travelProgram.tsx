import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { TravelType } from "../../../util/types";

export default function TravelProgram(): JSX.Element {
  const [travels, setTravels] = useState<TravelType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getFetchdata = async () => {
      const travels = await axios.get("http://localhost:3009/travels/get");
      const { data } = travels;

      setTravels(data);
    };
    getFetchdata();
  }, []);

  
  const handleChangePage = (e: FormEvent, index: number) => {
    e.preventDefault();
    setCurrentPage(index);
  };
  
  const pageNumber = currentPage;
  console.log("Data-page ===>", pageNumber);
  console.log("Data===> ", travels);

  return (
    <div>
      <div>
        <section className="flex flex-col gap-2 my-8 container mx-auto">
          <div className="w-full bg-slate-50 p-2 text-start">
            {travels.map((travel: TravelType, index) => (
              <div key={index}>
                <img src={travel.image} alt={travel.title} width={200} height={(200 * (9 / 16))} />
                <div
                  className="max-full mt-4 px-4 text-slate-800 flex flex-col"
                  key={index}
                >
                  <h1 className="text-3xl text-start p-2 mb-6 text-orange-700">
                    {travel.title}
                  </h1>
                  <p className="w-full text-justify text-lg mt-4 mb-10">
                    {travel.description}
                  </p>
                  <div>
                    {/* <Travel daysOfTravel={travel.day} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// function Travel(daysOfTravel: DayType[]) {

//   return (
//     <div>
//       {daysOfTravel.map((dayOf: DayType, index: number) => (
//         <div key={index}>
//           {index === 0 ? (
//             <div className="my-4 w-full overflow-hidden">
//               <Image
//                 src={dayOf.image}
//                 alt={dayOf.image}
//                 width={1450}
//                 height={300}
//                 className="rounded-md w-full h-96 object-cover"
//               />

//               <h2 className="font-bold text-slate-700 text-4xl mt-4 mb-2">
//                 Day {index + 1}
//               </h2>
//               {/* <p className="text-xl text-orange-500 font-normal">
//                               {Date(page.updatedAt)}
//                             </p> */}
//               <h3 className="font-bold mb-2 text-lg">{dayOf.subTitle}</h3>
//               <p className="my-4 text-xl text-justify">{dayOf.describe}</p>
//               <h3 className="font-bold mt-2">
//                 Очих газар: {dayOf.destination}
//               </h3>
//               <h3 className="text-normal text-lg">
//                 <span className="font-bold">Анхаарах зүйл: </span>
//                 {dayOf.considerations}
//               </h3>
//             </div>
//           ) : index % 2 === 0 ? (
//             <div className="flex justify-between gap-20 items-center mt-8 mb-4">
//               <div className="flex-0">
//                 <Image
//                   src={dayOf.image}
//                   alt={dayOf.image}
//                   width={550}
//                   height={400}
//                   className="rounded-md"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h2 className="font-bold text-4xl mt-4 mb-2">
//                   Day {index + 1}
//                 </h2>
//                 {/* <p className="text-xl text-orange-500 font-normal">
//                                 {Date(page.updatedAt)}
//                               </p> */}
//                 <h3 className="font-bold mb-2 text-lg">{dayOf.subTitle}</h3>
//                 <p className="my-4 text-xl text-justify">{dayOf.describe}</p>
//                 <h3 className="font-bold mt-2">
//                   Очих газар: {dayOf.destination}
//                 </h3>
//                 <h3 className="text-normal text-lg">
//                   <span className="font-bold">Анхаарах зүйл: </span>
//                   {dayOf.considerations}
//                 </h3>
//               </div>
//             </div>
//           ) : (
//             <div className="flex justify-between gap-20 items-center mt-8 mb-4">
//               <div className="flex-1">
//                 <h2 className="font-bold text-4xl mt-4 mb-2">
//                   Day {index + 1}
//                 </h2>
//                 {/* <p className="text-xl text-orange-500 font-normal">
//                                 {Date(page.updatedAt)}
//                               </p> */}
//                 <h3 className="font-bold mb-2 text-lg">{dayOf.subTitle}</h3>
//                 <p className="my-4 text-xl text-justify">{dayOf.describe}</p>
//                 <h3 className="font-bold mt-2">
//                   Очих газар: {dayOf.destination}
//                 </h3>
//                 <h3 className="text-normal text-lg">
//                   <span className="font-bold">Анхаарах зүйл: </span>
//                   {dayOf.considerations}
//                 </h3>
//               </div>
//               <div className="flex-0">
//                 <Image
//                   src={dayOf.image}
//                   alt={dayOf.image}
//                   width={550}
//                   height={400}
//                   className="rounded-md"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
