"use client"

import { useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { Card } from "@/components/ui/card"
import { Trophy, Play } from "lucide-react"
import { MediaLightbox } from "./media-lightbox"
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

  return (
    <section id="hobbies" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Hobbies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="p-6 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{hobby.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{hobby.description}</p>

              {hobby.media && hobby.media.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {hobby.media.map((item, mediaIndex) => (
                    <button
                      key={mediaIndex}
                      onClick={() => openLightbox(hobby.media!, mediaIndex)}
                      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                    >
                      <img
                        src={item.type === "video" ? item.thumbnail || item.url : item.url}
                        alt={item.description}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {hobby.achievement && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{hobby.achievement}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {lightboxMedia && <MediaLightbox media={lightboxMedia} initialIndex={lightboxIndex} onClose={closeLightbox} />}
    </section>
  )
}
