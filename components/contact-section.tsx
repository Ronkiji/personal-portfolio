import { portfolioData } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact</h2>
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-lg hover:text-foreground transition-colors"
              >
                {portfolioData.contact.email}
              </a>
            </div>

            {portfolioData.contact.github && (
              <div className="flex items-center gap-4">
                <Github className="h-5 w-5 text-muted-foreground" />
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-foreground transition-colors flex items-center gap-2"
                >
                  GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}

            {portfolioData.contact.linkedin && (
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-foreground transition-colors flex items-center gap-2"
                >
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}

            {portfolioData.contact.discord && (
              <div className="flex items-center gap-4">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
                <a
                  href={portfolioData.contact.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-foreground transition-colors flex items-center gap-2"
                >
                  Discord
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          <Button size="lg" asChild className="mt-8">
            <a href={`mailto:${portfolioData.contact.email}`}>Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
