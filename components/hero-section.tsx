import { portfolioData } from "@/lib/portfolio-data"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const { name, title, tagline, avatar } = portfolioData

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl w-full">
        {avatar && (
          <div className="mb-8 animate-fade-in opacity-0">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={name}
              width={250}
              height={250}
              className="rounded-full border-4 border-primary/20 shadow-lg"
            />
          </div>
        )}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-in-up opacity-0">
          {name}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary mb-8 animate-fade-in-up opacity-0 animation-delay-100">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
          {tagline}
        </p>

        <div className="flex gap-6 mt-12 animate-fade-in opacity-0 animation-delay-300">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
