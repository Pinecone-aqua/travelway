import axios from "axios";
import Image from "next/image";
import { StoryTypeSh } from "../../../util/types";

export default function Test(props: { data: StoryTypeSh }): JSX.Element {
  const { data } = props;
  console.log(data);
  return (
    <div className="flex flex-col m-5">
      <div className="flex flex-col md:flex-row">
        <Image
          src={data.image[0]}
          alt="s"
          style={{ borderRadius: "20px" }}
          width={1000}
          height={500}
        />

        <div className="w-full md:w-[40%] m-5">
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
  const res = await fetch("http://localhost:3009/stories/allId");
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
    `http://localhost:3009/stories/${params.id}`
  );
  return {
    props: {
      data: data,
    },
  };
}
