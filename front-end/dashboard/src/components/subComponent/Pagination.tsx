import { useState } from "react";
import PageButton from "./PageButton";

export default function Pagination(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(10);
  return (
    <>
      <Link href="">
        <PageButton />
      </Link>
    </>
  );
}
