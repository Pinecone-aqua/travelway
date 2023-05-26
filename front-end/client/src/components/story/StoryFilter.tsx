import { useRouter } from "next/router";
import { categories } from "../../../util/constant";
export default function CategoryFilter() {
  const router = useRouter();

  function filterHandler(e: { target: { value: string } }) {
    const pathname = "/stories";
    const category = e.target.value;
    router.push({
      pathname,
      query: { ...router.query, category: category === "Бүгд" ? "" : category },
    });
  }

  return (
    <>
      <select onChange={filterHandler} className="border-2 rounded-lg">
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
    </>
  );
}
