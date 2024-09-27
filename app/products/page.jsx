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