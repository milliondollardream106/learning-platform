import React from 'react';
import Image from 'next/image';
import Link from "next/link";
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
import Testimonial from './Testimonial';

import { 
  ChevronRight,
} from 'lucide-react';

const features = [
  {
    icon: <Image src="/landing/web-programming.svg" alt="Curriculum" className="w-16 h-16 mx-auto" width={60} height={60} />,
    title: "Build a Strong Foundation",
    description: "Start with a carefully curated curriculum that includes the best online tutorials, projects, and courses."
  },
  {
    icon: <Image src="/landing/consulting.png" alt="Interviews" className="w-16 h-16 mx-auto" width={60} height={60} />,
    title: "Prepare for Interviews",
    description: "Tackle complex interview problems with our integrated online IDE. Our tools and resources are designed to help you practice and perfect your coding skills, giving you a competitive edge in the interview process."
  },
  {
    icon: <Image src="/landing/epidemiology.png" alt="Coaching" className="w-16 h-16 mx-auto" width={100} height={100}/>,
    title: "Advance Career Coaching",
    description: "You're not alone in your journey. Gain valuable insights and guidance from our experienced career coaches and connect with a supportive community of beginners and seasoned developers."
  }
];

const courses = [
  {
    title: "Programming",
    description: "Learn the basics of programming including HTML, CSS, and JavaScript.",
    bgColor: "bg-[#1A73E8]",
    textColor: "text-white"
  },
  {
    title: "Computer Architecture",
    description: "Understand the basics of computer systems",
    bgColor: "bg-[#F1F3F9]",
    textColor: "text-[#1A73E8]"
  },
  {
    title: "Math for CS",
    description: "Dive into the math concepts necessary for computer science.",
    bgColor: "bg-[#1A73E8]",
    textColor: "text-white"
  },
  {
    title: "Operating Systems",
    description: "Learn about the core components of operating systems.",
    bgColor: "bg-[#F1F3F9]",
    textColor: "text-[#1A73E8]"
  },
  {
    title: "Computer Networking",
    description: "Learn the fundamentals of computer networking and its applications",
    bgColor: "bg-[#1A73E8]",
    textColor: "text-white"
  },
  {
    title: "Databases",
    description: "Learn about databases and how to manage data.",
    bgColor: "bg-[#F1F3F9]",
    textColor: "text-[#1A73E8]"
  }
];

const why_us = [
  { 
    title: "Build a Strong Foundation",
    description: "Start with a carefully curated curriculum that includes the best online tutorials, projects, and courses.",
    iconSrc: '/landing/web-programming.svg', // Image source as a string
    altText: 'Coaching',           // Alt text for image
  },
  { 
    title: "Prepare for Interviews",
    description: "Tackle complex interview problems with our integrated online IDE. Our tools and resources are designed to help you practice and perfect your coding skills, giving you a competitive edge in the interview process.",
    iconSrc: '/landing/consulting.png',
    altText: 'Coaching',
  },
  { 
    title: "Advance Career Coaching",
    description: "You're not alone in your journey. Gain valuable insights and guidance from our experienced career coaches and connect with a supportive community of beginners and seasoned developers.",
    iconSrc: '/landing/epidemiology.png',
    altText: 'Coaching',
  }
];


