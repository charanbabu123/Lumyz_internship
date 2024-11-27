import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';

export function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Education: Personalized Learning at Scale',
      excerpt: 'Discover how AI is revolutionizing education through adaptive learning systems and personalized curriculum development.',
      imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
      date: 'Mar 15, 2024',
      author: 'Dr. Sarah Chen',
      category: 'Education'
    },
    {
      title: 'AI-Powered Diagnostics: A Healthcare Revolution',
      excerpt: 'Exploring how artificial intelligence is enhancing medical diagnosis accuracy and patient care outcomes.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
      date: 'Mar 12, 2024',
      author: 'Dr. James Wilson',
      category: 'Healthcare'
    },
    {
      title: 'Smart Farming: AI Solutions for Sustainable Agriculture',
      excerpt: 'How AI and IoT are working together to create more sustainable and efficient farming practices.',
      imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
      date: 'Mar 10, 2024',
      author: 'Alex Martinez',
      category: 'Agriculture'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and innovations in AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}