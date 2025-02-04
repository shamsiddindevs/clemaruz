import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const ProductSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images?.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer z-50"
            onClick={() => setIsFullscreen(false)}
          >
            <MdFullscreenExit className="text-gray-800 w-6 h-6" />
          </button>
          <img
            src={images?.[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            className="max-h-screen max-w-full object-contain"
          />
          <div
            className={`transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors cursor-pointer"
            >
              <FaChevronLeft className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors cursor-pointer"
            >
              <FaChevronRight className="text-gray-800" />
            </button>
          </div>
        </div>
      )}

      <div
        className="relative max-w-2xl mx-auto"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Main Image */}
        <div className="relative h-[500px] w-full">
          <img
            src={images?.[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsFullscreen(true)}
          >
            <MdFullscreen className="text-gray-800 w-6 h-6" />
          </button>
          {/* Navigation Arrows */}
          <div
            className={`transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors cursor-pointer "
            >
              <FaChevronLeft className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors cursor-pointer "
            >
              <FaChevronRight className="text-gray-800" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 mt-4">
          {images?.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-20 h-20 border-2 cursor-pointer ${
                index === currentImageIndex
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
