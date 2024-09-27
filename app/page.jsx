import Link from 'next/link'; // Importing the Link component from the 'next/link' module

export default function Home() {
  return (
    <div className="text-center"> {/* Container with text alignment set to center */}
      <h1 className="text-4xl font-bold mb-4">Welcome to NextEcommerce</h1> {/* Heading with specific styling */}
      <p className="mb-4">Discover our amazing products!</p> {/* Paragraph with margin bottom */}
      <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> {/* Link component with specific styles */}
        Shop Now
      </Link>
    </div>
  );
}