const LandingPage = () => {
  
  return (
    <div className="min-h-screen">
  
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 relative">
        <div className="container max-w-[1500px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      
            <h2 className="text-blue-500 text-sm font-semibold mb-2">Keep Learning</h2>
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
              Start a Career in
              <span className="text-blue-500 block">Computer Science</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Get structured guidance from industry experts to build your career in tech.
              Learn programming, system design, and more.
            </p>
            <Link href="/courses" passHref>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center">
                Find Courses
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/hero2.svg"
              alt="Student learning"
              className="rounded-lg relative z-10 w-full h-full object-cover absolute bottom-0"
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>

      {/* Learn & Grow Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1500px] px-4 grid mx-auto md:grid-cols-2 gap-12 items-center px-8 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/landing.svg"
              alt="Learning anywhere"
              className="rounded-lg relative z-10"
              height={500}
              width={500}
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-blue-500 font-bold mb-6">ABOUT US</h1>
            <h2 className="text-3xl font-bold text-black mb-6">
              Learn & Grow Your Skills From
              <span className="pl-3 text-blue-500">Anywhere</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Access our comprehensive curriculum and expert mentorship from anywhere in the world.
              Learn at your own pace and get personalized feedback on your progress.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#F8B81F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
                <span className="font-bold text-black">Online Remote Learning</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#F8B81F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
                <span className="font-bold text-black">Flexible Schedule</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#F8B81F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
                <span className="font-bold text-black">Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
     </section>



      {/* Why Choose Us */}
      {/* <section className="bg-gray-100 py-20 from-white via-gray-50 to-white">
        <div className="container mx-auto px-8 md:px-16 max-w-screen-lg">
        <h2 className="font-outfit text-[42px] text-black font-bold text-center text-black mb-10">
        Why Choose <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
            code2career is an AI-powered interactive learning platform that offers a streamlined, three-step process designed to help you land a job in technology.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-[#F1F3F9] py-32">
        <div className="container max-w-[1500px] mx-auto px-8 md:px-16 max-w-screen-lg container mx-auto px-4 md:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
          <div className="text-center mb-12">
            <h2 className="text-black text-[45px] font-bold mb-4">
              Why Choose <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-gray-600">
              code2career is an AI-powered interactive learning platform that offers a streamlined, three-step process designed to help you land a job in technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pb-16">
            {why_us.map((why_us, index) => (
              <div key={index} className="bg-white p-6 rounded-lg flex flex-col items-center">
                <div className="flex justify-center mb-6 -mt-14">
                  <div className="bg-[#F1F3F9] rounded-full p-2">
                    <div className="bg-white rounded-full p-2">
                    
                      <Image 
                        src={why_us.iconSrc} 
                        alt={why_us.altText} 
                        className="w-16 h-16 mx-auto" 
                        width={100} 
                        height={100} 
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-black text-xl font-semibold mb-3 text-center">{why_us.title}</h3>
                <p className="text-gray-600 text-center mb-6 text-center">{why_us.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    {/* Courses Section */}
    <section className="py-20 pb-35 bg-white">
      <div className="container max-w-[1500px] mx-auto px-8 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
        <h2 className="font-outfit text-[42px] font-bold text-black text-center mb-8">
          Learn All The Skills You Need To <span className="text-blue-500">Succeed</span> On One Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`${course.bgColor} rounded-lg overflow-hidden transition-shadow p-6 flex flex-col h-full`}
            >
              <h3 className={`${course.textColor} text-xl font-semibold mb-2`}>
                {course.title}
              </h3>
              <p className={`${course.textColor} text-sm flex-1 items-start`}>
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* Career Readiness */}
    <section className="bg-[#F1F3F9] py-20">
      <div className="container max-w-[1500px] mx-auto px-8 md:px-16 lg:px-16  lg:max-w-[1300px] max-w-screen-lg flex flex-col items-center md:flex-row md:justify-center">
          {/* container max-w-[1600px] mx-auto px-8 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1500px] max-w-screen-lg relative */}
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <h2 className="font-outfit text-[42px] font-bold text-black mb-6">
            Highlight Your <span className="text-[#FFB21D]">Career</span> Readiness
          </h2>
          <p className="text-[#808080] mb-8 max-w-lg">
            We&apos;re trusted by thousands of people starting new careers. After in-depth training and passing our highly respected final exam for your course, you&apos;ll receive a certificate of completion! This certification will show others that you have the knowledge and skills to succeed.
          </p>
          <Link href="/pricing" passHref>
            <button className="px-8 py-3 bg-[#1A73E8] text-white rounded-full hover:bg-[#FFB21D] font-semibold">
              Get Started &rarr;
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image 
            src="/computer.svg" 
            alt="Right Image"
            className="max-w-full h-auto"
            width={480} // Specify the width for optimization
            height={240} // Specify the height for optimization
          />
        </div>
      </div>
    </section>


    {/* Testimonial Section */}
    <Testimonial />

      {/* CTA Section */}
      <section className="bg-blue-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-outfit text-[42px] font-bold text-white mb-6">
            Ready to <span className="text-[#FFB21D] ">Transform</span> your Career?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully transitioned into tech careers.
            Start your journey today with our comprehensive curriculum and expert guidance.
          </p>
          <Link href="/pricing" passHref>
            <button className="px-8 py-3 bg-white text-blue-500 rounded-full hover:bg-[#FFB21D] font-semibold">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      
    </div>
  );
};

export default LandingPage;
