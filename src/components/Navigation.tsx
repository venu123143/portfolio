"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/helpers/ThemeToggle"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl z-50 border-b border-white/20 dark:border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleScrollToSection("home")}
          >
            Venu Gopal Reddy
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => handleScrollToSection(item.toLowerCase())}
                className={`text-sm lg:cursor-pointer font-medium font-poppins transition-all duration-300 hover:text-blue-600 relative ${
                  activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="md:hidden overflow-hidden border-t border-white/20 dark:border-slate-700/50"
        >
          <div className="py-4 space-y-2">
            {["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 10 }}
                onClick={() => handleScrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 px-4 text-sm font-medium font-poppins text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
