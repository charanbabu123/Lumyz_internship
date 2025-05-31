import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Brain,
  BookOpen,
  Heart,
} from "lucide-react";

export const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Education: Transforming Learning Experiences",
      excerpt:
        "Discover how artificial intelligence is revolutionizing education through personalized learning, intelligent tutoring systems, and adaptive assessments.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Education",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "AI-Powered Healthcare: Improving Patient Outcomes",
      excerpt:
        "Explore the latest developments in AI healthcare applications, from diagnostic imaging to predictive analytics and personalized treatment plans.",
      author: "Dr. Michael Chen",
      date: "2024-01-10",
      category: "Healthcare",
      icon: Heart,
      color: "from-red-500 to-red-600",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Smart Agriculture: How AI is Feeding the Future",
      excerpt:
        "Learn about precision farming, crop monitoring, and yield optimization through advanced AI technologies and IoT sensors.",
      author: "Prof. Emily Rodriguez",
      date: "2024-01-05",
      category: "Agriculture",
      icon: Brain,
      color: "from-green-500 to-green-600",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Machine Learning Best Practices for Beginners",
      excerpt:
        "A comprehensive guide to getting started with machine learning, covering essential concepts, tools, and practical implementation tips.",
      author: "Alex Thompson",
      date: "2024-01-01",
      category: "Technology",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Ethical AI: Building Responsible AI Systems",
      excerpt:
        "Understanding the importance of ethics in AI development and how to create fair, transparent, and accountable AI solutions.",
      author: "Dr. Lisa Wang",
      date: "2023-12-28",
      category: "Ethics",
      icon: Brain,
      color: "from-indigo-500 to-indigo-600",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "The Role of AI in Climate Change Solutions",
      excerpt:
        "Exploring how artificial intelligence can help address climate challenges through smart energy management and environmental monitoring.",
      author: "Dr. James Miller",
      date: "2023-12-20",
      category: "Environment",
      icon: Brain,
      color: "from-teal-500 to-teal-600",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Agriculture",
    "Technology",
    "Ethics",
    "Environment",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
              AI Insights Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in
              artificial intelligence across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-r ${post.color} p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <post.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${post.color} text-white px-4 py-2 rounded-lg font-semibold flex items-center hover:shadow-lg transition-all`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Updated with AI Trends
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest AI insights,
              research updates, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
