"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

const cs101Sections = [
  {
    id: "introduction",
    title: "Introduction",
    items: [
      { title: "What is Computer Science?", sectionId: "what-is-computer-science" },
      { title: "Why Learn Computer Science?", sectionId: "why-learn-computer-science" },
      { title: "How is This Course Organized?", sectionId: "how-is-this-course-organized" },
      { title: "What Happens if I Need Help?", sectionId: "what-happens-if-i-need-help" },
      { title: "Who is This Aimed For?", sectionId: "who-is-this-aimed-for" },
      { title: "What Do I Need to Get Started?", sectionId: "what-do-i-need-to-get-started" },
    ],
  },
];

const CS101 = () => {
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

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const renderSection = (id: string, title: string, content: string) => (
    <div className="space-y-12 mt-8 border border-gray-200 p-8 rounded-3xl">
      <section id={id}>
        <h2 className="text-2xl font-semibold mb-4">
          <div className="inline-block w-full">
            <h2 className="text-black pb-2">
              <span className="text-blue-600">{title.split(" ")[0]}</span>{" "}
              {title.split(" ").slice(1).join(" ")}
            </h2>
            <div className="h-1 bg-gray-200 w-full"></div>
          </div>
        </h2>
        <p className="text-gray-700 leading-loose text-lg tracking-wide">{content}</p>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          sections={cs101Sections}
          currentPage="introduction"
        />

        <div className="flex-1">
          <button
            onClick={toggleSidebar}
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
              <div className="pt-24 flex flex-col lg:flex-row">
                <div className="lg:pr-12 flex-[0.6]">
                  <span className="inline-block bg-blue-100 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg font-semibold text-lg mb-6">
                    CS101
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-[0.6]">
                  <h1 className="text-[32px] font-bold text-gray-900 mb-3">
                    Introduction to Computer Science
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Discover the fundamentals of how computers work, and explore the essential
                    concepts that drive modern technology.
                  </p>
                </div>
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

              {renderSection(
                "what-is-computer-science",
                "What is Computer Science?",
                "Computer science is the study of computers and computational systems. It involves understanding how computers work, programming them, and solving problems using algorithms and data structures. It spans areas like software development, AI, networks, and cybersecurity, making it a foundational skill in today’s tech-driven world."
              )}

              {renderSection(
                "why-learn-computer-science",
                "Why Learn Computer Science?",
                "Learning computer science equips you with problem-solving skills and opens up career opportunities. It empowers you to create technology and understand how the digital world operates, shaping the future through programming, AI, and more."
              )}

              {renderSection(
                "how-is-this-course-organized",
                "How is This Course Organized?",
                "This course starts with basic concepts like what computers are and how they work, gradually progressing to complex topics like programming and algorithms. Each lesson is interactive with exercises and projects."
              )}

              {renderSection(
                "what-happens-if-i-need-help",
                "What Happens if I Need Help?",
                "If you need help, you can access forums, guides, and instructor support. Whether you're stuck on a concept or need technical assistance, there's always someone to guide you."
              )}

              {renderSection(
                "what-do-i-need-to-get-started",
                "What Do I Need to Get Started?",
                "All you need is a computer with an internet connection and a willingness to learn! We guide you through software installations so you can dive into computer science confidently."
              )}

              <div className="mt-4 pt-12 flex justify-end">
                {/* <button className="border-2 border-gray-800 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center"> */}
                <button className="border-2 border-gray-800 bg-gray-500 hover:bg-blue-500 hover:border-blue-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
                  <p>Mark Complete</p>
                  <svg
                    className="pl-1 w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12l5 5L20 7" />
                  </svg>
                </button>
              </div>

              {/* <div>
                <button className="flex items-center border-2 border-blue-500  bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold py-2 px-4 rounded-full">
                  <p>Complete & Continue</p>
                  <svg className="pl-1 w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div> */}

            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CS101;
