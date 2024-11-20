// components/LessonHeader.tsx
import React from 'react';
import Image from 'next/image';

interface LessonHeaderProps {
  courseCode: string;
  unit: string;
  title: string;
  description: string;
  imagePath: string;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  courseCode,
  unit,
  title,
  description,
  imagePath
}) => (
  <>
    <div className="pt-24 mb-12 flex flex-row">
      <span className="inline-block bg-blue-500 bg-opacity-25 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-lg mb-6 mr-4">
        {courseCode}
      </span>
      <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold text-lg mb-6">
        {unit}
      </span>
    </div>

    <div className="flex flex-col lg:flex-row items-start gap-6">
      <div className="flex-[0.6]">
        <h1 className="text-[32px] font-bold text-gray-900 mb-3">
          {title}
        </h1>
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      </div>
      <div className="flex-[0.4]">
        <Image
          src={imagePath}
          alt="Coding"
          width={400}
          height={400}
          className="object-contain max-h-[calc(100%-20px)] p-4"
          priority
        />
      </div>
    </div>
  </>
);