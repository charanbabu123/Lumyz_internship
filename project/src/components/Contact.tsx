import React, { useState } from "react";
import img1 from "../images/img1.png"; // Navigate one level up to access the images folder
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log the form data (in a real app, this would be sent to your backend)
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. Vakula Rani J
                </h3>
                <p className="text-gray-600 mb-1">MCA, M.Phil., Ph.D.</p>
                <div className="space-y-1 text-gray-600">
                  <p>Professor, Head I&E, Dept. of MCA</p>
                  <p>President - Institution Innovation Council</p>
                  <p>Head - KSCST CMRIT IPR CELL</p>
                  <p>
                    Coordinator - Mentor Manatee Program, MoE's Innovation Cell
                  </p>
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

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-green-700">
                  Message sent successfully! We'll get back to you soon.
                </span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
              >
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-red-700">
                  Failed to send message. Please try again.
                </span>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              * Required fields. We'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
