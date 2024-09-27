import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRouter } from 'next/router';

export const metadata = {
  title: 'NextEcommerce',
  description: 'Your one-stop shop for everything',
  // Add additional meta tags as needed
  keywords: ['ecommerce', 'shop', 'nextjs'],
  openGraph: {
    type: 'website',
    url: 'https://www.nextecommerce.com',
    title: 'NextEcommerce',
    description: 'Your one-stop shop for everything',
    images: [
      {
        url: 'https://www.nextecommerce.com/logo.png',
        width: 800,
        height: 600,
        alt: 'NextEcommerce Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>{router.asPath === '/' ? metadata.title : router.query.name}</title>
        {/* ...other meta tags... */}
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex justify-between mb-4">
            {/* ...other content... */}
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}