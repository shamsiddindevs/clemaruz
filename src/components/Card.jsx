import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({category}) => {
  function handleClick() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
  return (
    <>
      <div className="mb-2 flex flex-col items-start relative">
        <Link
          to={`product/${category?.id}`}
          onClick={handleClick}>
          <img
            src={category?.image}
            alt={category?.title}
            className={`w-full mb-5 h-auto rounded-2xl}`}
          />
        </Link>

        <div className="mb-3 font-medium text-xl text-gray-700">
          {category?.description}
        </div>

        <div className="mb-2">
          <del className="text-gray-500 text-xs ml-2">{category?.oldPrice}</del>
        </div>

        <span
          className={`mb-2 font-semibold text-xs uppercase font-normal`}>
          {category?.title}
        </span>
       
          <button className="mt-auto inline-block px-6 py-3 bg-[#019edc] text-white gap-1 transition-all text-sm">
          Подробнее
          </button>
      
      </div>
    </>
  );
};

Card.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string,
    isNew: PropTypes.bool,
    catalog: PropTypes.string,
    type: PropTypes.string,
    count: PropTypes.number,
  }),
  link: PropTypes.string,
};

export default Card;
