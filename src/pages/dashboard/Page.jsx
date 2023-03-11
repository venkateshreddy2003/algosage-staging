import React from "react";

const Page = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    console.log("clicked");
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="mb-10 flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li className="page-item">
            <a
              className="text-neutral-600 dark:hover:bg-neutral-700 relative block rounded bg-transparent py-3 px-5 text-lg transition-all duration-300 hover:bg-blue-400 dark:text-white dark:hover:text-white"
              onClick={prevPage}
              href="#"
            >
              Previous
            </a>
          </li>
          {/* {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item font-bold ${
                currentPage == pgNumber ? "text-blue-700" : ""
              } `}
            >
              <a
                onClick={() => setCurrentPage(pgNumber)}
                className="text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 relative block rounded bg-transparent py-3 px-5 text-lg transition-all  duration-300 dark:text-white dark:hover:text-white"
                href="#"
              >
                {pgNumber}
              </a>
            </li>
          ))} */}
          <li className="page-item">
            <a
              className="text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 relative block rounded bg-transparent py-3 px-5 text-lg transition-all duration-300 hover:bg-blue-400 dark:text-white dark:hover:text-white"
              onClick={nextPage}
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;
