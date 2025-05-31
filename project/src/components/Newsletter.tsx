import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  title = "Stay Updated with AI Innovations",
  description = "Subscribe to our newsletter and get the latest AI insights, industry trends, and product updates delivered to your inbox.",
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log the email (in a real app, this would be sent to your backend)
      console.log("Newsletter subscription:", email);

      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        </div>

        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center max-w-md mx-auto"
          >
            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            <span className="text-green-700">
              Successfully subscribed! Check your email for confirmation.
            </span>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center max-w-md mx-auto"
          >
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <span className="text-red-700">
              Subscription failed. Please try again.
            </span>
          </motion.div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 disabled:opacity-50"
          />
          <motion.button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <Send className="ml-1 h-4 w-4" />
              </>
            )}
          </motion.button>
        </form>

        <p className="mt-4 text-sm text-blue-200">
          Join 10,000+ AI enthusiasts. Unsubscribe anytime.
        </p>
      </motion.div>
    </div>
  );
};
