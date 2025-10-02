"use client"

import { portfolioData } from "@/lib/portfolio-data"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { MediaLightbox } from "./media-lightbox"

export function ProjectsSection() {
  const aiProjects = portfolioData.projects.filter((p) => !p.isPreAI)
  const preAIProjects = portfolioData.projects.filter((p) => p.isPreAI)

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {aiProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {preAIProjects.length > 0 && (
          <>
            <h3 className="text-3xl font-bold mb-8 text-muted-foreground">Pre-AI Projects</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {preAIProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index + aiProjects.length} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const media = project.media || []

  const openLightbox = (mediaIndex: number) => {
    setLightboxIndex(mediaIndex)
    setLightboxOpen(true)
  }

  return (
    <>
      <Card
        className="overflow-hidden hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-[1.02] animate-scale-in opacity-0"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {media.length > 0 && (
          <div className={`grid ${media.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-1 h-48`}>
            {media.slice(0, 4).map((item, idx) => (
              <div key={idx} className="relative overflow-hidden cursor-pointer" onClick={() => openLightbox(idx)}>
                {item.type === "image" ? (
                  <img
                    src={item.url || "/placeholder.svg"}
                    alt={`${project.title} - Media ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={`${project.title} - Video ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                {idx === 3 && media.length > 4 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold">
                    +{media.length - 4}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          <span className="text-sm text-primary uppercase tracking-wider font-semibold">{project.category}</span>
        </div>
      </Card>

      {lightboxOpen && (
        <MediaLightbox
          media={media}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
          showDescriptions={false}
        />
      )}
    </>
  )
}
