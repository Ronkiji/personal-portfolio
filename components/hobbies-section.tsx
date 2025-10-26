"use client"

import { useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { Card } from "@/components/ui/card"
import { Trophy, Play } from "lucide-react"
import { MediaLightbox } from "./media-lightbox"
import { ScrollReveal } from "./scroll-reveal"
import type { HobbyMedia } from "@/lib/portfolio-data"

export function HobbiesSection() {
  const [lightboxMedia, setLightboxMedia] = useState<HobbyMedia[] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (media: HobbyMedia[], index: number) => {
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
    <section id="hobbies" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Hobbies</h2>
        <div className="grid md:grid-cols-2 gap-6 md:grid-auto-rows-1fr">
          {portfolioData.hobbies.map((hobby, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full flex flex-col p-6 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-3">{hobby.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{hobby.description}</p>

                {hobby.media && hobby.media.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {hobby.media.slice(0, 3).map((item, mediaIndex) => (
                      <button
                        key={mediaIndex}
                        onClick={() => openLightbox(hobby.media!, mediaIndex)}
                        className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                      >
                        {item.type === "pdf" ? (
                          <div className="relative w-full h-full bg-muted overflow-hidden">
                            {item.thumbnail ? (
                              <img
                                src={item.thumbnail || "/placeholder.svg"}
                                alt={item.description}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <iframe
                                src={`${item.url}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                                className="w-full h-full pointer-events-none scale-150 origin-top-left"
                                title={item.description}
                              />
                            )}
                            <div className="absolute top-1 right-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                              PDF
                            </div>
                          </div>
                        ) : (
                          <img
                            src={
                              item.type === "video" || item.type === "youtube" ? item.thumbnail || item.url : item.url
                            }
                            alt={item.description}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        {(item.type === "video" || item.type === "youtube") && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        )}
                        {mediaIndex === 2 && hobby.media!.length > 3 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xl font-bold">
                            +{hobby.media!.length - 3}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {hobby.achievements && hobby.achievements.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-border space-y-2">
                    {hobby.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-primary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
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
        />
      )}
    </section>
  )
}
