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
