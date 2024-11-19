// AboutPage.tsx
import React from 'react';
import Image from 'next/image';

const stats = [
  { number: '10k', label: 'Students Enrolled' },
  { number: '3k', label: 'Enrollment Forms' },
  { number: '240', label: 'Online Instructors' },
  { number: '110', label: 'Coaching' }
];

const features = [
  { 
    title: 'Professional Educators', 
    description: 'Get one-on-one help from our subject matter experts.',
    iconSrc: '/about_page/cap.svg', // Image source as a string
    altText: 'Coaching',           // Alt text for image
  },
  { 
    title: 'Real-Time Support', 
    description: 'Ask questions over live chat or schedule a virtual meeting.',
    iconSrc: '/about_page/scroll.svg',
    altText: 'Coaching',
  },
  { 
    title: 'Free Access', 
    description: 'Every course offers online tutoring at no additional charge.',
    iconSrc: '/about_page/headset.svg',
    altText: 'Coaching',
  }
];

const teachers = [
  { name: 'Sarah Johnson', role: 'Computer Science', image: '/about_page/team-2-thumb-1.svg' },
  { name: 'David Miller', role: 'Web Development', image: '/about_page/team-2-thumb-1.svg' },
  { name: 'Emily Chen', role: 'Software Design', image: '/about_page/team-2-thumb-1.svg' },
  { name: 'Michael Brown', role: 'Data Science', image: '/about_page/team-2-thumb-1.svg' }
];


export default function AboutPage() {
  return (
    <div className="min-h-screen">

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

      {/* Stats Section */}
      <section className=" bg-blue-600 py-16">
        <div className="container mx-auto px-4">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center lg:max-w-[1300px] max-w-screen-lg relative">
    
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-[100px] font-bold mb-2">{stat.number}</div>
                <div className="text-[20px] opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-32">
        <div className="container max-w-[1500px] mx-auto px-8 md:px-16 max-w-screen-lg container mx-auto px-4 md:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
          <div className="text-center mb-12">
            <h2 className="text-black text-[45px] font-bold mb-4">
              We create unique digital learning experiences
            </h2>
            <p className="text-gray-600">
              Online courses from the world's leading experts in technology and development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F3F4F9] p-6 rounded-lg flex flex-col items-center">
                <div className="flex justify-center mb-6 -mt-14">
                  <div className="bg-white rounded-full p-2">
                    <div className="bg-[#F3F4F9] rounded-full p-2">
                    
                      <Image 
                        src={feature.iconSrc} 
                        alt={feature.altText} 
                        className="w-16 h-16 mx-auto" 
                        width={100} 
                        height={100} 
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-black text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center mb-6 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1300px]">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-black text-4xl md:text-5xl font-bold mb-6">
              Mission and <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At code2career, we are dedicated to transforming education through innovative learning approaches.
              Our commitment extends beyond traditional education, focusing on creating future-ready professionals
              who can make a real impact in their chosen fields.
            </p>
          </div>

          {/* Mission Content */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-black text-3xl font-bold mb-6">
                Our <span className="text-blue-600">Mission</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision being the catalyst for educational transformation, combining innovative teaching 
                methods with practical experience. Our approach ensures every student receives world-class 
                mentorship and resources, preparing them for the opportunities of tomorrow. Through technology 
                and human connection, we deliver transformative learning experiences.
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/about_page/mission.svg"
                alt="Mission Illustration"
                width={500}
                height={400}
                className="w-full max-w-md h-auto"
                priority
              />
            </div>
          </div>

          {/* Vision Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <Image 
                src="/about_page/vision.svg"
                alt="Vision Illustration"
                width={500}
                height={400}
                className="w-full max-w-md h-auto"
                priority
              />
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <h3 className="text-black text-3xl font-bold mb-6">
                Our <span className="text-blue-600">Vision</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision being the catalyst for educational transformation, combining innovative teaching 
                methods with practical experience to create a world-class educational ecosystem. Our vision 
                is a future where technology and human connection work in harmony to deliver transformative 
                learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-white py-16">
        <div className="container max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
          <div className=" mb-12">
          <span className="text-blue-600">Our Team</span>
            <h2 className="text-black text-3xl font-bold pt-4">
              Meet Our <span className=" text-blue-600">Teachers</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-4 mx-auto"
                />
                <h3 className="text-black font-semibold">{teacher.name}</h3>
                <p className="text-gray-600 text-sm">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}