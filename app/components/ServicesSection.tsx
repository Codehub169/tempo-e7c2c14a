"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '/icons/branding.svg',
    title: 'Branding',
    description: "Your brand's soul, beautifully bottled.",
  },
  {
    icon: '/icons/packaging.svg',
    title: 'Packaging',
    description: 'Unbox delight, one design at a time.',
  },
  {
    icon: '/icons/social-media.svg',
    title: 'Social Media',
    description: 'Scroll-stopping stories for your socials.',
  },
  {
    icon: '/icons/stationery.svg',
    title: 'Stationery',
    description: 'Paper goods that whisper your essence.',
  },
  {
    icon: '/icons/coffee-table-books.svg',
    title: 'Coffee Table Books',
    description: 'Pages that turn moments into heirlooms.',
  },
  {
    icon: '/icons/creative-projects.svg',
    title: 'Creative Projects',
    description: 'Dreaming outside the lines? We love that.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-nearBlack">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-display text-offWhite text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.title} 
              className="flex flex-col items-center text-center p-6 bg-slateBlue rounded-lg shadow-subtle hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-5 p-3 bg-nearBlack/50 rounded-full">
                <Image src={service.icon} alt={`${service.title} icon`} width={48} height={48} />
              </div>
              <h3 className="text-xl font-display text-offWhite mb-2">{service.title}</h3>
              <p className="text-offWhite/80 font-sans text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
