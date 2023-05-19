import { Spinner } from "@chakra-ui/react";
import NextLink from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PropType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  path: string;
}

export default function Pagination(props: PropType): JSX.Element {
  const { currentPage, setCurrentPage, path } = props;
  const [pageNum, setPageNum] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:3009/${path}/${pageNum}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        if (!res) return;
        setPageNum(Math.ceil(res / 8));
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching page numbers");
        console.log(error);
        setIsLoading(false);
      });
  }, [pageNum, path]);

  const lastPage = Math.ceil(pageNum / 8);

  if (isLoading) {
    return <Spinner color="red.500" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const showEllipsis = (index: number) => index === 0 || index === lastPage - 1;

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        {currentPage > 1 && (
          <li>
            <NextLink href={`${path}/${currentPage - 1}`} passHref>
              <div
                className="py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-l-md"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </div>
            </NextLink>
          </li>
        )}
        {[...Array(lastPage)].map((_, index) => {
          const page = index + 1;
          if (
            page === 1 ||
            page === lastPage ||
            (page >= currentPage - 1 && page <= currentPage + 1) ||
            showEllipsis(index)
          ) {
            return (
              <li key={index}>
                <NextLink href={`${path}/${page}`} passHref>
                  <a
                    className={`py-2 px-3 ${
                      page === currentPage
                        ? "bg-indigo-500 text-white hover:bg-indigo-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    } rounded-md`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </a>
                </NextLink>
              </li>
            );
          } else {
            return null;
          }
        })}
        {currentPage < lastPage && (
          <li>
            <NextLink href={`${path}/${currentPage + 1}`} passHref>
              <div
                className="py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-r-md"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </div>
            </NextLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
