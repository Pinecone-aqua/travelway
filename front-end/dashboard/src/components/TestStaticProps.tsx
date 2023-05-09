import { AdminType } from "@/util/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function EditFitness({ data: data }: { data: AdminType }) {
  console.log(data);

  return <>{data.username}</>;
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const res = await axios.get("http://localhost:7003/fitness/id");
  const paths = await res.data.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<AdminProp> = async ({
  params,
}: GetStaticPropsContext) => {
  const { data } = await axios.get(
    `http://localhost:3009/user/getfitness${params?.id}`
  );
  return {
    props: {
      data: data,
    },
  };
};
