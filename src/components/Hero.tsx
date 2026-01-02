import React from 'react';

interface HeroProps {
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-playfair text-4xl md:text-6xl font-normal mb-4 drop-shadow-md text-white">
          Deepak <span className="italic font-playfair">&</span> Supriya
        </h1>
        <p className="font-montserrat text-xs md:text-base tracking-[2px] md:tracking-[4px] uppercase font-medium drop-shadow-md">
          February 03, 2026 • Venkatesh Mangal karyala, Majalgaon. 
        </p>
      </div>
    </div>
  );
};

export default Hero;
