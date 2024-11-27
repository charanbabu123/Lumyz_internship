import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}