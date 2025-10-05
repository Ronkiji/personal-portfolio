"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const sections = ["Experience", "Projects", "Hobbies", "Contact"]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      const offset = 0
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="group flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-14 group-hover:bg-foreground transition-all duration-300 ease-in-out" />
                <span className="uppercase tracking-wider">{section}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-sm"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex items-center justify-center">
          <ul className="space-y-8 text-center">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-2xl text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
