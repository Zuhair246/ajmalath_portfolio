import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import eventImage from '../assets/Event_1.jpeg';

const speakingTopics = [
  {
    title: 'The Architecture of Inclusion',
    description:
      'Leveraging learning disability management to build neuro-diverse workspaces.',
  },
  {
    title: 'Beyond the Habit of Being',
    description:
      'A deep dive into the neurobiology of emotional transformation and personal refractory periods.',
  },
  {
    title: 'The Fourth Force in Leadership',
    description:
      'Applying transpersonal psychology to lead with authenticity and instinct.',
  },
  {
    title: 'Mindful Evolution',
    description:
      'Bridging academic expertise with the raw beauty of being.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#fffaf4] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-10 md:hidden">
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#9a6a3b] uppercase">Speaking & Events</h2>
          <h3 className="font-serif text-3xl font-bold text-[#2a1d14]">
            Keynotes at the Intersection of Science and Soul
          </h3>
        </div>

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
                src={eventImage}
                alt="Keynote Speech"
                className="h-full w-full object-cover opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3d2b1d]/40 via-transparent to-[#e7caa7]/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="mb-2 hidden text-sm font-semibold tracking-wider text-[#9a6a3b] uppercase md:block">Speaking & Events</h2>
            <h3 className="mb-6 hidden font-serif text-3xl font-bold text-[#2a1d14] md:block md:text-5xl">
              Keynotes at the Intersection of Science and Soul
            </h3>
            <blockquote className="mb-8 border-l-4 border-[#c08b57] pl-5 font-serif text-xl italic leading-relaxed text-[#3f2d20]">
              "I speak at the intersection of science and soul. Whether I am addressing educators on the complexities of learning management or guiding executives through emotional shifts, my goal is the same: to move the audience from passive listening to active evolution."
            </blockquote>
            <p className="mb-6 text-lg leading-relaxed text-[#5e4633]">
              Expertise is most powerful when it moves from the page to the stage. As a psychologist and educator, I deliver keynote speeches that challenge traditional frameworks and invite audiences into a deeper understanding of human potential.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#5e4633]">
              By blending the neurobiology of learning with the philosophy of transpersonal growth, I help organizations, schools, and leadership teams look beyond labels. My sessions dismantle the identity gaps that hold individuals back, offering practical, science-backed strategies for environments where neurodiversity and emotional intelligence thrive.
            </p>
            {/* <button className="rounded-full bg-[#7b4f2f] px-8 py-3 font-medium text-[#fff7ed] shadow-lg shadow-[#7b4f2f]/20 transition-all duration-300 hover:bg-[#94613a] hover:shadow-xl">
              Explore Expert Talks
            </button> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9a6a3b]">
                Core Speaking Topics
              </h4>
              <p className="max-w-3xl text-lg leading-relaxed text-[#5e4633]">
                Each keynote blends logic and intuition, helping audiences think differently, lead boldly, and turn insight into lived change.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {speakingTopics.map((topic, idx) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-[#e7dccb] bg-[#fffdf9] p-6 shadow-[0_18px_45px_rgba(72,48,28,0.08)]"
              >
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#eadbc6] text-sm font-semibold text-[#7b4f2f]">
                  {idx + 1}
                </span>
                <h5 className="mb-3 font-serif text-2xl font-bold text-[#2a1d14]">
                  {topic.title}
                </h5>
                <p className="leading-relaxed text-[#5e4633]">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-[#5e4633]">
            I do not just give speeches; I start conversations. Whether discussing the nuances of learning disabilities or the depths of the human psyche, I provide the tools to think differently and lead boldly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
