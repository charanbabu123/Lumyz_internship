import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Sprout } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: 'Education',
      description: 'Revolutionizing learning through AI-powered platforms and personalized education solutions.',
      icon: Brain,
      features: [
        'AI-powered learning platforms',
        'Virtual tutors with real-time feedback',
        'Educational analytics dashboard',
        'Personalized learning paths'
      ]
    },
    {
      title: 'Healthcare',
      description: 'Transforming healthcare delivery with advanced AI diagnostics and predictive analytics.',
      icon: Activity,
      features: [
        'AI diagnostic tools',
        'Virtual health assistants',
        'Predictive healthcare analytics',
        'Remote patient monitoring'
      ]
    },
    {
      title: 'Agriculture',
      description: 'Optimizing farming practices with smart AI solutions and precision agriculture.',
      icon: Sprout,
      features: [
        'Smart farming solutions',
        'Pest and disease detection',
        'Precision agriculture analytics',
        'Crop yield optimization'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering industries with cutting-edge AI solutions that drive innovation and efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}