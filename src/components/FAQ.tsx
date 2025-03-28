import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does AI improve marketing performance?',
    answer: 'Our AI algorithms analyze vast amounts of data to optimize targeting, messaging, and timing of campaigns, resulting in better ROI and lower customer acquisition costs.'
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'We specialize in fitness and recovery brands, combining industry expertise with AI-powered strategies to deliver measurable results and sustainable growth.'
  },
  {
    question: 'How long until we see results?',
    answer: 'Most clients see initial improvements within the first month, with significant results typically showing within 3 months of implementation.'
  },
  {
    question: 'Do you offer guaranteed results?',
    answer: "While we cannot guarantee specific results due to various market factors, we maintain a track record of increasing revenue by 40%+ for our clients."
  },
  {
    question: 'What\'s your pricing structure?',
    answer: 'We offer customized pricing based on your specific needs and goals. Book a demo to discuss your requirements and get a detailed quote.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="border border-gray-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-800/50 transition-colors"
          >
            <span className="font-semibold">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 pt-0"
              >
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}