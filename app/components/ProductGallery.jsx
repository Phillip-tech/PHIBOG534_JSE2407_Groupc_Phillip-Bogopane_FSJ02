'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div
        className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={images[currentIndex]}
          alt="Product"
          width={800} 
          height={600}
          objectFit="contain"
          className="transition-opacity duration-300"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </button>
        ))}
      </div>