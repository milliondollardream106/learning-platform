"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react'; // Import icons for mobile menu
import { auth, signOut } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Store user state
  const [timer, setTimer] = useState<any>(null); // Store timeout ID

  const LOGOUTTIME = 60 * 60 * 1000; // 30 minutes

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state when auth state changes
      if (user) {
        // Automatically sign out after 1 hour (3600000 ms)
        const logoutTimer = setTimeout(() => {
          signOut(auth);
        }, LOGOUTTIME); // You can change this time
        setTimer(logoutTimer); // Store timer ID to clear it later

        return () => clearTimeout(logoutTimer); // Clean up timer on unmount
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    if (user) {
      signOut(auth);
      clearTimeout(timer); // Clear the timeout when the user manually signs out
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={140}
                height={80}
                className="w-auto h-8"
                priority
              />
            </Link>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#4F5158] hover:text-blue-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
              About
            </Link>
            <Link href="/courses" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
              Courses
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
              Contact
            </Link>
          </div>
          {/* Auth Buttons / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center">
                  <Image
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  {/* <p className="ml-2 text-gray-600">{user.displayName || 'User'}</p> */}
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
                  >
                  Log out
                </button>

                
              </>
            ) : (
              <>
                <Link href="/signup">
                  <button className="px-4 py-2 text-blue-500 hover:text-blue-600 transition-colors font-medium">
                    Log in
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user ? (
              <div className="flex items-center px-5">
                <button
                  onClick={handleSignOut}
                  className="block w-full px-4 py-2 text-red-500 hover:text-red-600 transition-colors font-medium"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center px-5">
                  <button className="block w-full px-4 py-2 text-blue-500 hover:text-blue-600 transition-colors font-medium">
                    Log in
                  </button>
                </div>
                <div className="mt-3 px-5">
                  <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Sign up
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
