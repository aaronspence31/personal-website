import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              &copy; {currentYear} Aaron Spence. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/aaronspence31" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/aaronspence31/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 