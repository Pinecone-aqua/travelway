import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageBtn from "./PageBtn";
interface PropType {
  path: string;
}

export default function Pagination(props: PropType): JSX.Element {
  const { path } = props;

  const router = useRouter();
  const active =
    "bg-gradient-to-r from-tocolor text-white to-purple-500 p-3 rounded-xl m-2";
  const inActive = " p-3 rounded-xl m-2 border-2";

  const [pageNum, setPageNum] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const page = router.query.page;
    setCurrentPage(Number(page));
  }, [router]);

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
              <PageBtn btnName={"Дараах"} btnClass={inActive} />
            </Link>
          )}
        </>
      )}
    </>
  );
}
