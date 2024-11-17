// app/not-found.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, ArrowLeftIcon } from 'lucide-react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-gray-200 animate-pulse">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-bounce">
              404
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track!
        </p>

        {/* Helpful Links */}
        <div className="space-y-4">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go Back
          </button>

          {/* Home Link */}
          <Link 
            href="/"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <HomeIcon className="w-4 h-4" />
            Back to Homepage
          </Link>

          {/* Search Suggestion */}
          {/* <div className="relative mt-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200" />
            <Link 
              href="/search"
              className="relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-200"
            >
              <SearchIcon className="w-4 h-4" />
              Search for content
            </Link>
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/courses"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Courses
            </Link>
            <Link 
              href="/about"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Contact
            </Link>
            <Link 
              href="/help"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Help Center
            </Link>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-12 text-sm text-gray-500">
          Need help? Contact our support team at{' '}
          <a 
            href="mailto:support@code2career.com"
            className="text-blue-600 hover:underline"
          >
            support@code2career.com
          </a>
        </div>
      </div>
    </div>
  );
}