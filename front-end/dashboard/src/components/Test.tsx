import { useEffect, useState } from "react";
import PageNum from "./subcomp/Pagination/PageNum";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";

export default function Pagination() {
  const router = useRouter();
  const [lastPageNum, setLastPageNum] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:7003/fitness/pages")
        .then((res) => setLastPageNum(res.data.length));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (router.query.page) {
      const pageNum = Number(router.query.page);
      setCurrentPage(pageNum);
      if (pageNum < 0 && pageNum > lastPageNum) router.push("1");
    }
  }, [router, lastPageNum]);

  return (
    <div className="flex justify-center items-center m-2 text-xs text-white">
      <div className="flex items-end justify-center gap-2 w-1/2">
        {lastPageNum > 1 && (
          <>
            <div className="flex gap-2 w-2/7">
              <div />
              {currentPage > 1 && (
                <Link
                  href={`${currentPage - 1}`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <PageNum page={"Өмнөх"} currentPage={currentPage} />
                </Link>
              )}

              {lastPageNum > 3 && currentPage > 1 && lastPageNum > 2 && (
                <>
                  <Link href={`1`} onClick={() => setCurrentPage(1)}>
                    <PageNum page={1} currentPage={currentPage} />
                  </Link>
                </>
              )}
            </div>
            {currentPage > 3 && <BsThreeDots />}
            <div className="flex gap-2 w-1/5">
              {lastPageNum > 4 && currentPage == 3 && (
                <Link href={`2`} onClick={() => setCurrentPage(2)}>
                  <PageNum page={2} currentPage={currentPage} />
                </Link>
              )}
              {lastPageNum > 2 && (
                <Link
                  href={`${
                    currentPage < lastPageNum - 1
                      ? currentPage > +3
                        ? currentPage - 1
                        : currentPage
                      : lastPageNum - 2
                  }`}
                  onClick={() =>
                    setCurrentPage(
                      currentPage < lastPageNum - 1
                        ? currentPage > +3
                          ? currentPage - 1
                          : currentPage
                        : lastPageNum - 2
                    )
                  }
                >
                  <PageNum
                    page={
                      currentPage < lastPageNum - 1
                        ? currentPage > +3
                          ? currentPage - 1
                          : currentPage
                        : lastPageNum - 2
                    }
                    currentPage={currentPage}
                  />
                </Link>
              )}
              <Link
                href={`${
                  currentPage < lastPageNum - 1
                    ? currentPage > +3
                      ? currentPage
                      : currentPage + 1
                    : lastPageNum - 1
                }`}
                onClick={() =>
                  setCurrentPage(
                    currentPage < lastPageNum - 1
                      ? currentPage > +3
                        ? currentPage
                        : currentPage + 1
                      : lastPageNum - 1
                  )
                }
              >
                <PageNum
                  page={
                    currentPage < lastPageNum - 1
                      ? currentPage > +3
                        ? currentPage
                        : currentPage + 1
                      : lastPageNum - 1
                  }
                  currentPage={currentPage}
                />
              </Link>
              {lastPageNum >= 5 && currentPage === 3 ? null : (
                <Link
                  href={`${
                    currentPage < lastPageNum - 1
                      ? currentPage > +3
                        ? currentPage + 1
                        : currentPage + 2
                      : lastPageNum
                  }`}
                  onClick={() =>
                    setCurrentPage(
                      currentPage < lastPageNum - 1
                        ? currentPage > +3
                          ? currentPage + 1
                          : currentPage + 2
                        : lastPageNum
                    )
                  }
                >
                  <PageNum
                    page={
                      currentPage < lastPageNum - 1
                        ? currentPage > +3
                          ? currentPage + 1
                          : currentPage + 2
                        : lastPageNum
                    }
                    currentPage={currentPage}
                  />
                </Link>
              )}
            </div>
            {lastPageNum > currentPage + 2 && <BsThreeDots />}
            <div className="flex gap-2 w-2/7">
              {lastPageNum >= 4 &&
                lastPageNum > currentPage + 1 &&
                lastPageNum > 2 && (
                  <>
                    <Link
                      href={`${lastPageNum}`}
                      onClick={() => setCurrentPage(lastPageNum)}
                    >
                      <PageNum page={lastPageNum} currentPage={currentPage} />
                    </Link>
                  </>
                )}
              {currentPage < lastPageNum && (
                <Link
                  href={`${currentPage + 1}`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <PageNum page={"Дараах"} currentPage={currentPage} />
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
