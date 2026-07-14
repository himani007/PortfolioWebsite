"use client"

import { motion } from "framer-motion"
import {
  FaMedium,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa"
import type { IconType } from "react-icons"

type Platform = {
  name: string
  handle: string
  description: string
  url: string
  icon: IconType
  gradient: string
}

const platforms: Platform[] = [
  {
    name: "Medium",
    handle: "@himani-gulati",
    description: "Articles and tutorials on ML, data science and AI, explained simply.",
    url: "https://himani-gulati.medium.com",
    icon: FaMedium,
    gradient: "from-slate-700 to-slate-900",
  },
  {
    name: "LinkedIn",
    handle: "in/himani-gulati",
    description: "Professional updates, research notes and the occasional deep-dive post.",
    url: "https://www.linkedin.com/in/himani-gulati-958b3119a/",
    icon: FaLinkedin,
    gradient: "from-sky-600 to-blue-700",
  },
  {
    name: "Instagram",
    handle: "@iinamih_",
    description: "Behind-the-scenes, reels and the lighter side of building & learning.",
    url: "https://www.instagram.com/iinamih_/",
    icon: FaInstagram,
    gradient: "from-pink-500 via-rose-500 to-orange-500",
  },
  {
    name: "X (Twitter)",
    handle: "@iinamih",
    description: "Quick thoughts, threads and what I'm reading in AI right now.",
    url: "https://x.com/iinamih",
    icon: FaTwitter,
    gradient: "from-neutral-700 to-black",
  },
  {
    name: "GitHub",
    handle: "@himani007",
    description: "Code, notebooks and open-source projects behind the writing.",
    url: "https://github.com/himani007",
    icon: FaGithub,
    gradient: "from-gray-700 to-gray-900",
  },
]

export function ContentCreationSection() {
  return (
    <section
      id="content-creation"
      className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden py-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-primary"
            >
              Content Creation
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              I love breaking down complex concepts and creatively conveying
              technical ideas to non-technical audiences. Here's where you can
              follow along.
            </motion.p>
          </div>

          {/* Platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`group relative flex flex-col rounded-2xl bg-gradient-to-br ${platform.gradient} p-6 text-white shadow-lg transition-shadow duration-300 hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-9 w-9" />
                    <FaArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                  <p className="text-sm text-white/70 mb-3">{platform.handle}</p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {platform.description}
                  </p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
