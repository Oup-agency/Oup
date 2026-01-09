import { motion } from "framer-motion";
import { Mail, Share2, FileText, BarChart, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

import card1 from '../components/images/card1.png';
import card2 from "../components/images/card2.png";
import card3 from "../components/images/card3.png";

export default function Services() {
  const services = [
    {
      icon: Mail,
      image: card1,
      title: "Email Marketing",
      description:
        "AI-driven email campaigns that convert using advanced personalization.",
      features: [
        "Automated campaigns",
        "A/B testing",
        "Personalized content",
        "Performance tracking",
        "List management",
      ],
    },
    {
      icon: Share2,
      image: card2,
      title: "Social Media Marketing",
      description:
        "Strategic social media management that builds engagement and growth.",
      features: [
        "Content creation",
        "Community management",
        "Paid advertising",
        "Analytics & reporting",
        "Influencer partnerships",
      ],
    },
    {
      icon: FileText,
      image: card3,
      title: "Content Strategy",
      description:
        "Data-driven content that resonates and drives conversions.",
      features: [
        "SEO optimization",
        "Blog management",
        "Video content",
        "Content calendar",
        "Performance analysis",
      ],
    },
    {
      icon: BarChart,
      image: card1,
      title: "Analytics & Reporting",
      description:
        "Deep insights to track and optimize your marketing performance.",
      features: [
        "Real-time dashboards",
        "Custom reporting",
        "ROI tracking",
        "Competitor analysis",
        "Growth forecasting",
      ],
    },
    {
      icon: Target,
      image: card2,
      title: "Paid Advertising",
      description:
        "High-ROI ad campaigns with precise targeting and optimization.",
      features: [
        "PPC management",
        "Retargeting",
        "Ad creative",
        "Budget optimization",
        "Performance tracking",
      ],
    },
    {
      icon: Users,
      image: card3,
      title: "Brand Strategy",
      description:
        "Clear positioning to help your fitness brand stand out.",
      features: [
        "Brand positioning",
        "Voice & tone",
        "Visual identity",
        "Market research",
        "Competitive analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      {/* Services Section */}
      <section className="py-20 px-4 bg-[#0F0F17]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#0A0A0F] rounded-xl border border-gray-800 overflow-hidden"
              >
                {/* CARD IMAGE */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-8">
                  <service.icon className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-400"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0F0F17] p-12 rounded-lg border border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a free strategy call to grow your fitness brand.
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
