import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Lightbulb } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '25+', label: 'Countries' },
    { icon: Lightbulb, value: '100+', label: 'AI Solutions' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Pioneering the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                AI Innovation
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              At Lumyz IT Solutions, we're passionate about harnessing the power of artificial intelligence
              to solve real-world challenges. Our team of experts combines cutting-edge technology with
              deep industry knowledge to deliver transformative solutions.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in creating sustainable, scalable, and ethical AI solutions that empower
              businesses and communities alike. Our commitment to innovation and excellence has made us
              a trusted partner for organizations worldwide.
            </p>
            <motion.button
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                key={label}
                className="p-6 bg-gray-50 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                <div className="text-gray-600">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}