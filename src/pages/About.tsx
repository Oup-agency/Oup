import { motion } from 'framer-motion';
export default function About() {
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
              Transforming Fitness Marketing
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text">
                With AI Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge AI technology to deliver 
              exceptional results for fitness and wellness brands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://imgur.com/a/7OjEsHh"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
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
      <section className="py-20 px-4 bg-[#0F0F17]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Specialized knowledge in fitness and wellness marketing'
              },
              {
                title: 'Data-Driven Approach',
                description: 'AI-powered insights for optimal campaign performance'
              },
              {
                title: 'Proven Results',
                description: '40%+ average revenue increase for our clients'
              },
              {
                title: 'Custom Strategy',
                description: 'Tailored solutions for your unique business needs'
              },
              {
                title: 'Transparent Reporting',
                description: 'Clear metrics and regular performance updates'
              },
              {
                title: 'Continuous Optimization',
                description: 'Always improving and refining for better results'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A0A0F] p-6 rounded-lg border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-400">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'Michael Chen',
                role: 'Head of AI Strategy',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'Emma Williams',
                role: 'Marketing Director',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
}