import { portfolioData } from "@/lib/portfolio-data"

export function SkillsSection() {
  const categories = Array.from(new Set(portfolioData.skills.map((skill) => skill.category)))

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="animate-slide-in-left opacity-0"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary uppercase tracking-wider">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default animate-fade-in opacity-0"
                      style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
