"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { HobbyMedia, ProjectMedia } from "@/lib/portfolio-data"

interface MediaLightboxProps {
  media: (HobbyMedia | ProjectMedia)[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
  showDescriptions?: boolean
}

export function MediaLightbox({
  media,
  currentIndex,
  onClose,
  onNavigate,
  showDescriptions = true,
}: MediaLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [currentIndex])

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex === media.length - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
  }

  const currentMedia = media[currentIndex]

  if (!currentMedia) {
    return null
  }

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {media.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Previous media"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Next media"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="max-w-6xl w-full flex flex-col items-center gap-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex items-center justify-center">
          {currentMedia.type === "image" ? (
            <img
              src={currentMedia.url || "/placeholder.svg"}
              alt={"description" in currentMedia ? currentMedia.description : `Media ${currentIndex + 1}`}
              className="max-h-[70vh] w-auto object-contain rounded-lg animate-scale-in"
            />
          ) : currentMedia.type === "youtube" ? (
            <div className="w-full aspect-video max-h-[70vh] animate-scale-in">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(currentMedia.url)}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          ) : currentMedia.type === "pdf" ? (
            <div className="w-full h-[70vh] animate-scale-in">
              <iframe src={currentMedia.url} title="PDF viewer" className="w-full h-full rounded-lg bg-white" />
            </div>
          ) : (
            <video src={currentMedia.url} controls className="max-h-[70vh] w-auto rounded-lg animate-scale-in" autoPlay>
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {showDescriptions && "description" in currentMedia && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl w-full max-h-[20vh] overflow-y-auto">
            <p className="text-center text-sm md:text-base leading-relaxed">{currentMedia.description}</p>
            {media.length > 1 && (
              <p className="text-center text-xs text-muted-foreground mt-2">
                {currentIndex + 1} / {media.length}
              </p>
            )}
          </div>
        )}

        {!showDescriptions && media.length > 1 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-center text-sm text-muted-foreground">
              {currentIndex + 1} / {media.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
