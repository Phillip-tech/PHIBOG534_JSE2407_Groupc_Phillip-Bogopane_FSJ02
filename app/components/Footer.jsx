
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto py-6 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} NextEcommerce. All rights reserved.</p>
        <div className="mt-4 flex justify-center">
          {/* Social media links or other footer content */}
          <a href="https://twitter.com" className="text-blue-500 hover:underline mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.94 10.94 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 0 4.48 4.48 0 0 0-7.86 0A10.94 10.94 0 0 1 3 3c0 6.7 5.3 12 12 12s12-5.3 12-12zM9 19V13H4.2C3.5 13 3 13.5 3 14.5V17H2V14.5C2 13.12 2.5 11.5 3.2 11.5H7.8ZM3 18.9V21H7.8V18.9C7.8 18.4 7.3 18 6.8 18C6.3 18 5.8 18.4 5.8 18.9V21H3V18.9ZM18 18.9V21H20.2V18.9C20.2 18.4 19.7 18 19.2 18C18.7 18 18.2 18.4 18 18.9V21H18V18.9ZM13 21V13H10V21H13ZM21 21H18V13H21V21ZM18 3V6H21V3H18Z" />
            </svg>
          </a>
          <a href="https://facebook.com" className="text-blue-500 hover:underline mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 21V13H14V21H18ZM7 21V13H3V21H7ZM21 13C21 11.93 20.93 10.5 20 10.5C19.07 10.5 18 11.93 18 13V21H21V13Z" />
              <path d="M18 10.5C18 9.12 19.07 7.5 20 7.5C20.93 7.5 22 9.12 22 10.5V13H18V10.5Z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-blue-500 hover:underline mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.8 2H4.2C3.5 2 3 2.5 3 3V6H2V3C2 2.4 2.5 2 3.2 2H7.8ZM3 18.9V21H7.8V18.9C7.8 18.4 7.3 18 6.8 18C6.3 18 5.8 18.4 5.8 18.9V21H3V18.9ZM18 18.9V21H20.2V18.9C20.2 18.4 19.7 18 19.2 18C18.7 18 18.2 18.4 18 18.9V21H18V18.9ZM13 21V13H10V21H13ZM21 21H18V13H21V21ZM18 3V6H21V3H18Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;