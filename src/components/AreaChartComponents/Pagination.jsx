const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span>Page {page}</span>

      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-4 py-2 bg-gray-700 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
