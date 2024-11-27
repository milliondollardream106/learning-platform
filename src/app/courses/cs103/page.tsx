"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PremiumAccess } from '@/components/PremiumAccess';


interface Unit {
  title: string;
  number: string;
  lessons: {
    id: string;
    title: string;
  }[];
}

const units: Unit[] = [
  {
    title: "What is Computer Architecture?",
    number: "Unit 1",
    lessons: [
      { id: "1.1", title: "Overview of Computer Architecture" },
      { id: "1.2", title: "The Von Neumann Architecture" },
    ],
  },
  {
    title: "Digital Logic and Data Representation",
    number: "Unit 2",
    lessons: [
      { id: "2.1", title: "Overview of Logic and Data Representation" },
      { id: "2.2", title: "Boolean Algebra" },
      { id: "2.3", title: "Logic Gates" },
      { id: "2.4", title: "Data Representation in Computers" },
    ],
  },
  {
    title: "Memory System Design",
    number: "Unit 3",
    lessons: [
      { id: "3.1", title: "Intro to the Memory Unit" },
      { id: "3.2", title: "RAM structure: Cells and Chips" },
      { id: "3.3", title: "The cache" },
      { id: "3.4", title: "Virtual memory" },
    ],
  },
  {
    title: "Input/Output (I/O) Systems",
    number: "Unit 4",
    lessons: [
      { id: "4.1", title: "Intro to I/O systems" },
      { id: "4.2", title: "Types of IO" },
      { id: "4.3", title: "Data Transfer Methods" },
      { id: "4.4", title: "Interface and Controllers" },
      { id: "4.5", title: "Interrupts and Polling" },
      { id: "4.6", title: "I/O Software Layers" },
      { id: "4.7", title: "Performance Considerations in I/O Systems" },
    ],
  },
];

const CoursePage = () => {
  return (
    <PremiumAccess>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Course Header */}
        <div className="pt-24 flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-semibold text-lg mb-6">
              CS103
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Introduction to Digital and Computer Architecture
            </h1>
            <p className="text-xl text-gray-600">
              Discover the fundamentals of how computers work, and explore
              the essential concepts that drive modern technology
            </p>
          </div>
          <div className="lg:w-1/3">
            <Image
              src="/courses/cs103/cs103.svg"
              alt="Computer Architecture"
              width={400}
              height={300}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-8">
          {units.map((unit, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl  text-black font-semibold">
                    <span className="text-blue-600">{unit.title.split(" ")[0]}</span>{" "}
                    {unit.title.split(" ").slice(1).join(" ")}
                  </h2>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-lg font-medium">
                  {unit.number}
                </span>
              </div>
              <div className="space-y-3">
                {unit.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/cs103/unit-${index + 1}/lesson-${lesson.id}`}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-blue-600 font-medium w-8">{lesson.id}</span>
                    <span className="text-gray-700">{lesson.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete & Continue Button */}
        <div className="flex justify-end mt-8">
          <Link href="/courses/cs103/unit-1/lesson-1.1">
            <button className="flex items-center border-2 border-blue-500  bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold py-2 px-4 rounded-full justify-end">
                <p>Complete && Continue</p>
                <svg className="pl-1 w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </PremiumAccess>
  );
};

export default CoursePage;