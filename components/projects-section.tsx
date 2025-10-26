"use client"

import { portfolioData } from "@/lib/portfolio-data"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { MediaLightbox } from "./media-lightbox"
import { ScrollReveal } from "./scroll-reveal"
import type { ProjectMedia } from "@/lib/portfolio-data"

export function ProjectsSection() {
  const [lightboxMedia, setLightboxMedia] = useState<ProjectMedia[] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (media: ProjectMedia[], index: number) => {
    setLightboxMedia(media)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxMedia(null)
  }

  const handleNavigate = (index: number) => {
    setLightboxIndex(index)
  }

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-4 md:grid-auto-rows-1fr">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <ProjectCard project={project} index={index} onOpenLightbox={openLightbox} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxMedia && (
        <MediaLightbox
          media={lightboxMedia}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={handleNavigate}
          showDescriptions={false}
        />
      )}
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onOpenLightbox,
}: { project: any; index: number; onOpenLightbox: (media: ProjectMedia[], index: number) => void }) {
  const media = project.media || []

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02]">
      {media.length > 0 && (
        <div className={`grid ${media.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-1 h-48`}>
          {media.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden cursor-pointer"
              onClick={() => onOpenLightbox(media, idx)}
            >
              {item.type === "image" ? (
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={`${project.title} - Media ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : item.type === "pdf" ? (
                <div className="relative w-full h-full bg-muted overflow-hidden">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={`${project.title} - PDF ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <iframe
                      src={`${item.url}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full pointer-events-none scale-150 origin-top-left"
                      title={`${project.title} - PDF ${idx + 1}`}
                    />
                  )}
                  <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">PDF</div>
                </div>
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
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            {project.isPreAI && (
              <Badge variant="secondary" className="text-xs">
                Pre-AI Era
              </Badge>
            )}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
              onClick={(e) => e.stopPropagation()}
              aria-label="View project"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <span className="text-sm text-primary uppercase tracking-wider font-semibold mt-auto">{project.category}</span>
      </div>
    </Card>
  )
}
