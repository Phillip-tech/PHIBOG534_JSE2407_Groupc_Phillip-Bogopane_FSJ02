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
