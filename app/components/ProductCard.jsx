import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';


const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // The index of the current selected image.
  const [imageError, setImageError] = useState(false); // Indicates whether an error occurred while loading the image.