import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About Me', to: 'about' },
  { name: 'Coaching', to: 'services' },
  { name: 'Keynote Speech', to: 'projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#e7dccb] bg-[#fffaf2]/90 py-4 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex flex-col">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-serif text-2xl font-semibold leading-none tracking-tight text-[#2a1d14]">
            Ajmalath Zaitooniyya
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-1.5 text-[10px] font-medium tracking-widest text-[#8a6a4c] uppercase sm:text-xs"
          >
            Transpersonal Psychologist & Life Coach
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.to} smooth={true} duration={500} offset={-80} className="cursor-pointer text-sm font-medium tracking-wide text-[#5e4633] transition-colors duration-200 hover:text-[#9a6a3b]">
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer rounded-full bg-[#7b4f2f] px-6 py-2.5 text-sm font-medium text-[#fff7ed] shadow-lg shadow-[#7b4f2f]/20 transition-all duration-300 hover:bg-[#94613a] hover:shadow-xl">
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="p-2 text-[#2a1d14] md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-[#e7dccb] bg-[#fffaf2]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-4 pt-4 pb-8 px-6">
              {navLinks.map((link, idx) => (
                <Link key={idx} to={link.to} smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="border-b border-[#f0e7da] pb-2 text-lg font-medium text-[#3f2d20]">
                  {link.name}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="mt-4 rounded-xl bg-[#7b4f2f] px-6 py-3 text-center font-medium text-[#fff7ed]">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
