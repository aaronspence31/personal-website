import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I&apos;m Aaron Spence</h1>
          <p className="text-xl text-gray-600 mb-8">
            I&apos;m a developer passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/portfolio" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden" style={{ position: 'relative' }}>
            <Image
              src="/images/profile.jpg"
              alt="Aaron Spence"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage; 