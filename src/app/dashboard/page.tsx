"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layout,
  BarChart3,
  BookOpen,
  GraduationCap,
  Settings,
  LogOut,
  Bell,
  Search,
  Circle,
  PlayCircle,
  Calendar,
  Trophy,
  Clock
} from 'lucide-react';

const DashboardPage = () => {
  const progressCards = [
    { title: "Introduction to Python", progress: 75, lastAccessed: "2 days ago" },
    { title: "Data Structures", progress: 45, lastAccessed: "1 week ago" },
    { title: "Algorithms", progress: 30, lastAccessed: "3 days ago" }
  ];

  const upcomingDeadlines = [
    { title: "Python Assignment #3", due: "Tomorrow, 11:59 PM" },
    { title: "DSA Quiz", due: "Friday, 3:00 PM" },
    { title: "Final Project Submission", due: "Next Week" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-4 border-b">
          <Link href="/">
            <Image
              src="/code2career-logo.svg"
              alt="Code2Career Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link href="/dashboard" 
              className="flex items-center space-x-3 text-blue-600 bg-blue-50 p-3 rounded-lg">
              <Layout size={20} />
              <span>Dashboard</span>
            </Link>
            
            <Link href="/courses" 
              className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
              <BookOpen size={20} />
              <span>My Courses</span>
            </Link>
            
            <Link href="/progress" 
              className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
              <BarChart3 size={20} />
              <span>Progress</span>
            </Link>
            
            <Link href="/certificates" 
              className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
              <GraduationCap size={20} />
              <span>Certificates</span>
            </Link>
          </div>

          <div className="absolute bottom-8 left-0 w-full px-4 space-y-2">
            <Link href="/settings" 
              className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
            
            <button 
              className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 p-3 rounded-lg w-full"
              onClick={() => console.log('logout')}
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  JS
                </div>
                <span className="text-sm font-medium">John Smith</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-gray-600">Ready to continue your learning journey?</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Hours Studied</h3>
                <Clock className="text-blue-500" size={24} />
              </div>
              <p className="text-3xl font-bold">24.5</p>
              <p className="text-sm text-gray-500">This week</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Courses Completed</h3>
                <Trophy className="text-blue-500" size={24} />
              </div>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-gray-500">Keep it up!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Next Session</h3>
                <Calendar className="text-blue-500" size={24} />
              </div>
              <p className="text-xl font-medium">DSA Live Class</p>
              <p className="text-sm text-gray-500">Today, 4:00 PM</p>
            </div>
          </div>

          {/* Course Progress */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            <div className="space-y-4">
              {progressCards.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{course.title}</h3>
                    <span className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{course.progress}%</span>
                    <PlayCircle className="text-blue-500" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-center space-x-4 border-b last:border-0 pb-4 last:pb-0">
                  <Circle className="text-blue-500" size={12} />
                  <div className="flex-1">
                    <h4 className="font-medium">{deadline.title}</h4>
                    <p className="text-sm text-gray-500">Due: {deadline.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;