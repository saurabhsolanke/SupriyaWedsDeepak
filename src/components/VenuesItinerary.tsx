import React from 'react';
import venueResort from '../assets/venue_resort123.png'; // Corrected filename from dir list
import couplePhoto from '../assets/5138.jpeg'; 

const VenuesItinerary: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Venues Section */}
      <div id="venues" className="flex flex-col md:flex-row min-h-auto md:min-h-[600px]">
        {/* Image Side */}
        <div 
          className="w-full md:flex-1 min-h-[400px] md:min-h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${venueResort})` }}
          data-aos="fade-right"
        ></div>

        {/* Text Side */}
        <div className="w-full md:flex-1 bg-bg-light flex flex-col justify-center items-center p-8 md:p-16 text-center" data-aos="fade-left">
          <h2 className="text-primary font-playfair text-3xl md:text-5xl mb-4 italic font-normal">
            Venues
          </h2>
          
          <div className="text-center text-text-dark font-montserrat">
            <p className="text-xs md:text-sm mb-2 tracking-[1px] uppercase">Together with their families</p>
            <p className="text-xl md:text-2xl mb-8 font-playfair">Deepak & Supriya</p>
            
            <p className="mb-8 leading-loose font-light text-sm md:text-base">
              We Request the honor of your presence <br/>
              at Our wedding celebration <br/>
            </p>

            <a href="https://maps.app.goo.gl/Yhzqn2UaTVuVMNYx9" target="_blank" rel="noopener noreferrer" className="no-underline">
              <p className="text-primary font-bold text-lg md:text-xl font-playfair">Venkatesh Mangal Karyalay</p>
              <p className="text-xs md:text-sm tracking-[1px] text-text-dark">Majalgaon, India ↗</p>
            </a>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div id="itinerary" className="flex flex-col-reverse md:flex-row min-h-auto md:min-h-[700px]">
        {/* Text Side */}
        <div className="w-full md:flex-1 bg-bg-light p-8 md:p-16 flex flex-col justify-center" data-aos="fade-right">
           <h2 className="text-primary font-playfair text-3xl md:text-5xl mb-8 md:mb-12 text-center italic font-normal">
            Itinerary
          </h2>

          <div className="max-w-[400px] mx-auto w-full">
            {[
              { time: '2nd Feb, 4:00 PM', event: 'Engagement' },
              { time: '2nd Feb, 8:00 PM', event: 'Haldi' },
              { time: '3rd Feb, 12:30 PM', event: 'Vidhi' },
              { time: '3rd Feb, 6:22 PM', event: 'Mangal Ashtika' },
            ].map((item, index) => (
              <div key={index} className="flex mb-6 items-start">
                 <span className="w-[70px] md:w-[80px] font-semibold text-text-dark text-xs md:text-sm pt-[2px]">{item.time}</span>
                 <span className="flex-1 uppercase tracking-[1px] text-xs md:text-sm border-l border-text-dark pl-4 text-text-dark">
                   {item.event}
                 </span>
              </div>
            ))}
          </div>
        </div>

         {/* Image Side */}
         <div 
          className="w-full md:flex-1 min-h-[700px] md:min-h-[700px] bg-cover bg-center"
          style={{ backgroundImage: `url(${couplePhoto})` }}
          data-aos="fade-left"
        ></div>
      </div>
    </div>
  );
};

export default VenuesItinerary;
