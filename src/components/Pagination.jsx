import React from 'react';

const Pagination = ({ totalItems, pageSize, currentPage, setPage }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = [];
  const pageRangeSize = 3;
  const startPage = Math.floor(currentPage / pageRangeSize) * pageRangeSize;
  const endPage = Math.min(startPage + pageRangeSize, totalPages);

  for (let i = startPage; i < endPage; i++) {
    pages.push(i + 1);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
    <span className="text-sm sm:text-base bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm text-gray-700 font-medium">
  Showing{" "}
  <span className="text-custom-blue font-semibold">
    {currentPage * pageSize + 1}
  </span>{" "}
  to{" "}
  <span className="text-custom-blue font-semibold">
    {Math.min((currentPage + 1) * pageSize, totalItems)}
  </span>{" "}
  of{" "}
  <span className="text-custom-teal font-semibold">{totalItems}</span>
</span>
      <div className="inline-flex items-center space-x-2">
        <button
          onClick={() => setPage(0)}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-50 hover:shadow-md disabled:opacity-50"
          disabled={currentPage === 0}
        >
          First
        </button>
        <button
          onClick={() => setPage(Math.max(currentPage - 1, 0))}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-50 hover:shadow-md disabled:opacity-50"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {currentPage > pageRangeSize && <span className="px-2 sm:px-4 py-1 sm:py-2 text-gray-500">...</span>}
        {pages.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum - 1)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
              currentPage === pageNum - 1
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            {pageNum}
          </button>
        ))}
        {currentPage < totalPages - pageRangeSize && <span className="px-2 sm:px-4 py-1 sm:py-2 text-gray-500">...</span>}
        <button
          onClick={() => setPage(Math.min(currentPage + 1, totalPages - 1))}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-50 hover:shadow-md disabled:opacity-50"
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
        <button
          onClick={() => setPage(totalPages - 1)}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-50 hover:shadow-md disabled:opacity-50"
          disabled={currentPage === totalPages - 1}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;