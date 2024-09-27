'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortDropdown from '../components/SortDropdown';
import ResetButton from '../components/ResetButton';
import { getProducts } from '../lib/api';

const ITEMS_PER_PAGE = 20;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { products, total } = await getProducts({
          page,
          limit: ITEMS_PER_PAGE,
          search,
          category,
          sort
        });
        setProducts(products);
        setTotalProducts(total);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(`Failed to load products. Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page, search, category, sort]);

  const updateParams = (updates) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/products?${params.toString()}`);
  };


  const handleSearch = (searchTerm) => {
    updateParams({ search: searchTerm, page: '1' });
  };

  const handleCategoryChange = (selectedCategory) => {
    updateParams({ category: selectedCategory, page: '1' });
  };

  const handleSortChange = (sortOption) => {
    updateParams({ sort: sortOption, page: '1' });
  };

  const handleReset = () => {
    router.push('/products');
  };