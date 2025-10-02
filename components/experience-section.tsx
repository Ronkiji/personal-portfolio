import { portfolioData } from "@/lib/portfolio-data"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 group animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:gap-8">
                {exp.logo && (
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 relative bg-background border border-border rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-sm text-primary uppercase tracking-wider font-semibold">{exp.period}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {exp.title} · {exp.company}
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-primary"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full animate-fade-in opacity-0"
                        style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
