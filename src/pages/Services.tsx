import { motion } from 'framer-motion';
import { Mail, Share2, FileText, BarChart, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Marketing
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text">
                Solutions for Fitness Brands
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Comprehensive marketing services designed specifically for fitness and wellness brands,
              powered by advanced AI technology.
            </p>
            <Link
              to="/book-call"
              className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg transition-colors"
            >
              Get Started →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 bg-[#0F0F17]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email Marketing',
                description: 'AI-driven email campaigns that convert. We use advanced segmentation and personalization to deliver the right message at the right time.',
                features: [
                  'Automated campaigns',
                  'A/B testing',
                  'Personalized content',
                  'Performance tracking',
                  'List management'
                ]
              },
              {
                icon: Share2,
                title: 'Social Media Marketing',
                description: 'Strategic social media management that builds engagement and drives growth across all major platforms.',
                features: [
                  'Content creation',
                  'Community management',
                  'Paid advertising',
                  'Analytics & reporting',
                  'Influencer partnerships'
                ]
              },
              {
                icon: FileText,
                title: 'Content Strategy',
                description: 'Data-driven content that resonates with your audience and drives conversions.',
                features: [
                  'SEO optimization',
                  'Blog management',
                  'Video content',
                  'Content calendar',
                  'Performance analysis'
                ]
              },
              {
                icon: BarChart,
                title: 'Analytics & Reporting',
                description: 'Comprehensive analytics and insights to track and optimize your marketing performance.',
                features: [
                  'Real-time dashboards',
                  'Custom reporting',
                  'ROI tracking',
                  'Competitor analysis',
                  'Growth forecasting'
                ]
              },
              {
                icon: Target,
                title: 'Paid Advertising',
                description: 'Targeted advertising campaigns that maximize ROI and minimize customer acquisition costs.',
                features: [
                  'PPC management',
                  'Retargeting',
                  'Ad creative',
                  'Budget optimization',
                  'Performance tracking'
                ]
              },
              {
                icon: Users,
                title: 'Brand Strategy',
                description: 'Comprehensive brand strategy development to position your fitness brand for success.',
                features: [
                  'Brand positioning',
                  'Voice & tone',
                  'Visual identity',
                  'Market research',
                  'Competitive analysis'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A0A0F] p-8 rounded-lg border border-gray-800"
              >
                <service.icon className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0F0F17] p-12 rounded-lg border border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a free strategy call to discuss how we can help grow your fitness brand.
            </p>
            <Link
              to="/book-call"
              className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg transition-colors"
            >
              Schedule Your Call Now →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}