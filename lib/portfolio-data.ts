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
  achievements?: string[] // Changed from single achievement to array of achievements
  media?: HobbyMedia[]
}

export interface ContactInfo {
  email: string
  github?: string
  linkedin?: string
  discord?: string
  website?: string
  phone?: string
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
  tagline: "Automate everything so my future self can chill.",

  about: ["a", "b", "c"],

  experience: [
    {
      period: "May 2024 — Aug. 2025",
      title: "SWE DevOps",
      company: "Intel",
      companyUrl: "https://www.intel.com",
      description:
        "Worked in the SerDes IP team, developing infrastructure, automation, and tooling to support circuit design flows and optimize compute resources across multiple projects.",
      skills: [
        "Python",
        "Perl",
        "AWS S3",
        "Linux",
        "Bash",
        "React",
        "Node.js",
        "PostgreSQL",
        "Scikit-learn",
        "Keras",
        "Confluence",
      ],
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
      title: "Image Captioning with Encoders",
      description:
        "DistilBART and CLIP. Work in Progress.",
      link: "https://github.com/AryanChawla1/image-captioning",
      category: "Deep Learning Model",
      skills: ["Python", "Keras", "Pandas", "NumPy", "Scikit-learn"],
      media: [],
    },
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
        "Multiplayer game featuring multi round shooter gameplay with betting and shooting phases. Developed networking, core mechanics, UI/UX, map design, animations, scoring, and 3D logic.",
      link: "https://github.com/Ronkiji/Gunslingers-Roulette-Builds",
      category: "Game",
      skills: ["C#", "Unity", "Networking", "Photon"],
      media: [
        { type: "image", url: "/projects/gunslingers-poster.png" },
        { type: "video", url: "/projects/gunslingers-video.mp4", thumbnail: "/projects/gunslingers-thumbnail.png"},
      ],
    },
    {
      title: "Sentiment Knowledge Sharing",
      description:
        "Improved a PhD-level NLP hate speech detection model, focusing on multi-head mechanisms and gated attention layers, increasing accuracy from 65% to 71%.",
      link: "https://github.com/Ronkiji/SKS",
      category: "NLP / Open Source",
      skills: ["Python", "Tensorflow", "NLTK"],
      media: [
        { type: "image", url: "/projects/sks-1.png" },
        { type: "image", url: "/projects/sks-2.png" },
        { type: "image", url: "/projects/sks-3.png" },
        { type: "image", url: "/projects/sks-4.png" },
      ],
    },
    {
      title: "Advent of Code",
      description: "Competitive programming: 2024 average ranking in top 1000. Best rank: 227.",
      link: "https://github.com/Ronkiji/Advent-of-Code",
      category: "Competitive Coding",
      skills: ["Python"],
      media: [
        { type: "image", url: "/projects/aoc2024.png" },
        { type: "image", url: "/projects/aoc2023.png" },
        { type: "image", url: "/projects/aoc2022.png" },
        { type: "image", url: "/projects/aoc2021.png" },
        { type: "image", url: "/projects/aoc2020.png" }
      ],
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
      title: "Rooster",
      description:
        "A simple web application that sends scheduled email or text alerts for reminders and time-sensitive events.",
      category: "Web Application",
      link: "https://github.com/Ronkiji/Rooster-V2",
      skills: ["Java", "JSP", "JavaScript", "MySQL", "HTML", "CSS", "Tomcat"],
      isPreAI: true,
      media: [{ type: "video", url: "/projects/rooster.mp4", thumbnail: "/projects/rooster-thumbnail.png" }],
    },
    {
      title: "VoiceVend",
      description:
        "Voice controlled vending machine",
      category: "Arduino",
      skills: ["C++"],
      isPreAI: true,
      media: [{ type: "video", url: "/projects/voicevend.mp4", thumbnail: "/projects/voicevend-thumbnail.png" }],
    },
    {
      title: "RC Car",
      description:
        "Arduino-powered remote-controlled car with custom motor control, obstacle avoidance sensors, and a wireless joystick interface.",
      link: "https://github.com/Ronkiji/Arduino-Remote-Controlled-Car",
      category: "Arduino",
      skills: ["C++"],
      isPreAI: true,
      media: [
        { type: "image", url: "/projects/rc-car-1.jpg" },
        { type: "image", url: "/projects/rc-car-2.jpg" },
        { type: "image", url: "/projects/rc-car-block-diagram.png" },
        { type: "image", url: "/projects/rc-car-schematic.png" },
      ],
    },
    {
      title: "2048",
      description:
        "Recreated the classic 2048 puzzle game with smooth animations and score tracking using JavaScript and HTML5.",
      link: "https://github.com/Ronkiji/ICS3U-2048",
      category: "Game",
      skills: ["Java"],
      isPreAI: true,
      media: [{ type: "video", url: "/projects/2048.mp4", thumbnail: "/projects/2048-thumbnail.png" }],
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
      description: "Been playing consitently for 15 years just to be worse than child prodigies. Currently learning jazz :)",
      achievements: ["RCM Level 10", "Wedding performance"],
      media: [
        {
          type: "image",
          url: "/photography-landscape-mountains.jpg",
          description: "Mountain landscape at golden hour - Rocky Mountains, Colorado",
        },
      ],
    },
    {
      title: "Table Tennis",
      description: "Played table tennis competitively. Currently trying to get back to my prime.",
      achievements: ["Achieved several top-three finishes in provincial table tennis competitions."], // Changed to array
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
      title: "Esports gaming",
      description: "I enjoy competitive games... maybe a bit too much.",
      achievements: ["D2 League of Legends", "Champion League and Unreal in Fortnite", "Peak 1772 in rapids (Chess.com)"], // Changed to array
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
      title: "3D Origami (and other hand craft)",
      description:
        "A niche orgigami style that crafts intricate 3D sculptures by assembling many small folded paper units. Competed in Young at Arts competitions. I wrote these descriptions when I was really young so bean ice!",
      achievements: ["2016 3D Category Winner + Junior Award, YAA", "2017 3D Category Winner + Junior Award, YAA", "2019 3D Category Winner, YAA"], // Changed to array
      media: [
        {
          type: "image",
          url: "/hobbies/origami-1.JPG",
          description: "My creation portrays the coming together of creatures from two different eras, two different seasons who once lived in the same area. All of the components of my artwork were constructed from scratch, including the grass, the ice caps, and the origamis. I wanted to build this because I thought that it would be an interesting idea to combine two entirely different creatures into one artwork which conveys the message that humans, despite their many dissimilarities, have to potential to come together as a whole to make this world a better place.",
        },
        {
          type: "image",
          url: "/hobbies/origami-2.JPG",
          description: "My art shows the polluted world we live in today that affects the entire animal kingdom and the world. I want to show that the animal feasts on what we humans give to them, which contains junk. The swan is seen biting the fish, who holds junk in their stomach, which will then transfer to the swan. The pollution consumed by the swan will then put her under gene transformation. After many years, the animals will start to die from eating waste that's thrown into the water.",
        },
        {
          type: "image",
          url: "/hobbies/origami-3.JPG",
          description: "The dolphin, admired for her intelligence, playfulness, and friendliness, has enthralled the hearts of many people. She glided through the earth’s ocean accompanied with her friends, sometimes they end up with fishes, other times they might end up with squids. She joked with her friends, splashing them with the warm and soothing water she was surrounded with. Today, the water is not as soothing - it tastes uncomfortable and there is not much space to swim as freely as she used to. Her body stings from the cuts and scars she got from clashing with the objects around her. She wants to hunt for food, but there is no food around except for the small amount of dead fishes that her trainers feed to her. She doesn’t know where her friends went. Nevertheless, she coordinates with them to put on a show, hoping that her performance will impress her trainer enough to receive a well needed piece of fish.",
        },
        {
          type: "image",
          url: "/hobbies/wood-1.jpg",
          description: "Sling puck board game",
        },
        {
          type: "image",
          url: "/hobbies/wood-2.jpg",
          description: "Keepsake box",
        },
        {
          type: "image",
          url: "/hobbies/wood-3.jpg",
          description: "Keepsake box",
        },
        {
          type: "image",
          url: "/hobbies/wood-4.jpg",
          description: "Cutting board shaped like butcher knife",
        },
        {
          type: "image",
          url: "/hobbies/wood-5.jpg",
          description: "Rolling ship with launchable \"canon\"",
        },
      ],
    },
    {
      title: "Other instruments",
      description:
        "In addition to piano, I've learned clarinet, saxophone, guitar, bass, and accordion, performing in concerts, jazz ensembles, and orchestras.",
    },
    {
      title: "Other racket sports",
      description:
        "In addition to table tennis, I regularly play badminton, tennis, squash, and pickleball, enjoying both casual and competitive matches.",
    },
  ],

  contact: {
    email: "ssun.ronald@gmail.com",
    github: "https://github.com/Ronkiji",
    linkedin: "https://www.linkedin.com/in/sunronald/",
    website: "https://yourwebsite.com",
    discord: "ronkiji",
    phone: "(613)-663-6733"
  },
}
