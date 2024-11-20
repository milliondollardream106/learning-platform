// components/LessonSection.tsx
import React from 'react';
import Image from 'next/image';
import LogicGateImage from './LogicGateImage';

interface LessonSectionProps {
  id: string;
  title: string;
  content: string;
  imagePath?: string | null;
}

export const LessonSection: React.FC<LessonSectionProps> = ({
  id,
  title,
  content,
  imagePath
}) => {
  const isLogicGateSection = title.toLowerCase().includes('gate');
  const gateType = isLogicGateSection ? title.split(' ')[1]?.replace(/[^a-zA-Z]/g, '') : '';

  const processContent = (content: string) => {
    const IMAGE_PLACEHOLDER = '// add image here and center the image';
 
    const segments = content.split(/\n\n+/).filter(Boolean);
 
    return segments.map((segment, index) => {
      // Handle image placeholder
      if (segment.trim() === IMAGE_PLACEHOLDER && imagePath) {
        return isLogicGateSection ? (
          <LogicGateImage
            key={index}
            imagePath={imagePath}
            gateType={gateType}
          />
        ) : (
          <div key={index} className="flex justify-center my-6">
            <Image
              src={imagePath}
              alt="Illustration for section"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        );
      }

      // Rest of your existing processContent code...
      // Handle bullet points with multiple levels
      if (segment.includes('* ')) {
        const lines = segment.split('\n').map(line => line.trim()).filter(Boolean);
        const processListItems = (items: string[], level: number = 0): JSX.Element[] => {
          const result: JSX.Element[] = [];
          let currentItem: string[] = [];
         
          for (let i = 0; i < items.length; i++) {
            const line = items[i];
            const lineLevel = (line.match(/^\*/g) || []).length;
           
            if (lineLevel === level) {
              if (currentItem.length > 0) {
                result.push(processListItem(currentItem));
                currentItem = [];
              }
              currentItem = [line];
            } else if (lineLevel > level) {
              currentItem.push(line);
            } else {
              if (currentItem.length > 0) {
                result.push(processListItem(currentItem));
                currentItem = [];
              }
              break;
            }
          }
         
          if (currentItem.length > 0) {
            result.push(processListItem(currentItem));
          }
         
          return result;
        };
       
        const processListItem = (itemLines: string[]): JSX.Element => {
          const mainLine = itemLines[0];
          const level = (mainLine.match(/^\*/g) || []).length - 1;
          const text = mainLine.replace(/^\*+\s*/, '');
          const childLines = itemLines.slice(1);
         
          return (
            <li
              key={mainLine}
              className="text-gray-700 leading-loose text-lg tracking-wide"
            >
              {text}
              {childLines.length > 0 && (
                <ul className={`mt-2 list-disc ${level > 0 ? 'ml-6' : 'ml-6'}`}>
                  {processListItems(childLines, level + 1)}
                </ul>
              )}
            </li>
          );
        };
        return (
          <ul key={index} className="list-disc space-y-3 mt-4 ml-8">
            {processListItems(lines)}
          </ul>
        );
      }
 
      // Default paragraph handling
      return (
        <p key={index} className="text-gray-700 leading-loose text-lg tracking-wide mb-4">
          {segment.trim()}
        </p>
      );
    });
  };
 
  return (
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
};