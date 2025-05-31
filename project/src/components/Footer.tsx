import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronRight,
  Brain,
  BookOpen,
  Heart,
  Sprout,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Industries", href: "/industries" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "AI in Education", href: "/services", icon: BookOpen },
      { name: "AI in Healthcare", href: "/services", icon: Heart },
      { name: "AI in Agriculture", href: "/services", icon: Sprout },
      { name: "Custom AI Solutions", href: "/services", icon: Brain },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
      color: "hover:text-blue-500",
    },
    { name: "Twitter", href: "#", icon: Twitter, color: "hover:text-blue-400" },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
    { name: "YouTube", href: "#", icon: Youtube, color: "hover:text-red-500" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@lumyz.ai", href: "mailto:contact@lumyz.ai" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    {
      icon: MapPin,
      text: "123 AI Innovation Drive, Tech City, TC 12345",
      href: "#",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stay Updated with AI Innovations
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest AI insights,
              industry trends, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
              >
                Subscribe
                <ChevronRight className="ml-1 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 text-transparent bg-clip-text">
                Lumyz
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming the future through AI-powered solutions that bridge
              the gap between technology and human potential across education,
              healthcare, and agriculture.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 bg-gray-800 rounded-lg text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <service.icon className="h-4 w-4 mr-2 text-blue-400" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-start group"
                  >
                    <contact.icon className="h-5 w-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span className="group-hover:underline">
                      {contact.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Support Links */}
            <div className="mt-8">
              <h4 className="text-md font-medium mb-4 text-gray-200">
                Support
              </h4>
              <ul className="space-y-2">
                {footerLinks.support.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Lumyz. All rights reserved. Built with ❤️ for the
              future of AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {footerLinks.support.slice(-3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
