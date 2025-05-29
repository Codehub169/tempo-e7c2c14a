"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative text-center p-8 bg-neutral-offWhite overflow-hidden"
    >
      {/* Subtle background pattern or gradient - future enhancement */}
      {/* <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-slateBlue to-mutedMauve"></div> */}

      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mb-8"
      >
        <Image 
          src="/images/hueneu-logo.svg" 
          alt="hueneu Logo" 
          width={180} 
          height={180} 
          priority
        />
      </motion.div>

      {/* Tagline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slateBlue mb-4"
      >
        Where stories find their aesthetic.
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 1.1 }}
        className="font-sans text-lg md:text-xl text-mutedMauve max-w-xl mx-auto"
      >
        Designs that whisper loud stories.
      </motion.p>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#story" aria-label="Scroll to next section">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-slateBlue hover:text-softCoral transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
