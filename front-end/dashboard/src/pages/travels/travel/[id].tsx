import axios from "axios";
import { DayType, TravelType } from "@/util/types";

export default function TravelID(props: { data: TravelType }): JSX.Element {
  const { data } = props;

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  console.log(data);

  return (
    <>
      <div className="p-20 bg-slate-100">
        <div className="text-4xl p-5">{data.title}</div>
        <div className="text-2xl">{data.description}</div>
        {data.day.map((oneday: DayType, index: number) => (
          <div key={index}>
            {index === 0 ? (
              <div className="my-4 w-full overflow-hidden">
                <img
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
                  <img
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
                <div className="flex-0">
                  <img
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

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3009/travels/allId");
  const ids = await res.json();

  const paths = await ids.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { data } = await axios.get(
    `http://localhost:3009/travels/${params.id}`
  );
  return {
    props: {
      data: data,
    },
  };
}
