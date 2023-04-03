import React, { Dispatch, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

type Props = {
  numberOfPages: number;
  offset: number;
  setCryptoData: Dispatch<any>;
};

export default function CryptoTablePagination({
  setCryptoData,
  numberOfPages,
  offset,
}: Props) {
  const [activePage, setActivePage] = useState(1);
  const [paginationRange, setPaginationRange] = useState([1, 2, 3, 4, 5]);
  const updatePaginationRange = (page: number) => {
    const temp = [];
    if (page <= 3) {
      for (let i = 1; i < 6; i++) {
        temp.push(i);
      }
    } else if (page >= 28) {
      for (let i = 26; i < numberOfPages + 1; i++) {
        temp.push(i);
      }
    } else {
      for (let i = page - 2; i < page + 3; i++) {
        temp.push(i);
      }
    }
    setActivePage(page);
    setPaginationRange([...temp]);
  };
  const handlePageClick = async (page: number) => {
    updatePaginationRange(page);
    const res = await fetch(
      `https://api.coincap.io/v2/assets?limit=25&offset=${(page - 1) * offset}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.COINCAP_PRIVATE_API_KEY}`,
        },
      }
    );
    const { data } = await res.json();
    setCryptoData(data);
  };

  return (
    <>
      <div className="btn-group justify-center flex">
        <button
          className="btn rounded-l-2 rounded-r-none"
          onClick={() => handlePageClick(1)}
        >
          First Page
        </button>
        {paginationRange.map((page) => {
          return (
            <button
              key={page}
              className={`btn ${page === activePage && "btn-active"}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="btn rounded-l-none rounded-r-2"
          onClick={() => handlePageClick(numberOfPages)}
        >
          Last Page
        </button>
      </div>
    </>
  );
}
