import { useRouter } from "next/router";
import { provinces } from "../../../util/constant";

export default function ProvinceFilter(): JSX.Element {
  const router = useRouter();

  function filterHandler(e: { target: { value: string } }) {
    const pathname = "/stories";
    const province = e.target.value;

    router.push({
      pathname,
      query: { ...router.query, province: province === "Бүгд" ? "" : province },
    });
  }
  return (
    <>
      <select
        className="border-2 rounded-lg"
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
