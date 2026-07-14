"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Card } from "@/components/ui/card"

type Video = {
  id: number;
  color: string;
  textColor: string;
  youtubeUrl: string;
}

const youtubevideos: Video[] = [
  {
    id: 1,
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
    youtubeUrl: "https://www.youtube.com/embed/2buP9--GHIU"
  },
  {
    id: 2,
    color: "from-green-500 to-yellow-500",
    textColor: "text-green-100",
    youtubeUrl: "https://www.youtube.com/embed/l6-B3bzQzb0?si=B7TqgJ4gsO6_HU-V" 
  },
  {
    id: 3,
    color: "from-red-500 to-pink-600",
    textColor: "text-red-100",
    youtubeUrl: "https://www.youtube.com/embed/e8reyuOa2Ug?si=3Q39ldqCjdvNDjLe"
  }
]

export function TutorialSection() {
  return (
    <section id="tutorials" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center"
        >
            <div className="container mx-auto px-4 z-10">
                <div className="text-center mb-12">
                    <motion.h2
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold mb-6 text-primary"
                    >
                    YouTube Videos
                    </motion.h2>

                    <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                    Tutorials
                    </motion.p>
                </div>

                {/* Youtube Video Cards */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                    {youtubevideos.map((video, index) => (
                        <motion.div key={video.id} className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-lg mb-4">
                        <motion.iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={video.youtubeUrl}
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}
