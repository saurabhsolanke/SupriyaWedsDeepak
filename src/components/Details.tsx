import React, { useState } from 'react';
import venueResort from '../assets/venue_resort123.png';
// import couplePhoto from '../assets/geminicouple_photo.png';

const Details: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { question: 'Is there a gift registry?', answer: 'Your presence is the greatest gift to us! We do not have a registry.' },
    { question: 'Is there a dress code?', answer: 'Yes, formal attire, please. Feel free to draw inspiration from our color palette above.' },
    { question: 'Is parking available?', answer: 'Yes, valet parking will be available at the venue.' },
    { question: 'Can I bring a plus one?', answer: 'We\'d love to celebrate with all our favorite people, but due to limited space, we\'re only able to accommodate the guests named on the invitation.' },
  ];

  return (
    <div className="bg-primary text-white text-center py-10 px-4 md:py-20 md:px-8">
      
      {/* Accommodation Section */}
      <div id="accommodation">
        <h2 className="font-playfair text-2xl md:text-4xl mb-8 font-normal uppercase tracking-widest">Accommodation</h2>
        <p className="max-w-[600px] mx-auto mb-12 md:mb-16 opacity-90 font-montserrat text-xs md:text-sm leading-relaxed">
          For your comfort, we recommend the following hotel. Click to view more details.
        </p>

        <div className="flex justify-center mb-16 md:mb-24">
             <div className="flex flex-col items-center">
               <div 
                 className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-gray-200 bg-cover bg-center mb-4 border border-white/20"
                 style={{ backgroundImage: `url(${venueResort})` }}
               ></div>
               <a href="https://www.google.com/search?q=Sukhsagar+hotel+Majalgaon" target="_blank" rel="noopener noreferrer" className="uppercase tracking-[1px] text-base md:text-lg text-accent no-underline mt-2 border-b border-accent pb-[2px] hover:text-white hover:border-white transition-colors">
                 Sukhsagar Hotel Majalgaon
               </a>
             </div>
        </div>
      </div>

       {/* Travel & Transportation */}
       <div id="travel" className="flex justify-center gap-8 flex-wrap mb-16 md:mb-24">
          
          {/* Location */}
          <div className="border border-white/30 p-8 md:p-12 max-w-[400px] w-full flex flex-col items-center">
            <h3 className="uppercase tracking-[2px] mb-6 md:mb-8 font-montserrat text-sm md:text-base">Location</h3>
             <ul className="list-none p-0 text-center leading-loose font-montserrat text-xs md:text-sm">
              <li>Venkatesh Mangal Karyalay, Majalgaon</li>
            </ul>
             <a href="https://maps.app.goo.gl/Yhzqn2UaTVuVMNYx9" target="_blank" rel="noopener noreferrer" className="text-accent text-xs md:text-sm mt-4 hover:text-white transition-colors">View Map ↗</a>
          </div>

          {/* Transportation */}
          <div className="border border-white/30 p-8 md:p-12 max-w-[400px] w-full flex flex-col items-center">
             <h3 className="uppercase tracking-[2px] mb-6 md:mb-8 font-montserrat text-sm md:text-base">Transportation</h3>
             <p className="text-center leading-loose font-montserrat text-xs md:text-sm">
               Please contact us if you need assistance with transportation arrangements.
             </p>
          </div>
       </div>

       {/* FAQ Section */}
       <div id="faqs">
          <h2 className="font-playfair text-2xl md:text-4xl mb-12 md:mb-16 font-normal uppercase tracking-widest">
            Frequently Asked<br/>Questions
          </h2>

          <div className="max-w-[800px] mx-auto text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20">
                <div 
                  className="py-4 md:py-6 flex justify-between items-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-playfair text-lg md:text-xl pr-4">{faq.question}</span>
                  <span className="text-xl md:text-2xl text-accent font-light">{openFaqIndex === index ? '−' : '+'}</span>
                </div>
                <div 
                   className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[200px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                   <p className="font-montserrat text-xs md:text-sm leading-loose opacity-80 pl-2 border-l border-accent ml-1">
                     {faq.answer}
                   </p>
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  );
};

export default Details;
