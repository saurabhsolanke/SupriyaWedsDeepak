import React from 'react';
import heroBg from "../assets/photo.jpeg"; // Reusing hero for contact image if needed or just empty

const RSVPFooter: React.FC = () => {
  return (
    <div id="rsvp" className="relative bg-bg-light">
      
      {/* Contact Section */}
      <div className="flex flex-wrap justify-center items-center py-10 px-4 gap-8 md:py-20 md:px-8 md:gap-16" data-aos="fade-up">
         {/* Contact Info */}
         <div className="flex-1 min-w-[300px] max-w-[500px]">
            <h2 className="font-playfair text-3xl md:text-5xl text-primary mb-8 md:mb-12 italic font-normal">
              Contact Us
            </h2>

            <div className="mb-8 text-left">
               <p className="font-semibold font-montserrat text-lg md:text-xl mb-4 text-primary">Contact Person</p>
               <div className="mb-4">
                 <p className="font-bold font-playfair text-lg md:text-xl text-text-dark">Saurabh Solanke</p>
                 <a href="tel:9028066793" className="text-sm md:text-base text-text-dark mt-1 block no-underline hover:text-primary transition-colors">+91 9028066793</a>
               </div>
            </div>
            
            <p className="uppercase tracking-[2px] text-xs text-primary">#DeepakWedsSupriya</p>
         </div>

         {/* Image */}
         <div 
           className="w-[280px] h-[380px] md:w-[300px] md:h-[400px] bg-cover bg-center"
           style={{ backgroundImage: `url(${heroBg})` }}
         ></div>
      </div>

      {/* RSVP Envelope Section */}
      {/* <div className="py-10 px-4 md:py-16 md:px-8 text-center bg-[#e8e8e8] flex justify-center">
        <div className="max-w-[600px] w-full bg-white p-6 md:p-12 shadow-2xl relative" data-aos="zoom-in">
         
           <h2 className="font-playfair text-3xl md:text-5xl text-primary mb-4 italic font-normal">
             Kindly Respond
           </h2>
           <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-accent rounded-full mx-auto mb-8 flex items-center justify-center text-white text-xl md:text-2xl">✉️</div>

           <p className="uppercase tracking-[2px] mb-8 text-[0.6rem] md:text-xs font-montserrat leading-relaxed">
             Please RSVP before February 21, 2026 by<br/>clicking on the link below
           </p>

           <button className="py-3 px-8 md:py-4 md:px-12 text-xs md:text-sm bg-primary text-white border-none cursor-pointer uppercase tracking-[1px] hover:bg-opacity-90 transition-opacity">
             RSVP HERE
           </button>
        </div>
      </div> */}
    </div>
  );
};

export default RSVPFooter;
