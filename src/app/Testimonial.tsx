// root/Navigation.tsx
import React from "react";
import Image from "next/image";

import { 
    Star,
} from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
    <div className="container max-w-[1500px] mx-auto px-8 sm:px-8 md:px-16 lg:px-16 lg:max-w-[1300px] max-w-screen-lg relative">
    <h2 className="font-outfit text-[45px] text-black font-bold text-center mb-8">
      Hear From Our <span className="text-blue-500">Students</span>
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation.
    </p>

    <div className=" mx-auto bg-white p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Image on the Left */}
      <div className="hidden md:block pr-12">
        <Image 
          src="/girl2.svg" 
          alt="Student learning"
          className=""
          height={500}
          width={500}
        />
      </div>

      {/* Stars above text */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col mb-1">
        <div className="hidden md:block mb-4">
        <Image 
          src="/right-facing.svg" 
          alt="Student learning"
          className=""
          height={30}
          width={30}
        />
      </div>
          <div className="flex space-x-2 justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#FFB21D] fill-current" />
            ))}
          </div>
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-600 text-lg italic">
          I feel like this course is going to be a game-changer in my professional life. I got blown up from my previous job, and this course has opened my eyes to what skills I need to problem solve. Definitely worth enough to pay for it. I will be referring my friends!
        </p> 
        <div className="flex justify-start">
          <Image 
            src="/left-facing.svg" 
            alt="Student learning"
            className="w-8 h-8"
            height={30}
            width={0}
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Testimonial;