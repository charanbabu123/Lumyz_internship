import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Sprout,
  Building,
  Factory,
  Globe,
} from "lucide-react";

export const IndustriesPage: React.FC = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Transforming learning with AI-powered educational tools.",
      stats: "500+ Educational Institutions",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Revolutionizing patient care with intelligent medical solutions.",
      stats: "100+ Healthcare Facilities",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Optimizing crop yields with smart farming technologies.",
      stats: "1000+ Farms Assisted",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Building,
      title: "Financial Services",
      description: "Enhancing financial decision-making with AI analytics.",
      stats: "50+ Financial Institutions",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Improving efficiency with predictive maintenance and quality control.",
      stats: "200+ Manufacturing Plants",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Retail & E-commerce",
      description:
        "Personalizing customer experiences with recommendation systems.",
      stats: "300+ Retail Businesses",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-transparent bg-clip-text">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI solutions are transforming diverse industries
              and creating value across different sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r ${industry.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                >
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <p className="text-sm font-semibold text-blue-600">
                  {industry.stats}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
