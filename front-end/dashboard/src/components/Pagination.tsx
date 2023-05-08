import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import PageBtn from "./subComponent/PageBtn";
interface PropType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  lastPage: number | undefined;
  path: string;
}
export default function Pagination(props: PropType): JSX.Element {
  const { currentPage, setCurrentPage, lastPage, path } = props;

  const active = "bg-cyan-500 p-3 rounded-xl m-2";
  const inActive = " p-3 rounded-xl m-2 border-2";
  console;

  return (
    <>
      {currentPage !== 1 && (
        <Link
          href={`/${path}/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={"Өмнөх"} btnClass={inActive} />
        </Link>
      )}
      {currentPage > 2 && (
        <Link href={`/${path}/1`} onClick={() => setCurrentPage(1)}>
          <PageBtn btnName={1} btnClass={inActive} />
        </Link>
      )}
      {currentPage > 3 && "..."}
      {currentPage > 1 && (
        <Link
          href={`/${path}/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={currentPage - 1} btnClass={inActive} />
        </Link>
      )}

      <Link href={`/${path}/${currentPage}`}>
        <PageBtn btnName={currentPage} btnClass={active} />
      </Link>

      {lastPage && lastPage > currentPage && (
        <Link
          href={`/${path}/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageBtn btnName={currentPage + 1} btnClass={inActive} />
        </Link>
      )}
      {lastPage && lastPage - 2 > currentPage && "..."}
      {lastPage && lastPage - 1 > currentPage && (
        <Link
          href={`/${path}/${lastPage}`}
          onClick={() => setCurrentPage(lastPage)}
        >
          <PageBtn btnName={lastPage} btnClass={inActive} />
        </Link>
      )}
      {currentPage !== lastPage && (
        <Link
          href={`/${path}/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageBtn btnName={"Дараахи"} btnClass={inActive} />
        </Link>
      )}
    </>
  );
}
