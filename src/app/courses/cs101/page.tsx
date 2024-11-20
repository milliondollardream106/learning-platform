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
                "Computer Science is a systematic study of computational systems and the fundamental principles that govern them. This field encompasses the theoretical foundations of information and computation, along with practical techniques for their implementation and application in computer systems. At its core, Computer Science explores how data is processed, stored, and transmitted through computational devices. The discipline extends beyond mere programming to include algorithm analysis, artificial intelligence, data structures, computer architecture, and software engineering methodologies."
              )}

              {renderSection(
                "why-learn-computer-science",
                "Why Learn Computer Science?",
                "Computer Science provides essential knowledge and skills fundamental to modern technological advancement. This field develops systematic problem-solving approaches applicable across various domains. In today's digital era, understanding Computer Science principles enables you to comprehend how technology shapes our world and influences innovation. The analytical thinking and technical skills acquired through Computer Science education prepare you for careers in software development, systems analysis, artificial intelligence research, and numerous other technical fields. Moreover, these skills are increasingly valuable across all professional sectors as technology continues to integrate into every aspect of business and research."
              )}

              {renderSection(
                "how-is-this-course-organized",
                "How is This Course Organized?",
                "This course follows a structured progression through fundamental Computer Science concepts. Beginning with core computational principles and computer architecture, the curriculum advances systematically through programming fundamentals, data structures, and algorithmic thinking. Each unit builds upon previous knowledge, creating a comprehensive understanding of computer systems and software development. The course integrates theoretical concepts with practical applications, providing hands-on programming experience and problem-solving opportunities. Regular assessments and programming projects reinforce learning objectives and develop practical skills essential for advanced study in Computer Science."
              )}

              {renderSection(
                "what-happens-if-i-need-help",
                "What Happens if I Need Help?",
                "The course provides comprehensive academic support through multiple channels. Regular office hours offer direct interaction with instructors for conceptual clarification and technical guidance. The online learning platform includes detailed documentation, practice exercises, and supplementary materials. Teaching assistants provide additional support during laboratory sessions and programming assignments. Students also have access to peer discussion forums for collaborative learning and problem-solving. These resources ensure that you can receive appropriate assistance while developing independent problem-solving skills."
              )}


              {renderSection(
                "who-is-this-aimed-for",
                "Who is This Aimed For?",
                "The course provides comprehensive academic support through multiple channels. Regular office hours offer direct interaction with instructors for conceptual clarification and technical guidance. The online learning platform includes detailed documentation, practice exercises, and supplementary materials. Teaching assistants provide additional support during laboratory sessions and programming assignments. Students also have access to peer discussion forums for collaborative learning and problem-solving. These resources ensure that you can receive appropriate assistance while developing independent problem-solving skills."
              )}

              {renderSection(
                "what-do-i-need-to-get-started",
                "What do I Need to Get Started?",
                "To begin, you'll need a reliable internet connection. This will enable you to access the necessary resources and tools for learning computer science."
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
