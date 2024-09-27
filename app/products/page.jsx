"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { getProduct } from '../../lib/api';
import ProductGallery from '../../components/ProductGallery';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { Star, ShoppingCart, Facebook, Instagram, Twitter, Phone, Globe } from 'lucide-react';
import dynamic from 'next/dynamic';

const GoBackButton = dynamic(() => import('../../components/GoBackButton'), { ssr: false });


export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('date');
  const [sortedReviews, setSortedReviews] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProduct(params.id);
        setProduct(fetchedProduct);
        setSortedReviews(fetchedProduct.reviews);
      } catch (err) {
        setError('Failed to load product. Please try again later.');
        console.error('Error fetching product:', err);
      }
    }
    fetchProduct();
  }, [params.id]);
  useEffect(() => {
    if (product && product.reviews) {
      let sorted = [...product.reviews];
      switch (sortOption) {
        case 'rating-asc':
          sorted = sorted.sort((a, b) => a.rating - b.rating);
          break;
        case 'rating-desc':
          sorted = sorted.sort((a, b) => b.rating - a.rating);
          break;
        case 'date-asc':
          sorted = sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        case 'date-desc':
          sorted = sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        default:
          sorted = sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
      }
      setSortedReviews(sorted);
    }
  }, [sortOption, product]);

  if (error) return <ErrorMessage message={error} />;
  if (!product) return <Loading />;

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <GoBackButton />
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProductGallery images={product.images} />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center mb-4">
              <p className="text-2xl font-semibold mr-2">${product.price.toFixed(2)}</p>
              {product.discountPercentage > 0 && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span>{averageRating.toFixed(1)}/5 ({product.reviews.length} reviews)</span>
            </div>
            <p className="mb-4">{product.description}</p>
            <p className="mb-2">Category: {product.category}</p>
            <p className="mb-2">Brand: {product.brand}</p>
            <p className="mb-4">Stock: {product.stock} available</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>