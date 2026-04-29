import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="border-t border-[#e7dccb] bg-[#fffaf4] py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <span className="font-serif text-2xl font-semibold tracking-tight text-[#2a1d14]">
           Ajmlath Zaitooniyya<span className="text-[#9a6a3b]">.</span>
          </span>
          <p className="mt-2 text-sm text-[#8a6a4c]">
            Psychologist & Life Coach | UAE & India
          </p>
        </div>

        <div className="flex space-x-6">
          {['Home', 'About Me', 'Coaching', 'Contact'].map((item, idx) => (
            <Link 
              key={idx}
              to={item === 'Home' ? 'hero' : item === 'About Me' ? 'about' : item === 'Coaching' ? 'services' : 'contact'}
              smooth={true} 
              duration={500}
              className="cursor-pointer text-sm text-[#8a6a4c] transition-colors hover:text-[#9a6a3b]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col justify-between border-t border-[#e7dccb] px-6 pt-8 text-center text-sm text-[#8a6a4c] md:flex-row md:px-12 md:text-left">
        <p>&copy; {new Date().getFullYear()} Ajmalath Zaitooniyya. All rights reserved.</p>
        {/* <p className="mt-2 md:mt-0">
          Designed & Cloned with React & Tailwind CSS
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
