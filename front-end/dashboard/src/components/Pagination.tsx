import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PageBtn from "./subComponent/PageBtn";
interface PropType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  path: string;
}

export default function Pagination(props: PropType): JSX.Element {
  const { currentPage, setCurrentPage, path } = props;
  const active =
    "bg-gradient-to-r from-tocolor to-purple-500 p-3 rounded-xl m-2";
  const inActive = " p-3 rounded-xl m-2 border-2";
  const [pageNum, setPageNum] = useState<number>(1);
  useEffect(() => {
    fetch(`http://localhost:3009/${path}/pageNum`)
      .then((response) => response.json())
      .then((res) => setPageNum(res));
  }, [path]);
  const lastPage = pageNum && Math.ceil(pageNum / 8);

  const numbers = [];

  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  return (
    <>
      {lastPage === 1 ? (
        <></>
      ) : (
        <>
          {currentPage !== 1 && (
            <Link
              href={`${currentPage - 1}`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <PageBtn btnName={"Өмнөх"} btnClass={inActive} />
            </Link>
          )}
          {currentPage > 2 && (
            <Link href={`1`} onClick={() => setCurrentPage(1)}>
              <PageBtn btnName={1} btnClass={inActive} />
            </Link>
          )}
          {currentPage > 3 && "..."}
          {currentPage > 1 && (
            <Link
              href={`${currentPage - 1}`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <PageBtn btnName={currentPage - 1} btnClass={inActive} />
            </Link>
          )}

          <Link href={`${currentPage}`}>
            <PageBtn btnName={currentPage} btnClass={active} />
          </Link>

          {lastPage && lastPage > currentPage && (
            <Link
              href={`${currentPage + 1}`}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <PageBtn btnName={currentPage + 1} btnClass={inActive} />
            </Link>
          )}
          {lastPage && lastPage - 2 > currentPage && "..."}
          {lastPage && lastPage - 1 > currentPage && (
            <Link href={`${lastPage}`} onClick={() => setCurrentPage(lastPage)}>
              <PageBtn btnName={lastPage} btnClass={inActive} />
            </Link>
          )}
          {currentPage !== lastPage && (
            <Link
              href={`${currentPage + 1}`}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <PageBtn btnName={"Дараахи"} btnClass={inActive} />
            </Link>
          )}
        </>
      )}
    </>
  );
}
