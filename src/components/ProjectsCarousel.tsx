'use client'

import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi" // Heroicons

interface Project {
  title: string
  description: string
  repo?: string
  techstack?: string[]
}
 
interface ProjectsCarouselProps {
  projects: Project[]
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerPage = 3

  const next = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className="py-20 max-w-6xl mx-auto w-full">
      <h2 id="projects"className="text-4xl font-bold leading-normal mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* Carousel controls */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white text-2xl hover:bg-white/20 transition-colors disabled:opacity-40 border border-white/20"
        >
          <HiChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          disabled={currentIndex >= projects.length - 1}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white text-2xl hover:bg-white/20 transition-colors disabled:opacity-40 border border-white/20"
        >
          <HiChevronRight size={24} />
        </button>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(100%/3)] p-2"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 flex flex-col items-center text-center hover:border-pink-400/50 transition-colors shadow-lg h-full">
                
                {/* Top section: title + description */}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-pink-400 mb-2">{project.title || 'Project Title'}</h3>
                  <p className="text-slate-300 mb-4 text-sm">{project.description || 'Project description goes here.'}</p>
                </div>

                {/* Spacer to push stack + repo to bottom */}
                <div className="mt-auto flex flex-col items-center">
                  {/* Tech stack bubbles */}
                  {project.techstack && project.techstack.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-1">
                      {project.techstack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Repo link */}
                  <div className="h-6 flex items-center justify-center font-semibold">
                    {project.repo
                      ? <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline inline-block">
                          View Repo
                        </a>
                      : <span className="text-slate-400 inline-block">Private Repo</span>
                    }
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
