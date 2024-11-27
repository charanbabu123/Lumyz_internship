import img1 from '../images/img1.png'; // Navigate one level up to access the images folder
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to learn more about our AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={img1}
                  alt="Dr. Vakula Rani J"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Vakula Rani J</h3>
                <p className="text-gray-600 mb-1">MCA, M.Phil., Ph.D.</p>
                <div className="space-y-1 text-gray-600">
                  <p>Professor, Head I&E, Dept. of MCA</p>
                  <p>President - Institution Innovation Council</p>
                  <p>Head - KSCST CMRIT IPR CELL</p>
                  <p>Coordinator - Mentor Manatee Program, MoE's Innovation Cell</p>
                  <p>CMR Institute of Technology (NAAC A++ Accredited)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-6 h-6 text-blue-600" />
                <a
                  href="mailto:vakula.r@cmrit.ac.in"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  vakula.r@cmrit.ac.in
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}