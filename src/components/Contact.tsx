"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { contactData } from "@/data/data"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
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
            {contactData.description}
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl mb-4 sm:mb-6 font-poppins">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactData.contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
                    onClick={() => window.open(contact.href, contact.href.startsWith("http") ? "_blank" : "_self")}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-${contact.color}-100 dark:bg-${contact.color}-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                    >
                      <contact.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${contact.color}-600`} />
                    </div>
                    <div>
                      <p className="font-medium font-poppins text-sm sm:text-base">{contact.label}</p>
                      <p className={`text-${contact.color}-600 hover:underline font-inter text-xs sm:text-sm`}>{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl mb-4 sm:mb-6 font-poppins">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-slate-600 dark:text-slate-300 font-inter text-sm sm:text-base">
                  Whether you're looking for a dedicated developer for your team, have a project in mind, or just want to connect with a fellow tech enthusiast, I'd love to hear from you.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent font-poppins text-sm sm:text-base" asChild>
                        <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent font-poppins text-sm sm:text-base" asChild>
                        <a href={contactData.githubUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Github
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
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-inter"
                  >
                    {contactData.availability}
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
