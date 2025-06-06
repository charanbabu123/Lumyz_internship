import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { LoginModal } from "./Auth/LoginModal";

export function Hero() {
  const { user, profile, loading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const displayName =
    profile?.full_name || user?.email?.split("@")[0] || "there";

  return (
    <>
      <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 px-4 sm:px-6 lg:px-8">
        {/* Animated background elements - reduced for mobile */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth > 768 ? 20 : 10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {!loading && user && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <p className="text-lg sm:text-xl text-gray-600">
                  {getGreeting()}, {displayName}! 👋
                </p>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-transparent bg-clip-text px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {user
                ? "Welcome to Your AI Dashboard"
                : "AI-Powered Solutions for Tomorrow"}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {user
                ? "Access your personalized AI tools and insights for Education, Healthcare, and Agriculture"
                : "Transforming Education, Healthcare, and Agriculture through cutting-edge AI technology"}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {user ? (
                <>
                  <motion.a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    My Dashboard
                  </motion.a>
                  <motion.a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-base sm:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore AI Tools
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.a>
                </>
              ) : (
                <>
                  <motion.button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.button>
                  <motion.a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-base sm:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
