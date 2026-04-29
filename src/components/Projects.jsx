import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#fffaf4] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2"
          >
            <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-[2rem] border border-[#e7dccb] bg-[#2f2218] shadow-[0_24px_60px_rgba(72,48,28,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=1000"
                alt="Keynote Speech"
                className="h-full w-full object-cover opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3d2b1d]/40 via-transparent to-[#e7caa7]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-20 w-20 text-[#fff4e7] opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#9a6a3b] uppercase">Speaking & Events</h2>
            <h3 className="mb-6 font-serif text-3xl font-bold text-[#2a1d14] md:text-5xl">
              Inspiring Keynote Speeches
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-[#5e4633]">
              Discover expertise and speaking topics with keynote speeches. With a powerful blend of insight, energy, and cultural depth, I deliver keynote speeches that move audiences to think differently and lead boldly. 
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#5e4633]">
              Drawing on years of executive experience, I cover transformation, leadership, wellbeing, and corporate culture in a way that's both practical and inspiring.
            </p>
            {/* <button className="rounded-full bg-[#7b4f2f] px-8 py-3 font-medium text-[#fff7ed] shadow-lg shadow-[#7b4f2f]/20 transition-all duration-300 hover:bg-[#94613a] hover:shadow-xl">
              Explore Expert Talks
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
