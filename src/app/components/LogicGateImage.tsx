// components/LogicGateImage.tsx
import React from 'react';
import Image from 'next/image';

interface LogicGateImageProps {
  imagePath: string;
  gateType: string;
}

const LogicGateImage: React.FC<LogicGateImageProps> = ({ imagePath, gateType }) => {
  return (
    <div className="flex justify-center my-6">
      <div >
        <Image
          src={imagePath}
          alt={`${gateType} Gate Diagram`}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default LogicGateImage;