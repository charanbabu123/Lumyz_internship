import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Heart,
  Sprout,
  ArrowRight,
  Check,
} from "lucide-react";

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: "AI in Education",
      description:
        "Transform learning experiences with personalized AI tutoring, intelligent assessment systems, and adaptive learning platforms.",
      features: [
        "Personalized Learning Paths",
        "Intelligent Tutoring Systems",
        "Automated Assessment & Grading",
        "Learning Analytics & Insights",
        "Virtual Classroom Assistants",
        "Content Recommendation Engine",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "AI in Healthcare",
      description:
        "Revolutionize healthcare delivery with AI-powered diagnostic tools, treatment recommendations, and patient monitoring systems.",
      features: [
        "Medical Image Analysis",
        "Predictive Health Analytics",
        "Treatment Recommendation Systems",
        "Drug Discovery Assistance",
        "Patient Risk Assessment",
        "Telemedicine Support",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Sprout,
      title: "AI in Agriculture",
      description:
        "Optimize crop yields and farming efficiency with precision agriculture, crop monitoring, and smart farming solutions.",
      features: [
        "Crop Health Monitoring",
        "Yield Prediction Models",
        "Pest & Disease Detection",
        "Soil Analysis & Optimization",
        "Weather Pattern Analysis",
        "Supply Chain Optimization",
      ],
      color: "from-green-500 to-green-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We start by understanding your specific needs and challenges to design the perfect AI solution.",
    },
    {
      step: "02",
      title: "Development",
      description:
        "Our expert team develops custom AI models and solutions tailored to your requirements.",
    },
    {
      step: "03",
      title: "Integration",
      description:
        "We seamlessly integrate the AI solution into your existing systems and workflows.",
    },
    {
      step: "04",
      title: "Training & Support",
      description:
        "We provide comprehensive training and ongoing support to ensure successful adoption.",
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
              Our AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover how our cutting-edge AI solutions can transform your
              industry and unlock new possibilities for growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r ${service.color} p-8 text-white`}
                >
                  <service.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-blue-100">{service.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:shadow-lg transition-all`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your AI solution is
              delivered on time, within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest AI technologies and frameworks to build
              robust, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "TensorFlow",
              "PyTorch",
              "OpenAI",
              "Hugging Face",
              "AWS AI",
              "Google AI",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-900">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can transform your business and
              drive innovation in your industry.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Contact Our Experts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
