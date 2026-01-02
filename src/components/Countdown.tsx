import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-03T18:22:00').getTime(); // 2:00 PM as per itinerary usually

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bg-light text-primary py-10 px-4 md:py-16 md:px-8 text-center border-b border-gray-200">
      <h2 className="font-playfair text-2xl md:text-[2.5rem] mb-8 italic">
        Countdown Until The Big Day!
      </h2>
      
      <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <span className="block text-3xl md:text-[3.5rem] font-normal font-playfair text-text-dark">
              {value.toString().padStart(2, '0')}{unit === 'seconds' ? <span className="text-sm md:text-base align-top">*</span> : ':'}
            </span>
            <span className="uppercase text-[0.6rem] md:text-xs tracking-[2px] text-text-dark font-montserrat">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
