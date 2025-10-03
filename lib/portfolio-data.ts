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
  skills: string[]
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
  name: "Ronald Sun",
  title: "SWE & ML Dev",
  tagline: "Code code code.",

  about: [
    "a",
    "b",
    "c",
  ],

  experience: [
    {
      period: "May 2024 — Aug. 2025",
      title: "SWE DevOps",
      company: "Intel",
      companyUrl: "https://www.intel.com",
      description:
        "Worked in the SerDes IP team, developing infrastructure, automation, and tooling to support circuit design flows and optimize compute resources across multiple projects.",
      skills: ["Python", "Perl", "AWS S3", "Linux/Unix", "Bash", "React", "Node.js", "PostgreSQL", "Scikit-learn", "Keras", "Confluence"],
      logo: "experiences/intel.png",
    },
    {
      period: "June 2022 — April 2024",
      title: "SWE Fullstack",
      company: "Canada Revenue Agency",
      companyUrl: "https://www.canada.ca/en/revenue-agency.html",
      description:
        "Built and maintained internal web applications and backend services for the audit platform, supporting data processing, testing, and deployment within an Agile enterprise environment.",
      skills: ["Angular", "TypeScript", "Java", "Spring Boot", "SQL", "JUnit", "Jenkins", "XML", "Agile & Scrum"],
      logo: "experiences/cra.png",
    },
    {
      period: "May 2022 — September 2022",
      title: "SDE & PM",
      company: "Fibonacci IT",
      description:
        "Led a small team to deliver blockchain-based web products, including a decentralized liquidity pool platform and company website.",
      skills: ["Fullstack", "Agile", "Project Management"],
      logo: "experiences/fib.png",
    },
    {
      period: "November 2019 — March 2020",
      title: "Software Tester",
      company: "Signority",
      companyUrl: "https://www.signority.com",
      description:
        "Tested enterprise e-signature software by writing and executing automated end-to-end and regression test cases to ensure platform reliability.",
      skills: ["QA Testing"],
      logo: "experiences/signority.png",
    },
    {
      period: "July 2019 — August 2019",
      title: "Computer Engineer Co-op",
      company: "Nokia",
      companyUrl: "https://www.nokia.com",
      description:
        "Performed lab-side network setup by installing firmware and configurations on routers and deploying network racks, improving testing efficiency for the engineering team.",
      skills: ["Grafana", "Prometheus", "Networking", "Security"],
      logo: "experiences/nokia.png",
    },
  ],

  projects: [
    {
      title: "Stock Forecasting Model",
      description:
        "Finalist in McGill x Fiam 2024 Hacks, Canada’s first ever portfolio management AI hackathon. Built an LSTM-based model to predict monthly stock returns for 1,000+ equities and portfolio backtesting strategies.",
      link: "https://github.com/Ronkiji/FIAM-hack",
      category: "Deep Learning Model",
      skills: ["Python", "Keras", "Pandas", "NumPy", "Scikit-learn"],
      media: [
        { type: "image", url: "/stock-lstm-dashboard.png" },
        { type: "image", url: "/stock-performance-plot.png" },
      ],
    },
    {
      title: "Gunslinger’s Roulette",
      description:
        "Multiplayer Unity game featuring first-to-4 round shooter gameplay with betting and shooting phases. Developed networking, core mechanics, UI/UX, map design, animations, scoring, and 3D logic.",
      link: "https://github.com/Ronkiji/Gunslingers-Roulette-Builds",
      category: "Game",
      skills: ["C#", "Unity", "Networking", "Photon"],
      media: [
        { type: "image", url: "/gunslingers-gameplay.png" },
        { type: "image", url: "/gunslingers-lobby-screen.png" },
        { type: "image", url: "/gunslingers-map.png" },
      ],
    },
    {
      title: "Sentiment Knowledge Sharing",
      description:
        "Improved a PhD-level NLP hate speech detection model, focusing on multi-head mechanisms and gated attention layers, increasing accuracy from 65% to 71%.",
      link: "https://github.com/Ronkiji/SKS",
      category: "NLP / Open Source",
      skills: ["Python", "Tensorflow", "NLTK"],
      media: [{ type: "image", url: "/sentiment-dashboard.png" }],
    },
    {
      title: "Advent of Code",
      description:
        "Competitive programming: 2024 average ranking in top 1000. Best rank: 224.",
      category: "Competitive Coding",
      skills: ["Python"],
      media: [{ type: "image", url: "/aoc-progress.png" }],
    },
    // {
    //   title: "ClipClap",
    //   description:
    //     "A lightweight tool for capturing and organizing frequently used text snippets for quick clipboard access.",
    //   category: "Utility Tool",
    //   media: [{ type: "image", url: "/clipclap-ui.png" }],
    // },
    {
      title: "RC Car",
      description:
        "Arduino-powered remote-controlled car with custom motor control, obstacle avoidance sensors, and a wireless joystick interface.",
      link: "https://github.com/yourusername/rc-car",
      category: "Arduino",
      skills: ["Python"],
      isPreAI: true,
      media: [
        { type: "image", url: "/rc-car-photo.jpg" },
        { type: "image", url: "/rc-car-circuit.png" },
      ],
    },
    {
      title: "Rooster",
      description:
        "A simple web application that sends scheduled email or text alerts for reminders and time-sensitive events.",
      category: "Web Application",
      link: "https://github.com/Ronkiji/Rooster-V2",
      skills: ["Java", "JSP", "JavaScript", "MySQL", "HTML", "CSS", "Tomcat"],
      isPreAI: true,
      media: [{ type: "image", url: "/rooster-ui.png" }],
    },
    {
      title: "Torus Puzzle",
      description:
        "A puzzle game that challenges players to align colors and shapes on a toroidal grid with wrap-around movement.",
      link: "https://github.com/Ronkiji/QWEB",
      category: "Game",
      skills: ["React", "Django", "Python"],
      isPreAI: true,
      media: [{ type: "image", url: "/torus-puzzle-screenshot.png" }],
    },
    {
      title: "2048",
      description:
        "Recreated the classic 2048 puzzle game with smooth animations and score tracking using JavaScript and HTML5.",
      link:  "https://github.com/Ronkiji/ICS3U-2048",
      category: "Game",
      skills: ["Java"],
      isPreAI: true,
      media: [{ type: "image", url: "/2048-screenshot.png" }],
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
      title: "Piano",
      description: "Been at it for 15 years.",
      achievement: "RCM 10 + Teaching + Weddings",
      media: [
        {
          type: "image",
          url: "/photography-landscape-mountains.jpg",
          description: "Mountain landscape at golden hour - Rocky Mountains, Colorado",
        },
      ],
    },
    {
      title: "3D Origami",
      description: "A niche orgigami style that crafts intricate 3D sculptures by assembling many small folded paper units.",
      achievement: "Won 1st place three years straight in 3D Artworks category for Young at Art",
      media: [
        {
          type: "image",
          url: "/photography-landscape-mountains.jpg",
          description: "Mountain landscape at golden hour - Rocky Mountains, Colorado",
        },
      ],
    },
    {
      title: "Gaming",
      description: "Competitive gaming in MOBA and FPS titles, always looking to improve and learn.",
      achievement: "D3 League of Legends",
      media: [
        {
          type: "video",
          url: "/gaming-highlight-reel.mp4",
          thumbnail: "/gaming-thumbnail.jpg",
          description: "Competitive gameplay highlight reel - Ranked match pentakill",
        },
      ],
    },
    {
      title: "Table Tennis",
      description: "Grinded 3x a week for 3-4 years",
      achievement: "Achieved several top-three finishes in provincial table tennis competitions.",
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
    {
      title: "Other instruments",
      description: "In addition to piano, I’ve learned clarinet, saxophone, guitar, bass, and accordion, performing in concerts, jazz ensembles, and orchestras.",
    },
    {
      title: "Other racket sports",
      description: "In addition to table tennis, I regularly play badminton, tennis, squash, and pickleball, enjoying both casual and competitive matches.",
    },
  ],

  contact: {
    email: "ssun.ronald@gmail.com",
    github: "https://github.com/Ronkiji",
    linkedin: "https://www.linkedin.com/in/sunronald/",
    discord: "https://discord.gg/yourinvite",
    website: "https://yourwebsite.com",
  },
}
