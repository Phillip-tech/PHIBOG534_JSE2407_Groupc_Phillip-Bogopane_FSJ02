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
        {sortedReviews.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-center mb-8">Customer Reviews</h2>
            <div className="flex justify-center mb-4">
              <div className="relative inline-block">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Default</option>
                  <option value="rating-asc">Rating (Ascending)</option>
                  <option value="rating-desc">Rating (Descending)</option>
                  <option value="date-asc">Date (Ascending)</option>
                  <option value="date-desc">Date (Descending)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707a.5.5 0 0 1 .707-.707V11h5v2h-5v1.05a.5.5 0 0 1-.707-.707l-.707-.707a.5.5 0 0 1 0-.707zm0-6l.707.707a.5.5 0 0 1-.707-.707L9 4.293l-.707-.707a.5.5 0 0 1 0-.707.5.5 0 0 1 .707-.707l.707.707a.5.5 0 0 1 0 .707zm0 6l.707.707a.5.5 0 0 1-.707-.707L9 10.293l-.707-.707a.5.5 0 0 1 0-.707.5.5 0 0 1 .707-.707l.707.707a.5.5 0 0 1 0 .707z"/></svg>
                </div>
              </div>
            </div>