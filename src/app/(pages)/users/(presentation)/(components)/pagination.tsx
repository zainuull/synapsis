import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const Pagination = ({
  pageNow,
  totalPage,
  setPage,
}: {
  pageNow: number;
  totalPage: number;
  setPage: Function;
}) => {
  function prevPage() {
    if (pageNow !== 1) {
      setPage(pageNow - 1);
    }
  }

  //to change current page
  function changeCurrentPage(id: number) {
    setPage(id);
  }

  //to next page
  function nextPage() {
    if (pageNow !== totalPage) {
      setPage(pageNow + 1);
    }
  }

  return (
    <div className="flex gap-x-2 items-center">
      <div className="bg-gray-200 rounded-lg flex items-center px-6 py-2">
        {pageNow === 1 ? (
          <span className="text-gray-500 cursor-not-allowed">
            <BsChevronDoubleLeft />
          </span>
        ) : (
          <span onClick={prevPage} className="cursor-pointer">
            <BsChevronDoubleLeft />
          </span>
        )}
      </div>

      <div className="bg-gray-200 rounded-lg flex items-center gap-x-2">
        {Array.from({ length: totalPage }, (_, index) => (
          <span
            onClick={() => changeCurrentPage(index + 1)}
            key={index + 1}
            className={`px-3 py-1 cursor-pointer rounded-full text-sm ${
              index + 1 === pageNow ? 'bg-blue-700 text-white' : 'text-gray-600 hover:text-black'
            }`}>
            {index + 1}
          </span>
        ))}
      </div>

      <div className="bg-gray-200 rounded-lg flex items-center px-6 py-2">
        {pageNow >= totalPage ? (
          <span className="cursor-not-allowed">
            <BsChevronDoubleRight />
          </span>
        ) : (
          <span onClick={nextPage} className="cursor-pointer">
            <BsChevronDoubleRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
