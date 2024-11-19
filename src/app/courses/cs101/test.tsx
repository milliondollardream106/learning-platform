// app/courses/cs101/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

const cs101Sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      items: [
        { title: 'What is Computer Science?', sectionId: 'what-is-computer-science' },
        { title: 'Why Learn Computer Science?', sectionId: 'why-learn-computer-science' },
        { title: 'How is This Organized?', sectionId: 'how-is-this-organized' },
        { title: 'Who is This Aimed For?', sectionId: 'who-is-this-aimed-for' }
      ]
    },
  ];

  const CS101 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [shouldShift, setShouldShift] = useState(false);
  
    useEffect(() => {
      const checkWidth = () => {
        setShouldShift(window.innerWidth < 1400);
    };

    // Initial check
    checkWidth();

    // Add resize listener
    window.addEventListener('resize', checkWidth);

    // Cleanup
    return () => window.removeEventListener('resize', checkWidth);
}, []);

const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          sections={cs101Sections}
          currentPage="introduction"
        />
        
        {/* Main content wrapper */}
        <div className="flex-1">
          {/* Toggle button */}
          <button
            onClick={toggleSidebar}
            className={`fixed top-40 left-4 z-50 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ${
              isSidebarOpen ? 'hidden' : 'block'
            }`}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          
          {/* Content container */}
          <div 
            className={`
              transition-all duration-300 
              ${shouldShift && isSidebarOpen ? 'ml-64' : 'ml-0'}
              ${shouldShift ? '' : 'flex justify-center'}
            `}
          >
            {/* Main content */}
            <main className="w-full max-w-[1200px] p-8 md:p-16">
              {/* Course Header */}
              <div className="pt-24 mb-12 flex flex-col lg:flex-row">
                <div className="lg:pr-12 flex-[0.6]">
                  <span className="inline-block bg-blue-500 bg-opacity-25 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-lg mb-6">
                    CS101
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Text Content */}
                <div className="flex-[0.6]">
                  <h1 className="text-[32px] font-bold text-gray-900 mb-3">
                    Introduction to Computer Science
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Discover the fundamentals of how computers work and explore the essential concepts that drive modern technology. From understanding how software and hardware interact to the principles behind programming languages, this course lays the foundation for building a strong knowledge of computing.
                  </p>
                </div>

                {/* Image Content */}
                <div className="flex-[0.4]">
                  <Image
                    src="/courses/cs101/cs101.svg"
                    alt="Coding"
                    width={400}
                    height={400}
                    className="object-contain max-h-[calc(100%-20px)] p-4"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-12 mt-16">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    <div className="inline-block w-full">
                      <h2 className="text-black pb-2">
                        <span className="text-blue-600">What</span> is Computer Science?
                      </h2>
                      <div className="h-1 bg-gray-200 w-full"></div>
                    </div>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Computer science is the study of computers and computational systems. It is the study and
                    design of algorithms, computation systems, and information systems in both the theory and
                    practice. It involves understanding how computers work, how to program them, and how to solve
                    problems using algorithms and data structures.
                  </p>
                </section>
              </div>


              <div className="space-y-12 mt-16">
                <section id="what-is-computer-science">
                  <h2 className="text-2xl font-semibold mb-4">
                    <div className="inline-block w-full">
                      <h2 className="text-black pb-2">
                        <span className="text-blue-600">Why Learn Computer Science?</span> is Computer Science?
                      </h2>
                      <div className="h-1 bg-gray-200 w-full"></div>
                    </div>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Computer science is the study of computers and computational systems. It is the study and
                    design of algorithms, computation systems, and information systems in both the theory and
                    practice. It involves understanding how computers work, how to program them, and how to solve
                    problems using algorithms and data structures.
                  </p>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CS101;