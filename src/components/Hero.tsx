"use client"
import ProfileImg from "@/assets/MyImage.jpeg"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Code, Server, Database, ChevronDown } from "lucide-react"
import { fadeInUp, staggerContainer } from "./animationVariants"
import { Linkedin, Briefcase, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY <= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center lg:text-left">
            <motion.div variants={fadeInUp} className="mb-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium font-poppins mb-4"
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 dark:text-white mb-4 leading-tight"
            >
              Venu Gopal Reddy
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2"
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-inter max-w-2xl mx-auto lg:mx-0"
            >
              Associate Software Engineer with <span className="font-semibold text-blue-600">2+ years </span>
              of experience building scalable web applications.
              <span className=""> Awarded with Bright Beginner and Star Performer at Ahex Technologies.</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.canva.com/design/DAFj-JlZs_I/lYKRtoro-a54diJcflWvuA/view?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-medium px-8 py-3 rounded-full shadow-lg"
                >
                  Check My Resume
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/venu123143"
                  className="font-poppins font-medium px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-slate-800"
                >
                  GitHub
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/venureddy9493/", color: "hover:text-blue-600" },
                { icon: Briefcase, href: "https://www.fiverr.com/sellers/venu_9090/", color: "hover:text-green-600" },
                { icon: Mail, href: "mailto:venugopalreddy9493@gmail.com", color: "hover:text-red-600" },
                { icon: Phone, href: "tel:+918008952100", color: "hover:text-purple-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background decorations */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-lg"
              />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                  <img src={ProfileImg} alt="Venu Gopal Reddy V" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <Code className="h-6 w-6 text-blue-600" />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <Server className="h-6 w-6 text-purple-600" />
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-8 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <Database className="h-6 w-6 text-green-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex flex-col items-center space-y-2 text-slate-400 dark:text-slate-500"
            >
              <span className="text-sm font-poppins">Scroll to explore</span>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
