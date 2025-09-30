"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, TrendingUp, Shield, Zap, Target } from "lucide-react"
import { fadeInLeft, fadeInRight, staggerContainer } from "./animationVariants"

interface AwardCardProps {
  title: string
  description: string
}

const achievements = [
  { icon: TrendingUp, title: "70% Faster Deployments", description: "CI/CD pipeline optimization" },
  { icon: Shield, title: "40% Security Improvement", description: "Reduced unauthorized access" },
  { icon: Zap, title: "35% Performance Boost", description: "Data-fetching speed enhancement" },
  { icon: Target, title: "30% Less Downtime", description: "Server reliability improvement" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-2 sm:px-6 lg:px-8 overflow-x-hidden">
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-8">
            <motion.div variants={fadeInLeft}>
              <Card className="sm:p-6 lg:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl text-justify">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins text-slate-900 dark:text-white">Professional Journey</h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-inter text-base sm:text-lg">
                    I am working as an{" "}
                    <span className="font-semibold text-blue-600">Associate Software Engineer</span> with more than
                    <span className="font-semibold text-purple-600"> 2 years of experience</span> in the Fullstack field. I work closely with project teams to build innovative solutions for client business requirements.
                  </p>
                  <AwardCard
                    title="Bright Beginner Award"
                    description="Ahex Technologies - First Year Achievement"
                  />
                  <AwardCard
                    title="Star Performer Award."
                    description="Ahex Technologies - Second Year Achievement"
                  />

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 font-poppins">6+</div>
                      <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-medium">Company Projects</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600 font-poppins">5+</div>
                      <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-medium">Personal Projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInLeft}>
              <Card className="p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center font-poppins">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                    Interests & Activities
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["Cricket", "Yoga", "RSS Events", "Continuous Learning", "Personal Projects"].map((interest, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant="secondary" className="px-2 sm:px-3 py-1 font-medium text-xs sm:text-sm">
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-4 sm:space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg lg:shadow-xl lg:hover:shadow-2xl transition-all duration-300">
                  <CardContent className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white font-poppins mb-1">{achievement.title}</h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-inter">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={fadeInRight}>
              <Card className="p-4 sm:p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-xl">
                <CardContent>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-poppins">Core Philosophy</h3>
                  <p className="font-inter leading-relaxed text-sm sm:text-base">
                    "Always aiming to give the best output on time with 100% effort. Passionate about creating efficient, scalable solutions that make a real impact."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



function AwardCard({ title, description }: AwardCardProps) {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-3 sm:p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
        <div>
          <p className="font-semibold text-yellow-800 dark:text-yellow-200 font-poppins text-sm sm:text-base">{title}</p>
          <p className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-300">{description}</p>
        </div>
      </div>
    </div>
  )
}