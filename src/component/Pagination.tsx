"use client";
import useStore from '../store/useStore';

const Pagination = () => {
  const { currentPage, itemsPerPage, cells, searchQuery, setCurrentPage }:any = useStore();

  const totalItems = searchQuery ? cells.filter((cell:any) => cell.includes(searchQuery)).length : cells.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-600 text-white rounded-md disabled:opacity-50"
        style={{backgroundColor:"green",padding:"4px"}}
      >
        Previous
      </button>
      <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-600 text-white rounded-md disabled:opacity-50"
        style={{backgroundColor:"green",padding:"4px"}}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
