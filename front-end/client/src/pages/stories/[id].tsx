import axios from "axios";
import Image from "next/image";
import { StoryTypeSh } from "../../../util/types";
import Carousel from "react-bootstrap/Carousel";

export default function Test(props: { data: StoryTypeSh }): JSX.Element {
  const { data } = props;

  return (
    <div className="bg-gray-200 rounded-2xl p-2 md:p-5 flex flex-col md:m-5 container m-auto w-full md:w-[70%]">
      <div className="flex flex-col w-full p-2  md:flex-row md:justify-around">
        <Carousel className="w-full md:w-[50%] md:p-5 md:m-auto">
          {data.image.map((img: string, index: number) => (
            <Carousel.Item key={index}>
              <Image
                src={img}
                alt={"zurag"}
                width={90}
                height={90}
                className="w-full h-[200px] md:w-[500px] md:h-[250px] m-auto rounded-3xl"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="w-full p-2 md:w-[50%] md:m-5">
          <p className="text-2xl font-extrabold">{data.title}</p>
          <p className="text-xl">{data.province} аймаг</p>
          <p className="text-xl font-bold"> {data.title}-ын тухай</p>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="m-5">
        <p className="text-2xl">Домог яриа</p>
        <p>{data.myth}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URI}/stories/allId`);
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
    `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/stories/${params.id}`
  );
  return {
    props: {
      data: data,
    },
  };
}
