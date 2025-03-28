import { motion } from 'framer-motion';

interface ProcessTimelineProps {
  days: '3' | '7' | '30';
}

const processes = {
  '3': [
    {
      day: 1,
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business goals and current marketing performance'
    },
    {
      day: 2,
      title: 'Strategy Development',
      description: 'Create a customized AI-powered marketing strategy'
    },
    {
      day: 3,
      title: 'Implementation Plan',
      description: 'Set up tracking and prepare for execution'
    }
  ],
  '7': [
    {
      day: 1,
      title: 'Initial Consultation',
      description: 'Understanding your business needs and goals'
    },
    {
      day: 2,
      title: 'Data Analysis',
      description: 'Review of current marketing performance and metrics'
    },
    {
      day: 3,
      title: 'Strategy Development',
      description: 'Creating a customized marketing plan'
    },
    {
      day: 4,
      title: 'Content Planning',
      description: 'Developing content strategy and calendar'
    },
    {
      day: 5,
      title: 'Setup & Integration',
      description: 'Implementing tools and tracking systems'
    },
    {
      day: 6,
      title: 'Testing & Optimization',
      description: 'Running initial tests and making adjustments'
    },
    {
      day: 7,
      title: 'Launch & Monitor',
      description: 'Going live with the strategy and monitoring results'
    }
  ],
  '30': [
    {
      day: '1-3',
      title: 'Discovery Phase',
      description: 'Deep analysis and planning'
    },
    {
      day: '4-7',
      title: 'Strategy Development',
      description: 'Creating comprehensive marketing plan'
    },
    {
      day: '8-14',
      title: 'Implementation',
      description: 'Setting up systems and processes'
    },
    {
      day: '15-21',
      title: 'Testing & Optimization',
      description: 'Running campaigns and optimizing performance'
    },
    {
      day: '22-28',
      title: 'Scale & Grow',
      description: 'Scaling successful campaigns'
    },
    {
      day: '29-30',
      title: 'Review & Plan',
      description: 'Analyzing results and planning next steps'
    }
  ]
};

export default function ProcessTimeline({ days }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-900" />
      
      {processes[days].map((process, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
            <h3 className="text-xl font-bold mb-2">Day {process.day}</h3>
            <h4 className="text-purple-500 font-semibold mb-1">{process.title}</h4>
            <p className="text-gray-400">{process.description}</p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
}