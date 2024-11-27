import React from 'react';
import { motion } from 'framer-motion';
import { IndustryCard } from './IndustryCard';

export function Industries() {
  const industries = [
    {
      title: 'Education Sector',
      description: 'Transforming learning experiences through AI-powered solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80',
      stats: [
        { label: 'Students Impacted', value: '100K+' },
        { label: 'Success Rate', value: '95%' },
        { label: 'Institutions', value: '500+' },
        { label: 'Countries', value: '25+' }
      ]
    },
    {
      title: 'Healthcare Industry',
      description: 'Revolutionizing patient care with advanced AI diagnostics.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      stats: [
        { label: 'Patients Served', value: '1M+' },
        { label: 'Accuracy Rate', value: '99%' },
        { label: 'Hospitals', value: '200+' },
        { label: 'AI Models', value: '50+' }
      ]
    },
    {
      title: 'Agriculture Sector',
      description: 'Optimizing farming with precision agriculture and AI analytics.',
      imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
      stats: [
        { label: 'Farms Enhanced', value: '50K+' },
        { label: 'Yield Increase', value: '40%' },
        { label: 'Resources Saved', value: '30%' },
        { label: 'ROI', value: '3x' }
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering innovative AI solutions across key sectors to drive digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}