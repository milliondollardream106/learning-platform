
// root/components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { auth } from '@/config/firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User 
} from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleAuth = async () => {
    try {
      if (!user) {
        const provider = new GoogleAuthProvider();
        // Log the auth state
        console.log('Initiating sign in...');
        
        // Configure Google sign-in
        provider.setCustomParameters({
          prompt: 'select_account'
        });
        
        const result = await signInWithPopup(auth, provider);
        console.log('Sign in successful:', result.user.email);
      } else {
        await signOut(auth);
        console.log('Sign out successful');
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      
      // Detailed error handling
      switch (error.code) {
        case 'auth/configuration-not-found':
          console.error('Firebase configuration error. Check Firebase Console setup.');
          alert('Authentication system is not properly configured. Please contact support.');
          break;
        case 'auth/popup-blocked':
          alert('Please enable popups for this website to sign in.');
          break;
        case 'auth/popup-closed-by-user':
          console.log('Sign-in popup closed by user.');
          break;
        case 'auth/cancelled-popup-request':
          console.log('Previous sign-in popup request cancelled.');
          break;
        case 'auth/unauthorized-domain':
          console.error('Domain not authorized. Check Firebase Console Authorized Domains.');
          alert('This domain is not authorized for sign-in. Please contact support.');
          break;
        default:
          console.error('Unhandled auth error:', error);
          alert('An error occurred during authentication. Please try again.');
      }
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

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Image 
                    src={user.photoURL || '/default-avatar.png'}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-gray-700">{user.displayName}</span>
                </div>
                <button 
                  onClick={handleAuth}
                  className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={handleAuth} 
                  className="px-4 py-2 text-blue-500 hover:text-blue-600 transition-colors font-medium"
                >
                  Log in
                </button>
                <button 
                  onClick={handleAuth}
                  className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Sign up
                </button>
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
              <div className="px-5 space-y-3">
                <div className="flex items-center space-x-2">
                  <Image 
                    src={user.photoURL || '/default-avatar.png'}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-gray-700">{user.displayName}</span>
                </div>
                <button 
                  onClick={handleAuth}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center px-5">
                  <button 
                    onClick={handleAuth}
                    className="block w-full px-4 py-2 text-blue-500 hover:text-blue-600 transition-colors font-medium"
                  >
                    Log in
                  </button>
                </div>
                <div className="mt-3 px-5">
                  <button 
                    onClick={handleAuth}
                    className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;