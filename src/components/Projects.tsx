import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer, scaleIn, growBar } from "./animationVariants"
import { projectsData } from "@/data/data"

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
          {projectsData.map((project, index) => (
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
