import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import LeaguesCard from '../../Pages/Leagues/LeaguesCard/LeaguesCard';
import "../ReactPaginate/ReactPaginate.scss";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

export function PaginatedItems({ itemsPerPage, items, loading }) {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <LeaguesCard currentItems={currentItems} loading={loading}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        breakClassName="breakclass"
        breakLinkClassName="breakLinkClassName"
        pageLinkClassName="pagelink"
        containerClassName="containerclass"
        pageClassName='pageClassName'
        previousClassName="previousClassName"
        nextClassName="nextClassName"
        activeClassName="activeClassName"
        activeLinkClassName='activeLinkClassName'
        nextLinkClassName="nextLinkClassName"
        disabledClassName="disabledClassName"
        disabledLinkClassName="disabledLinkClassName"
      />
    </>
  );
}
