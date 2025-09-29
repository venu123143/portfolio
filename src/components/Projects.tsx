import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer, scaleIn, growBar } from "./animationVariants"

const projects = [
  {
    title: "Thapala (Mailing Platform)",
    description:
      "Secure email platform with TypeScript, SQL/Sequelize ORM, automated deployments, and Azure Blob Storage integration.",
    tech: ["Node.js", "TypeScript", "SQL", "Sequelize", "Azure", "GitHub Actions"],
    type: "Professional",
    url: "https://tapp.ahexlab.com/#/",
    impact: "Enhanced email security by 60%",
  },
  {
    title: "TalentPrise (Job Portal)",
    description:
      "Its a Nest js Microservice Application. With full typescript support with the Graphql and Grpc Proto buffers",
    tech: ["Nest.js", "TypeScript", "Microservice", "PostgreSQL", "TypeOrm", "Graphql", "Grpc"],
    type: "Professional",
    url: "https://www.talentprise.com/",
    impact: "Search Jobs with the Ai Recommendations.",
  },
  {
    title: "E Coupons - Libya Mobile Recharge Portal",
    description:
      "Coupon management system with bulk Excel uploads, dealer wallet system, Redis caching, and Bull queues.",
    tech: ["Node.js", "MySQL", "Redis", "Bull Queue", "Excel Processing"],
    type: "Professional",
    url: "https://vms.lahtha.ly/#/login",
    impact: "Processed 10K+ transactions daily",
  },
  {
    title: "WMS/OMS/TMS Management System",
    description:
      "Logistics management system with dynamic RBAC, rate limiting, and 35% improved data-fetching speed.",
    tech: ["Node.js", "TypeScript", "MySQL", "GraphQL", "Redis", "Linux/Nginx"],
    type: "Professional",
    url: "http://143.244.132.143:7200/#/",
    impact: "Reduced server downtime by 30%",
  },
  {
    title: "TASO (Trading Community App)",
    description: "Real-time chat and 1:1 video calls platform with Socket.IO and WebRTC for trading community.",
    tech: ["Socket.IO", "WebRTC", "PostgreSQL", "Sequelize", "Authentication"],
    type: "Professional",
    url: "https://play.google.com/store/apps/details?id=com.taso.main&hl=en",
    impact: "Supported 1000+ concurrent users",
  },
  {
    title: "Dosen (Its An mentoring platform )",
    description:
      "An intelligent platform that aligns employees personal goals with organizational objectives.",
    tech: [
      "React.js", "Node.js", "Azure Serverless", "Azure Functions", "MongoDB"
    ],
    type: "Professional",
    url: "https://beta.dosen.io/",
    impact: "Enhanced team productivity With Ai.",
  },
  {
    title: "Amazon Clone (E-commerce)",
    description: "Full-stack e-commerce app with Razorpay payments, product search/filters, and admin dashboard.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Razorpay", "Google Auth"],
    type: "Personal",
    url: "https://onlinestore.nerchuko.in/",
    impact: "Complete e-commerce solution",
  },
  {
    title: "MeetSpace (Video Conferencing)",
    description: "Privacy-focused video calling app supporting 10-12 participants with WebRTC/Mediasoup architecture.",
    tech: ["React-Vite", "Tailwind css", "Socket.io", "Node.js", "WebRTC", "Mediasoup"],
    type: "Personal",
    url: "https://meetspace.nerchuko.in/",
    impact: "Zero authentication barriers",
  },
  {
    title: "Achievers Library - Study Space Management Platform",
    description: `A complete admin dashboard and landing page for a study space business. 
          The system manages student subscriptions, payments, queries and provides detailed analytics.`,
    tech: [
      "React", "TypeScript", "ShadCN UI", "MySQL", "Sequelize",
      "API Caching", "Tailwind CSS", "Node.js"
    ],
    url: "https://achieverslibraryy.in/",
    type: "Personal",
    impact: "Comprehensive study space management",
  },
  {
    title: "WhatsApp Clone - Real Time Messaging App with Modern Features",
    description: `This WhatsApp Clone is a feature-rich messaging application designed with 
      a modern technology stack. It mirrors WhatsApp's core functionalities, offering secure user
      authentication, real-time chat, and media-sharing capabilities.`,
    tech: [
      "React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Tailwind CSS"
    ],
    type: "Personal",
    url: "https://vchat.nerchuko.in/",
    impact: "Feature-rich real-time messaging",
  },
  {
    title: "FileFlow - Cloud Storage & File Management Platform",
    description: "A comprehensive file management system similar to Google Drive, secure file sharing, and advanced storage management features.",
    tech: [
      "Bun", "React", "Hono", "PostgreSQL", "AWS S3", "Socket.io", "Redis", "BullMQ", "Shadn Cn UI", "TanStack Query", "Zustand"
    ],
    type: "Personal",
    url: "https://fileflow.nerchuko.in/",
    impact: "Complete cloud storage solution",
  },
]

const Projects = () => {
  const handleProjectClick = (url: string) => window.open(url, "_blank")

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={growBar}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="block space-y-2 sm:flex items-start justify-between">
                    <CardTitle
                      onClick={() => handleProjectClick(project.url)}
                      className="lg:cursor-pointer text-base sm:text-lg font-bold font-poppins leading-tight text-slate-900 dark:text-white dark:group-hover:text-blue-300 group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {project.title}
                    </CardTitle>

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Badge variant={project.type === "Professional" ? "default" : "secondary"} className=" font-medium text-xs sm:text-sm">
                        {project.type}
                      </Badge>
                    </motion.div>
                  </div>

                  <div className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium font-poppins">
                    {project.impact}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4">
                  <CardDescription className="text-xs sm:text-sm leading-relaxed font-inter text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
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
  )
}

export default Projects
