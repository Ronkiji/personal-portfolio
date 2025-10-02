export interface Experience {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
  logo?: string
}

export interface ProjectMedia {
  type: "image" | "video"
  url: string
  thumbnail?: string
}

export interface Project {
  title: string
  description: string
  link?: string
  category: string
  media?: ProjectMedia[]
  isPreAI?: boolean
}

export interface Skill {
  name: string
  category: string
}

export interface HobbyMedia {
  type: "image" | "video"
  url: string
  description: string
  thumbnail?: string
}

export interface Hobby {
  title: string
  description: string
  achievement?: string
  media?: HobbyMedia[]
}

export interface ContactInfo {
  email: string
  github?: string
  linkedin?: string
  discord?: string
  website?: string
}

export interface PortfolioData {
  name: string
  title: string
  tagline: string
  about: string[]
  experience: Experience[]
  projects: Project[]
  skills: Skill[]
  hobbies: Hobby[]
  contact: ContactInfo
}

export const portfolioData: PortfolioData = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "I build accessible, pixel-perfect digital experiences for the web.",

  about: [
    "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
    "Currently, I'm a Senior Full-Stack Developer at TechCorp, specializing in accessibility. I contribute to the creation and maintenance of UI components that power our platform's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
    "In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with modern technologies.",
  ],

  experience: [
    {
      period: "2024 — PRESENT",
      title: "Senior Full Stack Developer",
      company: "Intel",
      companyUrl: "https://example.com",
      description:
        "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
      logo: "/techcorp-logo.png",
    },
    {
      period: "2022 — 2024",
      title: "Frontend Developer",
      company: "StartupXYZ",
      companyUrl: "https://example.com",
      description:
        "Developed and shipped highly interactive web applications for diverse clients including marketing agencies and e-commerce platforms. Collaborated with designers to transform Figma designs into responsive, accessible React components.",
      skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Jest"],
      logo: "/startupxyz-logo.png",
    },
    {
      period: "2020 — 2022",
      title: "Junior Developer",
      company: "Digital Agency",
      companyUrl: "https://example.com",
      description:
        "Worked on client projects ranging from landing pages to full-scale web applications. Gained experience in modern web development practices and agile methodologies.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
      logo: "/digitalagency-logo.png",
    },
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      link: "https://github.com/yourusername/project",
      category: "Web Application",
      media: [
        { type: "image", url: "/modern-ecommerce-interface.png" },
        { type: "image", url: "/ecommerce-checkout-flow.jpg" },
      ],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
      link: "https://github.com/yourusername/project",
      category: "SaaS",
      media: [
        { type: "image", url: "/task-management-kanban-dashboard.png" },
        { type: "image", url: "/task-management-calendar-view.jpg" },
        { type: "image", url: "/task-management-analytics.jpg" },
      ],
    },
    {
      title: "Portfolio Template",
      description:
        "Open-source portfolio template built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
      link: "https://github.com/yourusername/project",
      category: "Open Source",
      media: [{ type: "image", url: "/elegant-portfolio-website-design.jpg" }],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
      category: "Web Application",
      media: [{ type: "image", url: "/weather-dashboard-with-maps-and-forecasts.jpg" }],
    },
    {
      title: "Component Library",
      description: "Accessible React component library with comprehensive documentation and Storybook integration.",
      link: "https://github.com/yourusername/project",
      category: "Open Source",
      media: [{ type: "image", url: "/ui-component-library-showcase.jpg" }],
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, syntax highlighting, and SEO optimization.",
      category: "Web Application",
      media: [{ type: "image", url: "/modern-blog-platform.png" }],
    },
    {
      title: "Classic Todo App",
      description: "A simple yet elegant todo application built with vanilla JavaScript and local storage.",
      category: "Web Application",
      isPreAI: true,
      media: [{ type: "image", url: "/classic-todo-app.jpg" }],
    },
    {
      title: "Recipe Finder",
      description: "Recipe search application using REST APIs with filtering and favorites functionality.",
      link: "https://github.com/yourusername/recipe-finder",
      category: "Web Application",
      isPreAI: true,
      media: [
        { type: "image", url: "/recipe-finder-app.jpg" },
        { type: "image", url: "/recipe-detail-view.jpg" },
      ],
    },
    {
      title: "Personal Blog",
      description: "Static blog built with Jekyll and hosted on GitHub Pages, featuring custom themes.",
      category: "Blog",
      isPreAI: true,
      media: [{ type: "image", url: "/personal-blog-jekyll.jpg" }],
    },
  ],

  skills: [
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "HTML/CSS", category: "Languages" },
    { name: "React", category: "Frameworks" },
    { name: "Next.js", category: "Frameworks" },
    { name: "Node.js", category: "Frameworks" },
    { name: "Express", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Sass", category: "Styling" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "AWS", category: "Tools" },
    { name: "Figma", category: "Design" },
  ],

  hobbies: [
    {
      title: "Photography",
      description: "Capturing moments and exploring composition through landscape and street photography.",
      achievement: "Featured in National Geographic Local",
      media: [
        {
          type: "image",
          url: "/photography-landscape-mountains.jpg",
          description: "Mountain landscape at golden hour - Rocky Mountains, Colorado",
        },
        {
          type: "image",
          url: "/photography-street-urban.jpg",
          description: "Urban street photography - Downtown cityscape with reflections",
        },
        {
          type: "image",
          url: "/photography-nature-wildlife.jpg",
          description: "Wildlife photography - Eagle in flight over lake",
        },
      ],
    },
    {
      title: "Open Source",
      description: "Contributing to open source projects and maintaining my own libraries for the developer community.",
      achievement: "500+ GitHub stars across projects",
    },
    {
      title: "Gaming",
      description: "Competitive gaming in strategy and FPS titles, always looking to improve and learn.",
      achievement: "Diamond Rank in League of Legends",
      media: [
        {
          type: "video",
          url: "/gaming-highlight-reel.mp4",
          thumbnail: "/gaming-thumbnail.jpg",
          description: "Competitive gameplay highlight reel - Ranked match pentakill",
        },
        {
          type: "image",
          url: "/gaming-setup-battlestation.jpg",
          description: "My gaming setup - Custom built PC with RGB lighting",
        },
      ],
    },
    {
      title: "Music Production",
      description: "Creating electronic music and experimenting with sound design in my home studio.",
      media: [
        {
          type: "image",
          url: "/music-studio-setup.jpg",
          description: "Home studio setup - MIDI keyboard, monitors, and audio interface",
        },
        {
          type: "video",
          url: "/music-production-session.mp4",
          thumbnail: "/music-production-thumbnail.jpg",
          description: "Live production session - Creating a synthwave track",
        },
      ],
    },
  ],

  contact: {
    email: "hello@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    discord: "https://discord.gg/yourinvite",
    website: "https://yourwebsite.com",
  },
}
