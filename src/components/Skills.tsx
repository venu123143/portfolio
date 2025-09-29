"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Database, Globe, Award } from "lucide-react"
import { staggerContainer, scaleIn } from "./animationVariants"

const skills = {
  frontend: ["React.js", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  backend: ["Node.js", "Nest.js", "Express.js", "GraphQL", "REST APIs", "Grpc"],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Sequelize ORM", "Type ORM"],
  devops: ["AWS", "S3", "EC2", "Docker", "CI/CD", "Linux", "Nginx", "Azure", "VPC"],
  other: ["Socket.io", "WebRTC", "Mediasoup", "Git", "jira", "GitHub", "Kafka"],
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
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

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
              <Card className="h-full p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center text-lg sm:text-xl font-bold font-poppins">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-2 sm:mr-3`}>
                      <category.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                        <Badge variant="secondary" className="font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200 text-xs sm:text-sm">
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
  )
}
