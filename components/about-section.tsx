import { portfolioData } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {portfolioData.about.map((paragraph, index) => (
            <p key={index} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
