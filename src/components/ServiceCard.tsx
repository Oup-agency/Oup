import { useState } from 'react';
import { Mail, Share2, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


interface ServiceCardProps {
  title: string;
  description: string;
  icon: 'Mail' | 'Share2' | 'FileText';
}

const icons = {
  Mail,
  Share2,
  FileText
};



export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F0F17] p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
    >
      <Icon className="h-8 w-8 text-purple-500 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-purple-500 flex items-center hover:text-purple-400 transition-colors"
      >
        Learn More
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-800"
          >
            <h4 className="font-semibold mb-2">What's included:</h4>
            <ul className="text-gray-400 space-y-2">
              <li>• Strategy development</li>
              <li>• Implementation plan</li>
              <li>• Performance tracking</li>
              <li>• Regular optimization</li>
              <li>• Monthly reporting</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}