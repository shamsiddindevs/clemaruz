
import { useSelector } from "react-redux";

const Result = ({ text }) => {
  console.log(text);

  const categories = useSelector((state) => state?.categories);
  const result = categories.filter((category) => category?.description?.toLowerCase()?.includes(text?.toLowerCase())).slice(0, 6);
  if (!text) return null;

  return (
    <>
      {text && (
        result?.map((item) => (
          <div key={item.id} className="flex items-center gap-10">
            <img src={item.image} className="w-[100px] h-[100px] object-fit" alt={item.title} />
            <p className="text-white font-semibold text-lg">{item.description}</p>
          </div>
        ))
      )}
      
    </>
  );
};

export default Result