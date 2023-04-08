import React, { Dispatch, useMemo, useState } from "react";
import { fetchBasicCryptoData } from "../../utils/crypto";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";

type Props = {
  numberOfPages: number;
  offset: number;
  setCryptoData: Dispatch<any>;
};

export default function CryptoTablePagination({
  setCryptoData,
  numberOfPages,
}: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const paginationRage = useMemo(() => {
    //logic here
  }, []);
  const handlePageClick = async (pageNumber: { selected: number }) => {
    const dummyData = await fetchBasicCryptoData(25, 25 * pageNumber.selected);
    setCryptoData(dummyData);
  };

  return (
    <div className="flex justify-between overflow-scroll ">
      <div></div>
      <ReactPaginate
        pageCount={numberOfPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        className="btn-group flex"
        onPageChange={handlePageClick}
        pageLinkClassName="btn btn-sm md:btn-lg rounded-none "
        breakLinkClassName="btn btn-sm md:btn-lg rounded-none"
        nextLinkClassName="btn btn-sm md:btn-lg rounded-none"
        previousLinkClassName="btn btn-sm md:btn-lg rounded-none"
        activeClassName="[&>*]:btn-active"
        disabledLinkClassName="btn-disabled"
        breakLabel={"..."}
        previousLabel={
          <MdOutlineKeyboardArrowLeft className="text-xl md:text-2xl font-semibold" />
        }
        nextLabel={<MdOutlineKeyboardArrowRight />}
      />
    </div>
  );
}
