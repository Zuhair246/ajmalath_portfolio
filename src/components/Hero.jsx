import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroImage from '../assets/about.jpeg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-16 pb-8 md:pt-32 lg:pt-40"
    >
      <div className="absolute inset-0 bg-[#f5ecdd]" />
      <img
        src={heroImage}
        alt="Ajmalath Zaitooniyya"
        className="absolute inset-0 h-full w-full object-cover object-center lg:object-contain lg:object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f0e4]/24 via-[#f2e7d6]/12 to-transparent lg:from-[#f8f0e4]/38 lg:via-[#f2e7d6]/10 lg:to-transparent" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mt-8 min-w-0 max-w-3xl text-center md:mt-0 md:w-[52%] md:max-w-[38rem] md:text-left lg:w-[44%] xl:w-[42%]">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 max-w-full [overflow-wrap:anywhere] font-serif text-4xl font-bold leading-[1.08] text-[#edd2b7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] md:text-5xl md:text-[#1f1711] md:drop-shadow-none lg:text-[clamp(3rem,4vw,3.75rem)]"
          >
            Not your typical <br />
            psychologist
            <br />
            <span className="bg-gradient-to-r from-[#6f4324] via-[#8f5a30] to-[#c78a4f] bg-clip-text text-transparent">
              Not your typical <br />
              coach
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg font-medium text-[#fff7ed] drop-shadow-md md:text-[#2f2218] md:drop-shadow-none md:mx-0 md:text-xl"
          >
            This isn&apos;t a perfect little polished corner of the internet.
            <br className="hidden md:block" /> This is my space, real and unfiltered,
            <br className="hidden md:block" /> built for people tired of pretending everything is fine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 md:justify-start"
          >
            {/* <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="group flex w-full cursor-pointer items-center justify-center rounded-full bg-[#7b4f2f] px-8 py-3.5 font-medium text-[#fff7ed] shadow-lg shadow-[#7b4f2f]/20 transition-all hover:bg-[#94613a] hover:shadow-xl sm:w-auto"
            >
              Explore Coaching
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link> */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex w-full cursor-pointer items-center justify-center rounded-full border border-[#b89775] bg-[#fff8ee]/70 px-8 py-3.5 font-medium text-[#5e4633] backdrop-blur-sm transition-all hover:border-[#9f7a56] hover:bg-[#94613A] sm:w-auto"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
