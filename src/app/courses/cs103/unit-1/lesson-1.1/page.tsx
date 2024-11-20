// pages/courses/cs103/unit-1/lesson-1.2.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Sidebar from "../../../../../components/Sidebar";
import { LessonHeader } from "../../../../components/LessonHeader";
import { LessonSection } from "../../../../components/LessonSection";
import { lessonContent } from "../../../../../../content/cs103-1-1";

const Lesson_1_1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [shouldShift, setShouldShift] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShouldShift(window.innerWidth < 1400);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
          sections={lessonContent.sections}
          currentPage="introduction"
        />

        <div className="flex-1">
          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className={`fixed top-40 left-4 z-50 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ${
              isSidebarOpen ? "hidden" : "block"
            }`}
            aria-label="Open sidebar"
          >
            <Menu size={20} className="text-gray-800" />
          </button>

          <div
            className={`transition-all duration-300 ${
              shouldShift && isSidebarOpen ? "ml-64" : "ml-0"
            } ${shouldShift ? "" : "flex justify-center"}`}
          >
            <main className="w-full max-w-[1200px] p-8 md:p-16">
              <LessonHeader
                courseCode={lessonContent.courseCode}
                unit={lessonContent.unit}
                title={lessonContent.title}
                description={lessonContent.description}
                imagePath={lessonContent.imagePath}
              />

              {lessonContent.sections[0].items.map((item) => (
                <LessonSection
                  key={item.sectionId}
                  id={item.sectionId}
                  title={item.title}
                  content={item.content || ""}
                />
              ))}

              <div className="pt-8 flex justify-end">
                <Link href="/courses/cs103/unit-1/lesson-1.2">
                  <button className="flex items-center border-2 border-blue-500 bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold py-2 px-4 rounded-full">
                    <p>Complete & Continue</p>
                    <svg 
                      className="pl-1 w-6 h-6 text-blue-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson_1_1;