// import axios from "axios";
// import { FormEvent, useEffect, useState } from "react";
// import { TravelType } from "../../util/types";
// import Image from "next/image";

// export default function TravelPlan(): JSX.Element {
//   const [travels, setTravels] = useState<TravelType[]>([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     const getFetchdata = async () => {
//       const travels = await axios.get("http://localhost:3009/travels/get");
//       const { data } = travels;

//       setTravels(data);
//     };
//     getFetchdata();
//   }, []);

//   const pageNumber = currentPage;

//   const handleChangePage = (e: FormEvent, index: number) => {
//     e.preventDefault();
//     setCurrentPage(index);
//   };

//   return (
//     <div>
//       <div>
//         <section className="flex flex-col gap-2 my-8 container mx-auto">
//           <div className="w-full flex flex-wrap gap-2 justify-center items-center">
//             {travels.map((item, index) => (
//               <button
//                 key={index}
//                 name="btnpage"
//                 type="button"
//                 value={index}
//                 onClick={(e) => handleChangePage(e, index)}
//                 className="border rounded-md bg-slate-100 text-black px-16 py-2 hover:bg-slate-400"
//               >
//                 {1 + Number(index)}
//               </button>
//             ))}
//           </div>
//           <div className="w-full bg-slate-50 p-2 text-start">
//             {travels.map((page, index) =>
//               pageNumber === index ? (
//                 <div key={index}>
//                   <div
//                     className="max-full mt-4 px-4 text-slate-800 flex flex-col"
//                     key={index}
//                   >
//                     <h1 className="text-3xl text-start p-2 mb-6 text-orange-700">
//                       {page.title}
//                     </h1>
//                     <p className="w-full text-justify text-lg mt-4 mb-10">
//                       {page.description}
//                     </p>
//                     <div>
//                       {page.day.map((oneday, lindex) => (
//                         <div key={lindex}>
//                           {lindex === 0 ? (
//                             <div className="my-4 w-full overflow-hidden">
//                               <Image
//                                 src={oneday}
//                                 alt={oneday.image}
//                                 width={1450}
//                                 height={300}
//                                 className="rounded-md w-full h-96 object-cover"
//                               />

//                               <h2 className="font-bold text-slate-700 text-4xl mt-4 mb-2">
//                                 Day {lindex + 1}
//                               </h2>
//                               {/* <p className="text-xl text-orange-500 font-normal">
//                                 {Date(page.updatedAt)}
//                               </p> */}
//                               <h3 className="font-bold mb-2 text-lg">
//                                 {oneday.subTitle}
//                               </h3>
//                               <p className="my-4 text-xl text-justify">
//                                 {oneday.describe}
//                               </p>
//                               <h3 className="font-bold mt-2">
//                                 Очих газар: {oneday.destination}
//                               </h3>
//                               <h3 className="text-normal text-lg">
//                                 <span className="font-bold">
//                                   Анхаарах зүйл:{" "}
//                                 </span>
//                                 {oneday.considerations}
//                               </h3>
//                             </div>
//                           ) : lindex % 2 === 0 ? (
//                             <div className="flex justify-between gap-20 items-center mt-8 mb-4">
//                               <div className="flex-0">
//                                 <Image
//                                   src={oneday.image}
//                                   alt={oneday.image}
//                                   width={550}
//                                   height={400}
//                                   className="rounded-md"
//                                 />
//                               </div>
//                               <div className="flex-1">
//                                 <h2 className="font-bold text-4xl mt-4 mb-2">
//                                   Day {lindex + 1}
//                                 </h2>
//                                 {/* <p className="text-xl text-orange-500 font-normal">
//                                   {Date(page.updatedAt)}
//                                 </p> */}
//                                 <h3 className="font-bold mb-2 text-lg">
//                                   {oneday.subTitle}
//                                 </h3>
//                                 <p className="my-4 text-xl text-justify">
//                                   {oneday.describe}
//                                 </p>
//                                 <h3 className="font-bold mt-2">
//                                   Очих газар: {oneday.destination}
//                                 </h3>
//                                 <h3 className="text-normal text-lg">
//                                   <span className="font-bold">
//                                     Анхаарах зүйл:{" "}
//                                   </span>
//                                   {oneday.considerations}
//                                 </h3>
//                               </div>
//                             </div>
//                           ) : (
//                             <div className="flex justify-between gap-20 items-center mt-8 mb-4">
//                               <div className="flex-1">
//                                 <h2 className="font-bold text-4xl mt-4 mb-2">
//                                   Day {lindex + 1}
//                                 </h2>
//                                 {/* <p className="text-xl text-orange-500 font-normal">
//                                   {Date(page.updatedAt)}
//                                 </p> */}
//                                 <h3 className="font-bold mb-2 text-lg">
//                                   {oneday.subTitle}
//                                 </h3>
//                                 <p className="my-4 text-xl text-justify">
//                                   {oneday.describe}
//                                 </p>
//                                 <h3 className="font-bold mt-2">
//                                   Очих газар: {oneday.destination}
//                                 </h3>
//                                 <h3 className="text-normal text-lg">
//                                   <span className="font-bold">
//                                     Анхаарах зүйл:{" "}
//                                   </span>
//                                   {oneday.considerations}
//                                 </h3>
//                               </div>
//                               <div className="flex-0">
//                                 <Image
//                                   src={oneday.image}
//                                   alt={oneday.image}
//                                   width={550}
//                                   height={400}
//                                   className="rounded-md"
//                                 />
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : null
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
