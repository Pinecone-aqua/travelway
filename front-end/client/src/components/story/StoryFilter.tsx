import { useRouter } from "next/router";
import { categories } from "../../../util/constant";
export default function CategoryFilter() {
  const router = useRouter();

  function filterHandler(e: { target: { value: string } }) {
    const pathname = "/stories";

    router.push({
      pathname,
      query: { ...router.query, category: e.target.value },
    });
  }

  return (
    <>
      <select
        onChange={filterHandler}
        className="mx-5 p-2 w-64 border-2 rounded-lg"
      >
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
    </>
  );
}
