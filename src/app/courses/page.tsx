// src/app/courses/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import courseData from './courseData.json';
import { Clock, ChevronRight } from 'lucide-react';
import LazyLoad from 'react-lazy-load';


// Types
type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  level: string;
  duration: string;
  prerequisites: string[];
};

type CourseCategory = {
  title: string;
  courses: Course[];
};

type CourseCategories = {
  introCS: CourseCategory;
  coreProgramming: CourseCategory;
  coreMath: CourseCategory;
  coreSystems: CourseCategory;
  coreTheory: CourseCategory;
  coreApplications: CourseCategory;
  advancedCS: CourseCategory;
};

type CourseData = {
  courseCategories: CourseCategories;
};

type CourseTab = {
  key: keyof CourseCategories;
  label: string;
};

// Data
const tabs: CourseTab[] = [
  { key: 'introCS', label: 'Intro CS' },
  { key: 'coreProgramming', label: 'Core Programming' },
  { key: 'coreMath', label: 'Core Mathematics' },
  { key: 'coreSystems', label: 'Core Systems' },
  { key: 'coreTheory', label: 'Core Theory' },
  { key: 'coreApplications', label: 'Core Applications' },
  { key: 'advancedCS', label: 'Advanced CS' },
];

// Course Card Component
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group border-2 border-gray-200 flex flex-col">
      <div className="p-3 aspect-video relative w-full">
      <Image
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover rounded-lg"
          width={400}
          height={225}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHR4eIR0jIysdISMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {course.badge && (
          <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {course.badge}
          </div>
        )}
      </div>

      <div className=" px-3 pb-3 pt-2 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-50 text-[#1A73E8] px-3 py-2 rounded text-xs font-bold">
            {course.id}
          </span>
          <span className="bg-purple-50 text-purple-600 px-3 py-2 rounded text-xs font-bold">
            {course.level}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors">
          {course.title}
        </h3>

        <div className="relative flex-grow">
          <p className={`text-gray-600 text-sm ${isExpanded ? '' : 'line-clamp-2'}`}>
            {course.description}
          </p>
          {!isExpanded && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-blue-600 text-sm mt-1 hover:text-blue-700 focus:outline-none"
            >
              Read more
            </button>
          )}
          
          {isExpanded && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Prerequisites:</h4>
              {course.prerequisites.length > 0 ? (
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {course.prerequisites.map((prereq) => (
                    <li key={prereq}>{prereq}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600">No prerequisites required</p>
              )}
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-blue-600 text-sm mt-2 hover:text-blue-700 focus:outline-none"
              >
                Show less
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
        <div className="flex items-center text-gray-500 px-3 pb-3">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{course.duration}</span>
        </div>

        <a 
          href={`/courses/${course.id.toLowerCase()}`} 
          className="text-blue-600 hover:text-blue-700 flex items-center group pr-3 pb-3"
        >
          <span className="text-sm font-medium">View Course</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

// Main Component
const CoursesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof CourseCategories>(tabs[0].key);
  const typedCourseData = courseData as CourseData;
  
  // Get active courses based on selected tab
  const activeCourses = typedCourseData.courseCategories[activeTab]?.courses || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className=" pb-12 bg-white pt-24">
        <div className="container max-w-[1500px] mx-auto px-4 px-8 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
                Programming and{' '}
                <span className="block">
                  Computer <span className="text-blue-600">Science</span>
                </span>
              </h1>
              <p className="text-gray-600 text-lg w-full pr-16">
                Programming is a critical skill in today's digital economy, and there is a
                shortage of qualified developers. We offer online computer programming
                courses in development basics, iOS, Android, Java, JavaScript, C++,
                React, Python, front-end development, and full-stack development.
              </p>
            </div>
            {/* Image */}
            <div className="pt-24">
              <Image
                src="/courses-img.svg"
                alt="Courses Image"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Navigation */}
      <div className="sticky top-0 bg-white z-10">
        <div className="container max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
          <div className="flex overflow-x-auto no-scrollbar">
            <div className="flex space-x-8 ">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-base whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.key
                      ? 'text-black font-semibold'
                      : 'text-[#A0A2A4] hover:text-[#FFB21D]'
                  }`}
                >
                  {tab.label}
                  <div
                    className={`border-t-4 border-[#FFB21D] w-full mt-2 ${
                      activeTab === tab.key ? 'visible' : 'invisible'
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
          <div className="border-t-4 border-black opacity-5 w-full mt-2"></div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg pb-8">
        <h2 className="text-3xl font-bold mb-8">
          {typedCourseData.courseCategories[activeTab]?.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCourses.map((course: Course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;




