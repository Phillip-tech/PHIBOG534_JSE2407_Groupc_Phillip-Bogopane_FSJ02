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