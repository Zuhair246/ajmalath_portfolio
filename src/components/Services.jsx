import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Brain, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Executive Leadership',
    description: 'Take your leadership to the next level. Balance between work and life, and uncover your authentic self.',
    icon: <Target className="w-8 h-8 text-[#9a6a3b]" />,
    delay: 0.1
  },
  {
    title: 'Mindful Leadership',
    description: 'Become mindful and present. Increase productivity, energy levels, and become more resilient to corporate stress.',
    icon: <Brain className="w-8 h-8 text-[#9a6a3b]" />,
    delay: 0.2
  },
  {
    title: 'Wellbeing Coaching',
    description: 'Prioritize wellbeing as a value proposition and key pillar of your personal and professional growth.',
    icon: <Heart className="w-8 h-8 text-[#9a6a3b]" />,
    delay: 0.3
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f7efe3] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#9a6a3b] uppercase">Coaching Programs</h2>
          <h3 className="mb-6 font-serif text-3xl font-bold text-[#2a1d14] md:text-5xl">
            How can Wellbeing Coaching support your Leadership?
          </h3>
          <p className="text-lg text-[#5e4633]">
            Wellbeing sits in the heart of my Coaching Program. It's one of the main elements for Leaders to excel in their career and achieve more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group rounded-3xl border border-[#e7dccb] bg-[#fffdf9] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(72,48,28,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3e7d5] transition-colors duration-300 group-hover:bg-[#9a6a3b]">
                {React.cloneElement(service.icon, { className: 'h-8 w-8 text-[#9a6a3b] transition-colors duration-300 group-hover:text-[#fff7ed]' })}
              </div>
              <h4 className="mb-4 font-serif text-2xl font-bold text-[#2a1d14]">{service.title}</h4>
              <p className="mb-8 leading-relaxed text-[#5e4633]">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center font-medium text-[#9a6a3b] transition-colors group-hover:text-[#7b4f2f]">
                Learn more
                <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
