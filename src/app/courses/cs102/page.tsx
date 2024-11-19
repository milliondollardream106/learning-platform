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
      { title: "What is computational Thinking?", sectionId: "what-is-computational-thinking" },
      { title: "Keys steps of computation Thinking?", sectionId: "keys-steps-of-computation-thinking" },
      { title: "How does this relate to Computer Science?", sectionId: "how-does-this-relate-to-computer-science" },
    ],
  },
];

const CS102 = () => {
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

  // Helper function to process content with markdown-like syntax
  const processContent = (content: string) => {
    // Split content into paragraphs
    const paragraphs = content.split("\n\n").map((paragraph, index) => {
      // Check if paragraph contains bullet points
      if (paragraph.includes("* ")) {
        const items = paragraph.split("* ").filter(Boolean);
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 mt-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 leading-loose text-lg tracking-wide mb-4">
          {paragraph.trim()}
        </p>
      );
    });

    return <div className="space-y-4">{paragraphs}</div>;
  };

  const renderSection = (id: string, title: string, content: string) => (
    <div className="space-y-12 mt-8 border border-gray-200 p-8 rounded-3xl">
      <section id={id}>
        <h2 className="text-2xl font-semibold mb-6">
          <div className="inline-block w-full">
            <h2 className="text-black pb-2">
              <span className="text-blue-600">{title.split(" ")[0]}</span>{" "}
              {title.split(" ").slice(1).join(" ")}
            </h2>
            <div className="h-1 bg-gray-200 w-full"></div>
          </div>
        </h2>
        {processContent(content)}
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
              {/* Rest of your existing JSX... */}
               {/* Course Header */}
               <div className="pt-24 mb-12 flex flex-col lg:flex-row">
                <div className="lg:pr-12 flex-[0.6]">
                  <span className="inline-block bg-blue-500 bg-opacity-25 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-lg mb-6">
                    CS102
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Text Content */}
                <div className="flex-[0.6]">
                  <h1 className="text-[32px] font-bold text-gray-900 mb-3">
                    Computational Thinking
                  </h1>
                  <p className="text-gray-600 text-lg">
                  Discover the fundamentals of how computers work, and explore the essential concepts that drive modern technology
                  </p>
                </div>

                {/* Image Content */}
                <div className="flex-[0.4]">
                  <Image
                    src="/courses/cs102/cs102.svg"
                    alt="Coding"
                    width={400}
                    height={400}
                    className="object-contain max-h-[calc(100%-20px)] p-4"
                    priority
                  />
                </div>
              </div>
              
              {renderSection(
                "what-is-computational-thinking",
                "What is computational thinking?",
                "Computational Thinking (CT) is a problem-solving approach that involves using concepts from computer science to tackle complex problems in a logical, structured way. It's not about programming or writing code specifically, but rather thinking like a computer scientist to break down problems and devise solutions that could potentially be implemented by a computer."
              )}

              {renderSection(
                "key-steps-of-computational-thinking",
                "Key Steps of Computer Science?",
                "The main purpose of computational thinking is to identify problems and solve them. This seems simple, but problems themselves can be quite complex and made up of different parts, each of which forms its own separate problem.\n\nThe complex nature of problems can make them seem to be overwhelming, but when you follow a few simple steps, you are able to break them down into manageable pieces. This is very effective because not only does it work for computational problems, but it also works for most problems you will face in life.\n\nThere are four key steps in this process:\n\n* Decomposition: Breaking a complex problem into smaller, more manageable parts.\n* Pattern Recognition: Identifying patterns or trends within problems.\n* Abstraction: Focusing on the essential details while ignoring irrelevant complexities.\n* Algorithm Design: Developing a step-by-step process to solve a problem or complete a task."
              )}

              {renderSection(
                "how-does-this-relate-to-computer-science",
                "How does this relate to Computer Science?",
                "Computational Thinking is a cornerstone of computer science. It's the foundation for writing efficient algorithms, designing software, and solving complex computing problems. The concepts of decomposition, pattern recognition, abstraction, and algorithm design are fundamental in programming, data analysis, artificial intelligence, and systems design.\n\nIn essence, CT equips individuals with the skills to think logically and systematically, just as a computer would process tasks. This makes it an essential skill set for computer scientists and developers when building software, analyzing data, or automating processes."
              )}

              <div className="mt-4 pt-12 flex justify-end">
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
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CS102;