"use client";

import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WhyHueneuSection() {
  return (
    <section id="why-hueneu" className="py-20 md:py-32 bg-slateBlue text-neutral-offWhite">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-display mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Why hueneu?
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.p 
            className="text-xl md:text-2xl font-sans leading-relaxed mb-6 md:mb-8"
            variants={textVariants}
          >
            We don’t just design—<span className="text-softCoral">we decode stories</span>. 
            We listen for the whispers, the nuances, the quiet truths that make your brand uniquely yours.
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl font-sans leading-relaxed mb-6 md:mb-8"
            variants={textVariants}
          >
            Our designs speak quietly, but they resonate deeply. They aim for that perfect balance of <span className="text-mutedMauve/80">calm and intrigue</span>, mystery and clarity, creating experiences that stay with you long after you’ve scrolled away.
          </motion.p>

          <motion.p 
            className="text-xl md:text-2xl font-sans leading-relaxed"
            variants={textVariants}
          >
            At hueneu, it’s about finding the <span className="text-softCoral">hue in the neutral</span>, the bold in the understated, crafting aesthetics that are not just seen, but felt.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
