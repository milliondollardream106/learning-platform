"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from 'lucide-react'; // Added ChevronDown
import { auth, signOut } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [timer, setTimer] = useState<any>(null);

  const LOGOUTTIME = 60 * 60 * 1000;

  // Course categories data
  const courseCategories = {
    schools: [
      { name: "Programming and Computer Science", href: "/courses/" },
      { name: "Coding and challenges", href: "/courses/coding-challenges" },
     
    ],
    popular: [
      { name: "Object-Oriented Programming", href: "/courses/cs202" },
      { name: "Data Structures and Algorithmsg", href: "/courses/cs203" },
      
    ],
    introductory: [
      { name: "Introduction to Computer Science", href: "/courses/cs101" },
      { name: "Intro Digital Logic and Computer Architecture", href: "/courses/cs103" },
    ],
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        const logoutTimer = setTimeout(() => {
          signOut(auth);
        }, LOGOUTTIME);
        setTimer(logoutTimer);
        return () => clearTimeout(logoutTimer);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    if (user) {
      signOut(auth);
      clearTimeout(timer);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.courses-dropdown')) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
            
            {/* Courses Dropdown */}
            <div className="relative courses-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCoursesOpen(!isCoursesOpen);
                }}
                className="flex items-center text-gray-600 hover:text-blue-500 transition-colors font-medium"
              >
                Courses
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isCoursesOpen && (
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6 grid grid-cols-3 gap-8 align-center">
                  {/* Schools Section */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Schools</h3>
                    <ul className="space-y-3">
                      {courseCategories.schools.map((course) => (
                        <li key={course.href}>
                          <Link 
                            href={course.href}
                            className="text-gray-600 hover:text-blue-500 transition-colors block"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Courses */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Popular</h3>
                    <ul className="space-y-3">
                      {courseCategories.popular.map((course) => (
                        <li key={course.href}>
                          <Link 
                            href={course.href}
                            className="text-gray-600 hover:text-blue-500 transition-colors block"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Intro Courses */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Intro Courses</h3>
                    <ul className="space-y-3">
                      {courseCategories.introductory.map((course) => (
                        <li key={course.href}>
                          <Link 
                            href={course.href}
                            className="text-gray-600 hover:text-blue-500 transition-colors block"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

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

      {/* Mobile Menu with Courses Dropdown */}
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
            
            {/* Mobile Courses Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              >
                Courses
                <ChevronDown className={`h-4 w-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCoursesOpen && (
                <div className="pl-6 space-y-4 bg-gray-50 py-4">
                  {Object.entries(courseCategories).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="font-semibold text-gray-900 px-3">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <ul className="space-y-1">
                        {items.map((course) => (
                          <li key={course.href}>
                            <Link
                              href={course.href}
                              className="block px-3 py-1 text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                            >
                              {course.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Auth Buttons */}
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
                  <Link href="/signup" className="block w-full">
                    <button className="w-full px-4 py-2 text-blue-500 hover:text-blue-600 transition-colors font-medium">
                      Log in
                    </button>
                  </Link>
                </div>
                <div className="mt-3 px-5">
                  <Link href="/signup" className="block w-full">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                      Sign up
                    </button>
                  </Link>
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