import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
}

export function BlogCard({ title, excerpt, imageUrl, date, author, category }: BlogCardProps) {
  return (
    <motion.article
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            {author}
          </div>
        </div>
      </div>
    </motion.article>
  );
}