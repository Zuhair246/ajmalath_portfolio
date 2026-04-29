import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import about from '../assets/about.jpeg'

const features = [
  'Transpersonal Psychologist',
  'Counselling Psychologist',
  'Learning Disability Consultant',
  'Life Coach',
  'English Language Trainer',
  'Academic Expert'
];

const About = () => {
  return (
    <section id="about" className="bg-[#fbf4ea] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-10 lg:hidden">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9a6a3b]">About Me</h2>
          <h3 className="font-serif text-3xl font-bold text-[#2a1d14]">
            Ajmalath Zaitooniyya
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rotate-[-2deg] rounded-[2.5rem] bg-[#eadbc6]"></div>
              <img 
                src={about}
                alt="Ajmalath Zaitooniyya Portrait" 
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl shadow-[#8b5e34]/15"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="mb-2 hidden text-sm font-semibold uppercase tracking-wider text-[#9a6a3b] lg:block">About Me</h2>
            <h3 className="mb-6 hidden font-serif text-3xl font-bold text-[#2a1d14] md:text-5xl lg:block">
              Ajmalath Zaitooniyya
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-[#5e4633]">
              I am Ajmalath — the psychologist who refuses to fit into the straight lines the world draws. I work with
              emotions the way an artist works with colours — blending logic with intuition, science with instinct, and
              structure with a little bit of wild rebellion.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#5e4633]">
              My journey has been anything but ordinary. I’ve moved through phases of self-discovery, identity shifts,
              emotional storms, and quiet victories that shaped the way I teach, mentor, and coach. I don’t believe in
              perfection, <br/> I believe in transformation, rawness, and the beauty of being real.
            </p>
            
            <div className="mb-10 space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-[#a06a3b]" />
                  <span className="font-medium text-[#3f2d20]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#e6d5bf] pt-6">
              <p className="font-serif text-2xl italic text-[#2a1d14]">
                "Feel everything mindfully!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
