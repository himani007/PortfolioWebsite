"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Card } from "@/components/ui/card"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

type Short = {
  id: number;
  shortsUrl: string;
}

const shorts: Short[] = [
  {
    id: 1,
    shortsUrl: "https://www.youtube.com/embed/xl7YrCyo14s"
  },
  {
    id: 2,
    shortsUrl: "https://www.youtube.com/embed/-frWnf-N83M"
  },
  {
    id: 3,
    shortsUrl: "https://www.youtube.com/embed/hSXe3416MZA"
  }
]

export function ShortsSection() {
  return (
    <section id="shorts" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-primary"
            >
              YouTube Shorts
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Tutorials in short format
            </motion.p>
          </div>

          {/* Youtube Shorts Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {shorts.map((short, index) => (
                <motion.div
                key={short.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className="w-full max-w-sm"
                >
                  <Card
                    className={`p-0 bg-transparent shadow-none rounded-lg h-full flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105"`}
                    onClick={() => window.open(`${short.shortsUrl}`, "_blank")}
                  >
                    <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow-md">
                      <iframe
                        className="w-full h-full"
                        src={`${short.shortsUrl}?autoplay=0&mute=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Card>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
