"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/helpers/ThemeToggle"
import {
    Linkedin,
    Mail,
    Phone,
    Download,
    ExternalLink,
    Code,
    Database,
    Server,
    Globe,
    Award,
    Calendar,
    GraduationCap,
    User,
    Menu,
    X,
    ChevronDown,
    ArrowUp,
    MapPin,
    Clock,
    TrendingUp,
    Shield,
    Zap,
    Target,
    Users,
    CheckCircle,
} from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [showScrollTop, setShowScrollTop] = useState(false)
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)

            // Update active section based on scroll position
            const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"]
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const skills = {
        frontend: ["React.js", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
        backend: ["Node.js", "Nest.js", "Express.js", "GraphQL", "REST APIs"],
        database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Sequelize ORM"],
        devops: ["AWS", "S3", "EC2", "Jenkins", "CI/CD", "Linux", "Nginx", "Azure"],
        other: ["Socket.io", "WebRTC", "Git", "GitHub", "Communication Skills"],
    }

    const projects = [
        {
            title: "Thapala (Mailing Platform)",
            description:
                "Secure email platform with TypeScript, SQL/Sequelize ORM, automated deployments, and Azure Blob Storage integration.",
            tech: ["Node.js", "TypeScript", "SQL", "Sequelize", "Azure", "GitHub Actions"],
            type: "Professional",
            impact: "Enhanced email security by 60%",
        },
        {
            title: "E Coupons - Libya Mobile Recharge Portal",
            description:
                "Coupon management system with bulk Excel uploads, dealer wallet system, Redis caching, and Bull queues.",
            tech: ["Node.js", "MySQL", "Redis", "Bull Queue", "Excel Processing"],
            type: "Professional",
            impact: "Processed 10K+ transactions daily",
        },
        {
            title: "WMS/OMS/TMS Management System",
            description:
                "Logistics management system with dynamic RBAC, rate limiting, and 35% improved data-fetching speed.",
            tech: ["Node.js", "TypeScript", "MySQL", "GraphQL", "Redis", "Linux/Nginx"],
            type: "Professional",
            impact: "Reduced server downtime by 30%",
        },
        {
            title: "TASO (Trading Community App)",
            description: "Real-time chat and 1:1 video calls platform with Socket.IO and WebRTC for trading community.",
            tech: ["Socket.IO", "WebRTC", "PostgreSQL", "Sequelize", "Authentication"],
            type: "Professional",
            impact: "Supported 1000+ concurrent users",
        },
        {
            title: "MeetSpace (Video Conferencing)",
            description: "Privacy-focused video calling app supporting 6-8 participants with WebRTC/Mediasoup architecture.",
            tech: ["React-Vite", "Socket.io", "Node.js", "WebRTC", "Mediasoup"],
            type: "Professional",
            impact: "Zero authentication barriers",
        },
        {
            title: "Amazon Clone (E-commerce)",
            description: "Full-stack e-commerce app with Razorpay payments, product search/filters, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Razorpay", "Google Auth"],
            type: "Personal",
            impact: "Complete e-commerce solution",
        },
    ]

    const achievements = [
        { icon: TrendingUp, title: "70% Faster Deployments", description: "CI/CD pipeline optimization" },
        { icon: Shield, title: "40% Security Improvement", description: "Reduced unauthorized access" },
        { icon: Zap, title: "35% Performance Boost", description: "Data-fetching speed enhancement" },
        { icon: Target, title: "30% Less Downtime", description: "Server reliability improvement" },
    ]

    return (
        <div className="min-h-screen relative">
            {/* Fixed Background - Only for Light Mode */}
            <div className="fixed inset-0 -z-10 dark:hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 via-transparent to-pink-50/50" />
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
            </div>

            {/* Dark Mode Background */}
            <div className="fixed inset-0 -z-10 hidden dark:block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Navigation */}
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
                            onClick={() => scrollToSection("home")}
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
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-sm font-medium font-poppins transition-all duration-300 hover:text-blue-600 relative ${activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-700 dark:text-slate-300"
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
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left py-2 px-4 text-sm font-medium font-poppins text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="text-center lg:text-left"
                        >
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
                                Associate Software Engineer with <span className="font-semibold text-blue-600">2+ years</span> of
                                experience building scalable web applications.
                                <span className="block mt-2">🏆 Best Beginner Award winner at Ahex Technologies</span>
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                            >
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-medium px-8 py-3 rounded-full shadow-lg"
                                    >
                                        <Download className="mr-2 h-5 w-5" />
                                        Download Resume
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        onClick={() => scrollToSection("contact")}
                                        className="font-poppins font-medium px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-slate-800"
                                    >
                                        <Mail className="mr-2 h-5 w-5" />
                                        Get In Touch
                                    </Button>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start space-x-4">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/venureddy9493/", color: "hover:text-blue-600" },
                                    { icon: Globe, href: "https://nerchuko.in/", color: "hover:text-green-600" },
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
                                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-lg"
                                />

                                {/* Main image container */}
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                                        <img
                                            src="/placeholder.svg?height=400&width=400&text=Your+Professional+Photo"
                                            alt="Venu Gopal Reddy V"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                                >
                                    <Code className="h-6 w-6 text-blue-600" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                                >
                                    <Server className="h-6 w-6 text-purple-600" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [-5, 15, -5] }}
                                    transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-1/2 -left-8 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                                >
                                    <Database className="h-6 w-6 text-green-600" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
                        >
                            About Me
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeInLeft}>
                                <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                                    <CardContent className="space-y-6">
                                        <div className="flex items-center space-x-3 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                                <User className="h-6 w-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
                                                Professional Journey
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-inter text-lg">
                                            I am working as an{" "}
                                            <span className="font-semibold text-blue-600">Associate Software Engineer</span> with more than
                                            <span className="font-semibold text-purple-600"> 2 years of experience</span> in the Fullstack
                                            field. I work closely with project teams to build innovative solutions for client business
                                            requirements.
                                        </p>

                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                                            <div className="flex items-center space-x-3">
                                                <Award className="h-6 w-6 text-yellow-600" />
                                                <div>
                                                    <p className="font-semibold text-yellow-800 dark:text-yellow-200 font-poppins">
                                                        Best Beginner Award
                                                    </p>
                                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                                        Ahex Technologies - First Year Achievement
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                                <div className="text-2xl font-bold text-blue-600 font-poppins">6+</div>
                                                <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Company Projects</div>
                                            </div>
                                            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                                <div className="text-2xl font-bold text-purple-600 font-poppins">5+</div>
                                                <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                                                    Personal Projects
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeInLeft}>
                                <Card className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                                    <CardContent>
                                        <h3 className="text-lg font-semibold mb-4 flex items-center font-poppins">
                                            <Users className="h-5 w-5 text-green-600 mr-2" />
                                            Interests & Activities
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {["Cricket", "Yoga", "RSS Events", "Continuous Learning", "Personal Projects"].map(
                                                (interest, index) => (
                                                    <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                        <Badge variant="secondary" className="px-3 py-1 font-medium">
                                                            {interest}
                                                        </Badge>
                                                    </motion.div>
                                                ),
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Achievements */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInRight}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Card className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <CardContent className="flex items-center space-x-4">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                                <achievement.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-1">
                                                    {achievement.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-300 font-inter">{achievement.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}

                            <motion.div variants={fadeInRight}>
                                <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-xl">
                                    <CardContent>
                                        <h3 className="text-xl font-bold mb-3 font-poppins">Core Philosophy</h3>
                                        <p className="font-inter leading-relaxed">
                                            "Always aiming to give the best output on time with 100% effort. Passionate about creating
                                            efficient, scalable solutions that make a real impact."
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
                        >
                            Professional Experience
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="p-8 lg:p-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-2xl">
                            <CardHeader className="pb-8">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="mb-4 lg:mb-0">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <CardTitle className="text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                                Associate Software Engineer
                                            </CardTitle>
                                            <CardDescription className="text-xl font-semibold text-slate-700 dark:text-slate-300 font-poppins">
                                                Ahex Technologies
                                            </CardDescription>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="flex flex-col items-start lg:items-end space-y-2"
                                    >
                                        <div className="flex items-center text-slate-600 dark:text-slate-400 font-medium">
                                            <Calendar className="h-5 w-5 mr-2" />
                                            <span className="font-poppins">JUL 2023 - Present</span>
                                        </div>
                                        <div className="flex items-center text-slate-600 dark:text-slate-400">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span className="text-sm">Remote</span>
                                        </div>
                                        <div className="flex items-center text-green-600 dark:text-green-400">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span className="text-sm font-medium">1.5+ Years</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-8">
                                <motion.div
                                    variants={staggerContainer}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className="grid md:grid-cols-2 gap-8"
                                >
                                    {[
                                        {
                                            icon: Server,
                                            title: "DevOps & Infrastructure",
                                            color: "from-blue-500 to-cyan-500",
                                            items: [
                                                "Orchestrated CI/CD pipelines using Jenkins",
                                                "Automated server updates on Linux VMs with Nginx",
                                                "Achieved 70% faster deployment cycle",
                                                "Improved system uptime significantly",
                                            ],
                                        },
                                        {
                                            icon: Code,
                                            title: "Full Stack Development",
                                            color: "from-green-500 to-emerald-500",
                                            items: [
                                                "Backend development with Node.js",
                                                "Frontend development with React.js",
                                                "Created REST APIs and GraphQL queries",
                                                "Complex SQL queries with MySQL/PostgreSQL",
                                            ],
                                        },
                                        {
                                            icon: Database,
                                            title: "Database & Security",
                                            color: "from-purple-500 to-violet-500",
                                            items: [
                                                "Sequelize ORM implementation",
                                                "MongoDB database management",
                                                "RBAC (Role Based Access Control)",
                                                "Session management and API security",
                                            ],
                                        },
                                        {
                                            icon: Award,
                                            title: "Key Achievements",
                                            color: "from-yellow-500 to-orange-500",
                                            items: [
                                                "Best Beginner Award recipient",
                                                "6+ company projects completed",
                                                "5+ personal full-stack projects",
                                                "WhatsApp clone, Amazon clone, Video calling app",
                                            ],
                                        },
                                    ].map((section, index) => (
                                        <motion.div
                                            key={index}
                                            variants={scaleIn}
                                            whileHover={{ y: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Card className="h-full p-6 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300">
                                                <CardContent>
                                                    <div className="flex items-center mb-4">
                                                        <div
                                                            className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}
                                                        >
                                                            <section.icon className="h-6 w-6 text-white" />
                                                        </div>
                                                        <h4 className="font-bold text-slate-900 dark:text-white font-poppins text-lg">
                                                            {section.title}
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {section.items.map((item, itemIndex) => (
                                                            <motion.li
                                                                key={itemIndex}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                                                                className="flex items-start text-slate-600 dark:text-slate-300 text-sm font-inter"
                                                            >
                                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                                {item}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between mb-3">
                                            <CardTitle className="text-lg font-bold font-poppins leading-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                                                {project.title}
                                            </CardTitle>
                                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                <Badge
                                                    variant={project.type === "Professional" ? "default" : "secondary"}
                                                    className="font-medium"
                                                >
                                                    {project.type}
                                                </Badge>
                                            </motion.div>
                                        </div>
                                        <div className="text-sm text-green-600 dark:text-green-400 font-medium font-poppins">
                                            {project.impact}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <CardDescription className="text-sm leading-relaxed font-inter text-slate-600 dark:text-slate-300">
                                            {project.description}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.div key={techIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                    <Badge variant="outline" className="text-xs font-medium">
                                                        {tech}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
                        >
                            Technical Skills
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500", skills: skills.frontend },
                            { title: "Backend", icon: Server, color: "from-green-500 to-emerald-500", skills: skills.backend },
                            { title: "Database", icon: Database, color: "from-purple-500 to-violet-500", skills: skills.database },
                            { title: "DevOps & Cloud", icon: Globe, color: "from-orange-500 to-red-500", skills: skills.devops },
                            { title: "Other Skills", icon: Award, color: "from-yellow-500 to-amber-500", skills: skills.other },
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                            >
                                <Card className="h-full p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="flex items-center text-xl font-bold font-poppins">
                                            <div
                                                className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3`}
                                            >
                                                <category.icon className="h-5 w-5 text-white" />
                                            </div>
                                            {category.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.div
                                                    key={skillIndex}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
                        >
                            Education
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        />
                    </motion.div>

                    <div className="space-y-8">
                        {[
                            {
                                degree: "Bachelor of Engineering - Electronics and Communication",
                                institution: "Saveetha School of Engineering, Chennai",
                                year: "March 2022",
                                percentage: "70%",
                                color: "from-blue-500 to-purple-600",
                            },
                            {
                                degree: "Class 12th - Intermediate",
                                institution: "Sree Chaitanya Jr College, Kavali",
                                year: "March 2017",
                                percentage: "88.1%",
                                color: "from-green-500 to-emerald-600",
                            },
                        ].map((education, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <CardContent className="flex items-start space-x-6">
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-r ${education.color} rounded-2xl flex items-center justify-center`}
                                            >
                                                <GraduationCap className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins mb-2">
                                                {education.degree}
                                            </h3>
                                            <p className="text-lg text-slate-600 dark:text-slate-300 font-inter mb-3">
                                                {education.institution}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="flex items-center text-slate-500 dark:text-slate-400">
                                                    <Calendar className="h-4 w-4 mr-2" />
                                                    <span className="font-medium">{education.year}</span>
                                                </div>
                                                <Badge variant="outline" className="font-medium">
                                                    {education.percentage} Percentage
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-inter"
                        >
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                            technology.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl mb-6 font-poppins">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {[
                                        {
                                            icon: Mail,
                                            label: "Email",
                                            value: "venugopalreddy9493@gmail.com",
                                            href: "mailto:venugopalreddy9493@gmail.com",
                                            color: "blue",
                                        },
                                        { icon: Phone, label: "Phone", value: "+91 8008952100", href: "tel:+918008952100", color: "green" },
                                        {
                                            icon: Linkedin,
                                            label: "LinkedIn",
                                            value: "linkedin.com/in/venureddy9493",
                                            href: "https://www.linkedin.com/in/venureddy9493/",
                                            color: "purple",
                                        },
                                        {
                                            icon: Globe,
                                            label: "Website",
                                            value: "nerchuko.in",
                                            href: "https://nerchuko.in/",
                                            color: "orange",
                                        },
                                    ].map((contact, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center space-x-4 group cursor-pointer"
                                            onClick={() => window.open(contact.href, contact.href.startsWith("http") ? "_blank" : "_self")}
                                        >
                                            <div
                                                className={`w-12 h-12 bg-${contact.color}-100 dark:bg-${contact.color}-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                                            >
                                                <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                                            </div>
                                            <div>
                                                <p className="font-medium font-poppins">{contact.label}</p>
                                                <p className={`text-${contact.color}-600 hover:underline font-inter`}>{contact.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl mb-6 font-poppins">Let's Connect</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-slate-600 dark:text-slate-300 font-inter">
                                        Whether you're looking for a dedicated developer for your team, have a project in mind, or just want
                                        to connect with a fellow tech enthusiast, I'd love to hear from you.
                                    </p>

                                    <div className="space-y-4">
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-poppins font-medium"
                                                size="lg"
                                            >
                                                <Mail className="mr-2 h-4 w-4" />
                                                Send Email
                                            </Button>
                                        </motion.div>

                                        <div className="flex space-x-4">
                                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                                                <Button variant="outline" className="w-full bg-transparent font-poppins" asChild>
                                                    <a
                                                        href="https://www.linkedin.com/in/venureddy9493/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Linkedin className="mr-2 h-4 w-4" />
                                                        LinkedIn
                                                    </a>
                                                </Button>
                                            </motion.div>

                                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                                                <Button variant="outline" className="w-full bg-transparent font-poppins" asChild>
                                                    <a href="https://nerchuko.in/" target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        Portfolio
                                                    </a>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="text-center">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            className="text-sm text-slate-500 dark:text-slate-400 font-inter"
                                        >
                                            Available for freelance projects and full-time opportunities
                                        </motion.p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                Venu Gopal Reddy V
                            </h3>
                            <p className="text-slate-400 font-inter">Full Stack Developer</p>
                        </div>

                        <div className="flex justify-center space-x-6 mb-8">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/venureddy9493/" },
                                { icon: Globe, href: "https://nerchuko.in/" },
                                { icon: Mail, href: "mailto:venugopalreddy9493@gmail.com" },
                                { icon: Phone, href: "tel:+918008952100" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>

                        <Separator className="bg-slate-700 mb-6" />

                        <p className="text-slate-400 font-inter">
                            © 2024 Venu Gopal Reddy V. Built with React, Next.js, Tailwind CSS, and Framer Motion.
                        </p>
                    </motion.div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg z-40 transition-all duration-300"
                >
                    <ArrowUp className="h-6 w-6" />
                </motion.button>
            )}
        </div>
    )
}
