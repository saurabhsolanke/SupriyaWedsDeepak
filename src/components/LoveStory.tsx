import React from 'react';
import couplePhoto from '../assets/geminicouple_photo.png'; 
import couplePhoto2 from '../assets/IMG_9126.jpeg';

const LoveStory: React.FC = () => {
  return (
    <div id="story" className="bg-primary text-text-light py-10 px-4 md:py-20 md:px-8 flex flex-col items-center text-center">
      <h2 className="font-playfair text-3xl md:text-5xl mb-12 md:mb-16 font-normal italic">
        Our Love Story
      </h2>

      <div className="flex flex-wrap justify-center gap-12 md:gap-16 max-w-[1000px] w-full items-center">
        {/* Photos Container - Simulating 2 Polaroids */}
        <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[400px]">
             {/* Polaroid 1 */}
            <div className="absolute top-0 left-0 w-[210px] h-[260px] md:w-[240px] md:h-[300px] bg-white p-3 pb-8 md:pb-10 -rotate-6 shadow-2xl z-10">
              <div 
                className="w-full h-full bg-gray-200 bg-cover bg-center" 
                style={{ backgroundImage: `url(${couplePhoto})` }}
              ></div>
              <p className="absolute bottom-[8px] md:bottom-[10px] w-full text-center text-[#333] text-[0.6rem] md:text-xs m-0 font-montserrat">
                04.24.24
              </p>
            </div>

            {/* Polaroid 2 */}
            <div className="absolute bottom-0 right-0 w-[210px] h-[260px] md:w-[240px] md:h-[300px] bg-white p-3 pb-8 md:pb-10 rotate-6 shadow-2xl z-20">
              <div 
                className="w-full h-full bg-gray-200 bg-cover bg-center sepia-[.2]" 
                style={{ backgroundImage: `url(${couplePhoto2})` }}
              ></div>
               <p className="absolute bottom-[8px] md:bottom-[10px] w-full text-center text-[#333] text-[0.6rem] md:text-xs m-0 font-montserrat">
                Deepak & Supriya
              </p>
            </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-[300px] max-w-[450px] pt-4 text-center">
          <p className="text-sm md:text-base leading-loose mb-8 font-montserrat font-light">
            We are so excited to have you join us and celebrate our special day soon!
            <br/><br/>
            Along with our formal invitations you received, we wanted to have a hub that lets you know all the finer details of the day so you have the best time.
            <br/><br/>
            Scroll through to uncover everything you need to know
          </p>
          <p className="text-center text-lg md:text-xl font-playfair mt-4 tracking-widest">
             Deepak & Supriya
          </p>
          {/* Simple logo representation */}
          <div className="text-2xl md:text-3xl mt-4">🕊️</div> 
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
