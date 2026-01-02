import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-6 py-4 md:px-8 md:py-6 flex justify-between items-center text-white" data-aos="fade-down" data-aos-duration="1500">
      <div className="font-playfair text-2xl font-semibold">
        D & S
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
        <span className={`block w-[25px] h-[2px] bg-white mb-[5px] transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
        <span className={`block w-[25px] h-[2px] bg-white mb-[5px] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-[25px] h-[2px] bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
      </div>

      <ul className={`${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-primary/95 py-8 items-center gap-6' : 'hidden'} md:flex md:flex-row md:static md:w-auto md:bg-transparent md:gap-8 md:py-0 md:items-center list-none m-0 p-0`}>
        {['Story', 'Venues', 'Itinerary', 'Accommodation', 'Travel', 'FAQs', 'RSVP'].map((item) => (
          <li key={item} className="nav-item">
            <a 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="no-underline text-white font-montserrat text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
