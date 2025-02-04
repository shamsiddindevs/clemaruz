import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Card from "../components/Card";
import {useState} from "react";
import {setLoading} from "../store/loadingSlice";
import {FaArrowRight, FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Categories = () => {
  const loading = useSelector((state) => state?.loading);
  const categories = useSelector((state) => state?.categories);
  const dispatch = useDispatch();
  let {id} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const itemsPerPage = 8;

  const data = categories.filter((category) => category?.link === id);

  // Sort data based on selection
  const sortedData = [...data].sort((a, b) => {
    switch (sortBy) {
      case "popularity":
        return (b.popularity || 0) - (a.popularity || 0);
      case "priceAsc":
        return a.price?.split(" ")[0] - (b.price?.split(" ")[0] || 0);
      case "priceDesc":
        return (b.price?.split(" ")[0] || 0) - (a.price?.split(" ")[0] || 0);
      default:
        return 0;
    }
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    dispatch(setLoading(true));
    setCurrentPage(pageNumber);
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  if (loading) {
    return (
      <div className="container mt-40 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-40 flex justify-between flex-wrap gap-2.5 items-center mb-8">
        <h1 className="uppercase mb-0 text-sm">
          Отображение {indexOfFirstItem + 1}–
          {Math.min(indexOfLastItem, data.length)} из {data.length}
        </h1>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="px-4 py-2 border-2 border-gray-300 rounded text-gray-700 focus:outline-none focus:border-[#019edc] cursor-pointer text-sm ">
          <option value="default">Исходная сортировка</option>
          <option value="popularity">По популярности</option>
          <option value="priceAsc">По возрастанию цены</option>
          <option value="priceDesc">По убыванию цены</option>
        </select>
      </div>
      <div
        className={`container mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch`}>
        {currentItems?.map((category, index) => (
          <Card
            key={index}
            category={category}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="container grid grid-cols-1 lg:grid-cols-3  gap-2 mb-10">
          <div className="flex justify-start items-center">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className=" px-4 py-2 rounded border-gray-300 border-2 text-gray-500 hover:border-[#019edc] hover:text-[#019edc] flex items-center gap-1 transition-all text-sm">
                <FaChevronLeft className="text-xs" />
                Previous
              </button>
            )}
          </div>

          <div className="flex justify-center items-center gap-2.5 ">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-[#019edc] text-white"
                    : " hover:bg-gray-200 hover:text-gray-700"
                }`}>
                {index + 1}
              </button>
            ))}
          </div>

          <div className="flex justify-end items-center">
            {currentPage !== totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-4 py-2 rounded border-gray-300 border-2  text-gray-500  hover:border-[#019edc] hover:text-[#019edc]  flex items-center gap-1 transition-all text-sm`}>
                Next
                <FaChevronRight className="text-xs" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
