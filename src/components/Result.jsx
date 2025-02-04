import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Result = ({ text }) => {
  const categories = useSelector((state) => state?.categories);

  // Filter categories based on search text
  const filteredCategories = categories.filter((category) => {
    if (!text) return false;
    
    const searchText = text.toLowerCase();
    return (
      category.title.toLowerCase().includes(searchText) ||
      category.description.toLowerCase().includes(searchText)
    );
  });

  if (!text) {
    return (
      <div className="text-gray-400 text-lg">
        Введите поисковый запрос...
      </div>
    );
  }

  if (filteredCategories.length === 0) {
    return (
      <div className="text-gray-400 text-lg">
        По запросу "{text}" ничего не найдено
      </div>
    );
  }

  return (
    <>
      {filteredCategories.map((category, index) => (
        <Link
          key={index}
          to={`/product/${category.singleLink}`}
          className="bg-[#222222] hover:bg-[#2a2a2a] transition-all p-4 rounded-lg flex items-center gap-4 group"
        >
          <div className="w-20 h-20 overflow-hidden rounded-lg">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg mb-1">{category.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {category.description}
            </p>
            {category.price && (
              <p className="text-[#019edc] mt-2 font-medium">
                {category.price}
              </p>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Result;