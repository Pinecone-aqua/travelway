import { useRouter } from "next/router";
import { provinces } from "../../../util/constant";

export default function ProvinceFilter(): JSX.Element {
  const router = useRouter();

  function filterHandler(e: { target: { value: string } }) {
    const pathname = "/stories";
    console.log(e.target.value);
    router.push({
      pathname,
      query: { ...router.query, province: e.target.value },
    });
  }
  return (
    <>
      <select
        className="mx-5 p-2 w-64 border-2 rounded-lg"
        name=""
        id=""
        onChange={filterHandler}
      >
        {provinces.map((province: string, index: number) => (
          <option key={index}>{province}</option>
        ))}
      </select>
    </>
  );
}
