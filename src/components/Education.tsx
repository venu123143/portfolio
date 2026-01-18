"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { educationData } from "@/data/data"

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
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
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className=" py-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${education.color} rounded-2xl flex items-center justify-center`}>
                      <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white font-poppins mb-2">{education.degree}</h3>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-inter mb-3">{education.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <div className="flex items-center text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        <span className="font-medium text-sm sm:text-base">{education.year}</span>
                      </div>
                      <div>
                        <span className="inline-block rounded border border-slate-400 px-2 py-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                          {education.percentage} Percentage
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
