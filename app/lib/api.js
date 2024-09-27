
const API_URL = 'https://next-ecommerce-api.vercel.app';

export async function getProducts({ page = 1, limit = 20, search = '', category = '', sort = '' }) {
  const skip = (page - 1) * limit;
  const queryParams = new URLSearchParams({
    skip: skip.toString(),
    limit: limit.toString()
  });

  if (search) {
    queryParams.append('search', search);
  }
  if (category) {
    queryParams.append('category', category);
  }
  if (sort) {
    const [sortField, sortOrder] = sort.split('_');
    queryParams.append('sortBy', sortField);
    queryParams.append('order', sortOrder);
  }

  const url = `${API_URL}/products?${queryParams.toString()}`;
  console.log('Fetching products from', url);

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch products. Status: ${res.status}`);
  }

  const products = await res.json();
  
  // Fetch total count in a separate request
  const countRes = await fetch(`${API_URL}/products/count?${queryParams.toString()}`, { cache: 'no-store' });
  const { count: totalCount } = await countRes.json();

  console.log(`Fetched ${products.length} products out of ${totalCount}`);

  return {
    products,
    total: totalCount,
    currentPage: page,
    totalPages: Math.ceil(totalCount / limit)
  };
}


export async function getProduct(id) {
  const singleProductURL = `${API_URL}/products/${id}`;
  console.log('Fetching product with id', id, 'from', singleProductURL);
 
  const res = await fetch(singleProductURL, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch product. Status: ${res.status}`);
  }
  const product = await res.json();
  console.log('Fetched product:', product);
 
  return product;
}

