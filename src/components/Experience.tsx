"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Server, Code, Database, Award, CheckCircle, Calendar, MapPin, Clock } from "lucide-react"
import { fadeInRight, fadeInLeft, staggerContainer, scaleIn } from "./animationVariants"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
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
                      "Bright Beginner Award recipient",
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
                          <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}>
                            <section.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-white font-poppins text-lg">{section.title}</h4>
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
  )
}
