

"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

const cs101Sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    items: [
      {
        title: 'What is Computer Science?',
      },
      {
        title: 'Why Learn Computer Science?',
      },
      {
        title: 'How is This Organized?',
      },
      {
        title: 'Who is This Aimed For?',
      }
    ]
  },
];

const CSIntroPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} flex-1`}>
          <button
            onClick={toggleSidebar}
            className={`fixed top-40 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 ${isSidebarOpen ? 'hidden' : 'block'}`}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          
          <main className="container max-w-3xl mx-auto p-24">
            <div className="mb-12 flex">
              <div className="ml-8">
                <h1 className="text-3xl font-bold mb-4 pt-8">
                  Introduction to Computer Science
                </h1>
                <p className="text-gray-600">
                  Discover the fundamentals of how computers work, and explore
                  the essential concepts that drive modern technology
                </p>
              </div>
              <Image 
                src="/courses/cs101/intro.svg" 
                alt="Coding" 
                className="mt-8"  
                width={500} 
                height={500}
              />
            </div>


            
          </main>
        </div>
      </div>
      
    </div>
  );
};

export default CSIntroPage;