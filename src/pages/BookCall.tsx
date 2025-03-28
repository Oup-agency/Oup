import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function BookCall() {
  useEffect(() => {
    // Pre-load Calendly script for faster initialization
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule Your Free Strategy Call</h1>
          <p className="text-xl text-gray-400">
            Let's discuss how we can help grow your fitness brand with AI-powered marketing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0F0F17] p-8 rounded-lg border border-gray-800"
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/d/cn2j-47c-253/30-minute-meeting"
            style={{ 
              minWidth: '320px', 
              height: '700px',
              border: 'none'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}