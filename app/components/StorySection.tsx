"use client";

import { motion } from 'framer-motion';

const StorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const whoKnewVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.5 }
    }
  };

  return (
    <motion.section 
      id="story"
      className="py-20 px-8 md:py-32 bg-white flex flex-col items-center text-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        variants={itemVariants}
        className="font-display text-3xl md:text-4xl font-semibold text-slateBlue mb-6"
      >
        hueneu. <span className="font-normal text-2xl md:text-3xl text-mutedMauve">(hue-new)</span>
      </motion.h2>

      <motion.p 
        variants={itemVariants}
        className="font-sans text-lg md:text-xl text-neutral-nearBlack max-w-2xl mx-auto mb-6 leading-relaxed"
      >
        A whisper of <strong className="text-softCoral font-semibold">Hue</strong>, the vibrant spark of creativity, the unexpected burst of color that brings a story to life.
      </motion.p>

      <motion.p 
        variants={itemVariants}
        className="font-sans text-lg md:text-xl text-neutral-nearBlack max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Grounded by <strong className="text-slateBlue font-semibold">Neu</strong>, the calm of neutrality, the quiet strength of intentional design, the space where ideas breathe. Together, they create a balance: designs that are both quietly confident and boldly expressive.
      </motion.p>

      {/* "Who Knew?" Moment */}
      <motion.div 
        variants={whoKnewVariants}
        className="bg-mutedMauve/20 p-6 md:p-8 rounded-lg shadow-md max-w-md mx-auto transform transition-all duration-300 hover:shadow-lg"
      >
        <p className="font-display text-xl md:text-2xl text-slateBlue font-medium">
          And just when you think you've got us figured out...
        </p>
        <p className="font-display text-2xl md:text-3xl text-softCoral font-bold mt-2">
          Who Knew?
        </p>
        <p className="font-sans text-md text-neutral-nearBlack mt-3">
          ...we always have a little surprise up our sleeve, blending artistry with insight to make your story unforgettable.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default StorySection;
