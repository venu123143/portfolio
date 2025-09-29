import { motion } from "framer-motion"
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription
} from "@/components/ui/card"
import {
  Server, Code, Database, Award, CheckCircle, Calendar, MapPin, Clock
} from "lucide-react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  fadeInY, fadeInXLeft, fadeInXRight, staggerList, scaleIn
} from "./animationVariants"

// Sample data (unchanged)
const experienceData = [
  {
    role: "Associate Software Engineer",
    company: "Ahex Technologies",
    duration: "JUL 2023 - Present",
    location: "On Site",
    totalExp: "2+ Years",
    highlights: [
      {
        icon: Server,
        title: "DevOps & Infrastructure",
        color: "from-blue-500 to-cyan-500",
        items: [
          "Orchestrated CI/CD using Github and Bitbucket pipelines",
          "Containerized each microservice using Docker for consistency",
          "Automated server updates on Linux VMs with Nginx",
          "Achieved 70% faster deployment cycle",
        ],
      },
      {
        icon: Code,
        title: "Full Stack Development",
        color: "from-green-500 to-emerald-500",
        items: [
          "Backend development with Node.js & Nest.js.",
          "Frontend development with React.js.",
          "Created REST APIs, GraphQL Queries and Grpc Proto Buffers.",
          "Used libraries like Socket.io, WebRTC and Mediasoup.",
        ],
      },
      {
        icon: Database,
        title: "Database & Security",
        color: "from-purple-500 to-violet-500",
        items: [
          "Used Sequelize ORM And Type ORM for implementation.",
          "Written SQL queries with MySQL/PostgreSQL.",
          "Used NoSql db like MongoDB.",
          "Implemented the Authentication, Authorization and RBAC.",
        ],
      },
      {
        icon: Award,
        title: "Key Achievements",
        color: "from-yellow-500 to-orange-500",
        items: [
          "Bright Beginner & Star Performer Award recipient.",
          "6+ company projects completed.",
          "5+ personal full-stack projects.",
          "WhatsApp clone, Amazon clone, Video calling app.",
        ],
      },
    ],
  },
]

// Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Disable side navigation buttons
  autoplay: false,
  adaptiveHeight: true,
  className: "experience-slider",
  responsive: [
    {
      breakpoint: 640,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        adaptiveHeight: true,
      }
    }
  ]
}

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-6 xl:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInY}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2
            variants={fadeInY}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-poppins text-slate-900 dark:text-white mb-3 sm:mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            variants={fadeInY}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full w-20"
          />
        </motion.div>

        <Slider {...sliderSettings}>
          {experienceData.map((job, jobIndex) => (
            <motion.div
              key={jobIndex}
              variants={fadeInY}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 lg:mb-16 px-1 sm:px-2"
            >
              <Card className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader className="pb-3 sm:pb-4 md:pb-6 lg:pb-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <motion.div
                      variants={fadeInXLeft}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="mb-3 sm:mb-4 lg:mb-0"
                    >
                      <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                        {job.role}
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 font-poppins">
                        {job.company}
                      </CardDescription>
                    </motion.div>
                    <motion.div
                      variants={fadeInXRight}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="flex flex-col items-start lg:items-end space-y-1 sm:space-y-2"
                    >
                      <div className="flex items-center text-slate-600 dark:text-slate-400 font-medium">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
                        <span className="font-poppins text-xs sm:text-sm md:text-base">{job.duration}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm font-medium">{job.totalExp}</span>
                      </div>
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6 lg:space-y-8   p-0">
                  <motion.div
                    variants={staggerList}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 md:gap-6 lg:gap-8"
                  >
                    {job.highlights.map((section, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="h-full p-1 sm:p-4 md:p-6 dark:bg-slate-700/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300">
                          <CardContent>
                            <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-2 sm:mr-3 md:mr-4`}>
                                <section.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                              </div>
                              <h4 className="font-bold text-slate-900 dark:text-white font-poppins text-sm sm:text-base md:text-lg">{section.title}</h4>
                            </div>
                            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                              {section.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  variants={fadeInXLeft}
                                  className="flex items-start text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-inter leading-relaxed"
                                >
                                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="flex-1">{item}</span>
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
          ))}
        </Slider>
      </div>
    </section>
  )
}