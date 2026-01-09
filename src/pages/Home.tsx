import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Share2, FileText, BarChart, Target, Users, CheckCircle2, ArrowRight, Youtube, Search, Brain, BarChart as ChartBar, Users2, Zap, Sparkles, Trophy, Rocket } from 'lucide-react';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQ from '../components/FAQ';
import otabek from '../pages/images/otabek.jpg'
import ceo from '../pages/images/founder.jpeg'
import behruz from '../pages/images/behruz.jpeg'
import mutalibov from '../pages/images/mutalibov.jpeg'
import samandar from './samandar.png'
import card1 from '../components/images/card1.png'
import card2 from '../components/images/card2.png'
import card3 from '../components/images/card3.png'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-2 text-gray-300"
  >
    <CheckCircle2 className="text-purple-500 w-5 h-5 flex-shrink-0" />
    <span>{children}</span>
  </motion.div>
);

const WhyChooseUsCard = ({ 
  icon: Icon, 
  title, 
  description, 
  stats,
  index 
}: { 
  icon: any, 
  title: string, 
  description: string,
  stats?: { label: string, value: string },
  index: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
    <div className="relative bg-[#0A0A0F] p-8 rounded-lg border border-gray-800 group-hover:border-purple-500 transition-all duration-300">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-3 rounded-lg">
            <Icon className="h-8 w-8 text-purple-400" />
          </div>
          {stats && (
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {stats.value}
              </div>
              <div className="text-sm text-gray-500">{stats.label}</div>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  const [selectedDays, setSelectedDays] = useState<'3' | '7' | '30'>('7');

  const whyChooseUsItems = [
    {
      icon: Trophy,
      title: 'Industry Leaders',
      description: 'Recognized as top performers in fitness marketing with proven success across multiple brands.',
      stats: { value: '40%+', label: 'Revenue Growth' }
    },
    {
      icon: Brain,
      title: 'AI-Powered Innovation',
      description: 'Cutting-edge AI algorithms that continuously optimize your campaigns for maximum ROI.',
      stats: { value: '24/7', label: 'Optimization' }
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced audience segmentation that finds your ideal customers with laser precision.',
      stats: { value: '2.1x', label: 'ROAS Increase' }
    },
    {
      icon: Rocket,
      title: 'Rapid Scaling',
      description: 'Proven framework for scaling fitness brands from 6 to 7 figures and beyond.',
      stats: { value: '3x', label: 'Growth Rate' }
    },
    {
      icon: Sparkles,
      title: 'Creative Excellence',
      description: 'Data-driven creative strategies that capture attention and drive conversions.',
      stats: { value: '85%', label: 'CTR Boost' }
    },
    {
      icon: Users2,
      title: 'Dedicated Experts',
      description: 'Your success team of marketing veterans focused on your growth goals.',
      stats: { value: '12+', label: 'Years Exp.' }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
        <motion.h1 
  {...fadeInUp} 
  transition={{ delay: 0.1 }} 
  className="text-6xl md:text-8xl font-bold text-white w-full mb-6"
>
  OUP Agency
</motion.h1>

          <motion.h1 {...fadeInUp} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold mb-6">
            Max ROI - Lower CAC.
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-transparent bg-clip-text">
              Data-Driven Growth
            </span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.4 }} className="text-gray-400 text-xl mb-8">
          We create effective digital marketing strategies for fitness and recovery brands. Our goal is to connect our clients’ products with the right audience, increasing sales and scaling their businesses. With AI-driven approach, we optimize customer acquisition costs and maximize ROI.”
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="flex justify-center">
            <Link
              to="/book-call"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Book a Free Demo Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-gray-400">Transforming Fitness Marketing with AI Innovation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg blur-xl opacity-75" />
              <img
                src = {otabek}
                alt="Founder recording podcast"
                className="rounded-lg shadow-xl relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-400">
                Founded in 2023, OUP Agency emerged from a simple observation: fitness brands 
                needed a more data-driven, results-focused approach to marketing. We combined 
                our passion for fitness with expertise in AI and digital marketing to create 
                a unique agency model.
              </p>
              <p className="text-gray-400">
                Today, we're proud to have helped numerous fitness brands achieve remarkable 
                growth through our innovative AI-powered marketing strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A0A0F] via-[#0F0F17] to-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5 mix-blend-overlay" />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Science Behind Our
              <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Marketing Magic
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven marketing strategies to deliver 
              exceptional results for fitness brands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <WhyChooseUsCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                stats={item.stats}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#0F0F17]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      Our Core Services
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* SERVICE 1 */}
      <motion.div className="bg-[#0A0A0F] rounded-xl border border-gray-800 overflow-hidden">
        <img
          src={card1}
          alt="Performance Marketing"
          className="w-full h-56 object-cover"
        />
        <div className="p-8">
          <Target className="text-purple-500 w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Performance Marketing
          </h3>
          <FeatureItem>Lower CAC using AI optimization</FeatureItem>
          <FeatureItem>High-converting funnels</FeatureItem>
          <FeatureItem>Audience segmentation</FeatureItem>
        </div>
      </motion.div>

      {/* SERVICE 2 */}
      <motion.div className="bg-[#0A0A0F] rounded-xl border border-gray-800 overflow-hidden">
        <img
          src={card2}
          alt="Meta & Google Ads"
          className="w-full h-56 object-cover"
        />
        <div className="p-8">
          <Share2 className="text-purple-500 w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Meta & Google Ads
          </h3>
          <FeatureItem>Facebook & Instagram Ads</FeatureItem>
          <FeatureItem>YouTube & Search Ads</FeatureItem>
          <FeatureItem>AI bidding strategies</FeatureItem>
        </div>
      </motion.div>

      {/* SERVICE 3 */}
      <motion.div className="bg-[#0A0A0F] rounded-xl border border-gray-800 overflow-hidden md:col-span-2">
        <img
          src={card3}
          alt="AI Scaling"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <Brain className="text-purple-500 w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            AI-Driven Scaling
          </h3>
          <FeatureItem>Predictive analytics</FeatureItem>
          <FeatureItem>Profit-first scaling</FeatureItem>
          <FeatureItem>Automated optimization</FeatureItem>
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* Process Section */}
      <section id="process" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">See how we transform your marketing performance</p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            {['3', '7', '30'].map((days) => (
              <motion.button
                key={days}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedDays(days as '3' | '7' | '30')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedDays === days
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {days} Days
              </motion.button>
            ))}
          </div>

          <ProcessTimeline days={selectedDays} />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-400">Meet the experts behind our success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Otabek Otanazarov',
                role: 'CEO & Founder',
                image: ceo,
              },
              {
                name: 'Samandar Zokirov',
                role: 'Head of AI Strategy',
                image: samandar
              },
              {
                name: 'Mutalibov Zukhriddin',
                role: 'Marketing Director',
                image: mutalibov
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-[#0F0F17] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about our services</p>
          </motion.div>

          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-purple-900/20 via-[#0F0F17] to-blue-900/20 p-12 rounded-lg border border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
            <p className="text-xl text-gray-400 mb-4">
              Book a free strategy call to discuss how we can help grow your fitness brand.
            </p>
            <div className="space-y-4 mb-8">
              <FeatureItem>Deep-Dive Analysis of Your Ad Performance</FeatureItem>
              <FeatureItem>Advanced E-Commerce Advertising Strategies</FeatureItem>
              <FeatureItem>AI & Data-Driven Optimization for Lower CAC & Higher ROI</FeatureItem>
              <FeatureItem>15-Minute Call – No Sales, Just Real Value</FeatureItem>
            </div>
            <Link
              to="/book-call"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full text-lg transition-all duration-300"
            >
              Book Your Free Demo Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}