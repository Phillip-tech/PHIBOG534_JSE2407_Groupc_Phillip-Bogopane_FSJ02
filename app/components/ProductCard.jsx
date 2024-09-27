import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';


const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // The index of the current selected image.
  const [imageError, setImageError] = useState(false); // Indicates whether an error occurred while loading the image.

   // Handle the error when loading the image.
   const handleImageError = () => {
    setImageError(true);
  };

  // Navigate to the next image.
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image.
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="relative h-64">
        {product.images && product.images.length > 0 && !imageError ? (
          <>
            <Image
              src={product.images[currentImageIndex]}
              alt={`${product.title} - Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-300 hover:opacity-75"
              onError={handleImageError}
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {product.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
          