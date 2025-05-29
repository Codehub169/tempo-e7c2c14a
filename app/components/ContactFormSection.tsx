"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Send, Instagram, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ContactFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    if (!name || !email || !message) {
      setStatus('error');
      setFeedbackMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('/api/contact', { name, email, message });
      if (response.status === 200) {
        setStatus('success');
        setFeedbackMessage('Your message has been sent! We\'ll be in touch soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setFeedbackMessage(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      setStatus('error');
      setFeedbackMessage(error.response?.data?.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-offWhite">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-display text-slateBlue text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Work Together
        </motion.h2>

        <motion.div
          className="bg-white p-8 md:p-12 rounded-lg shadow-subtle border border-mutedMauve/20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-sans text-neutral-nearBlack text-center mb-8">
            Have a story waiting to be told? Or perhaps a question? 
            Drop us a line, we’d love to hear from you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 font-sans border border-mutedMauve/50 rounded-md focus:ring-2 focus:ring-softCoral focus:border-softCoral outline-none transition-colors duration-200 bg-neutral-offWhite/50 placeholder-mutedMauve"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 font-sans border border-mutedMauve/50 rounded-md focus:ring-2 focus:ring-softCoral focus:border-softCoral outline-none transition-colors duration-200 bg-neutral-offWhite/50 placeholder-mutedMauve"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                placeholder="Tell us about your project or idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-3 font-sans border border-mutedMauve/50 rounded-md focus:ring-2 focus:ring-softCoral focus:border-softCoral outline-none transition-colors duration-200 bg-neutral-offWhite/50 placeholder-mutedMauve"
              ></textarea>
            </div>
            
            {feedbackMessage && (
              <div className={`flex items-center p-3 rounded-md text-sm ${status === 'success' ? 'bg-successGreen/10 text-successGreen' : 'bg-errorRed/10 text-errorRed'}`}>
                {status === 'success' ? <CheckCircle2 size={20} className="mr-2" /> : <AlertTriangle size={20} className="mr-2" />}
                {feedbackMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center px-6 py-4 font-display text-lg text-white bg-softCoral rounded-md hover:bg-opacity-90 focus:ring-4 focus:ring-softCoral/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Let's design your story <Send size={20} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-sans text-neutral-nearBlack mb-2">Find us on Instagram:</p>
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center font-display text-mutedMauve hover:text-softCoral transition-colors duration-300 text-lg group"
          >
            <Instagram size={24} className="mr-2 group-hover:scale-110 transition-transform"/> @hueneu_
          </a>
           <p className="mt-6 text-sm text-mutedMauve font-sans">
            {/* Optional: Link to services deck or 'Who Knew?' visual can go here */}
            Discover more about our approach in our <a href="#" className="underline hover:text-softCoral">services guide</a>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
