import { Job, Project, Skill, SocialLink } from "@/types";

export const siteConfig = {
  name: "Islam Talha",
  title: "Lead Software Developer & Game Developer",
  subtitle: "Game Developer · AI Engineer · Interactive Solutions",
  description:
    "I build interactive games, AI experiences, and immersive solutions that bridge software and hardware.",
  location: "Alexandria, Egypt",
  email: "islam0talha@gmail.com",
  siteUrl: "https://islam0talha.github.io/",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/islam0talha",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/islam-talha-2535a831/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/islam0talha",
    icon: "twitter",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "Unity", category: "Game Engines" },
  { name: "Unreal", category: "Game Engines" },
  { name: "C# / .NET", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "AI / LLMs", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "LangGraph", category: "AI" },
  { name: "Node.js", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Firebase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tools" },
];

export const jobs: Job[] = [
  {
    company: "Somnia Solutions",
    title: "Lead Software Developer",
    range: "January 2024 — Present",
    url: "",
    bullets: [
      "Building interactive games with software and hardware integrations for events",
      "Developing AI activation systems for immersive event experiences",
      "Working part-time from January 2024, transitioned to full-time from June 2024",
      "Creating innovative solutions that combine gaming, hardware, and artificial intelligence",
    ],
    tech: ["Unity", "C#", "Python", "AI/LLMs", "Hardware Integration"],
  },
  {
    company: "FunRock",
    title: "Full-Stack Game Developer",
    range: "Previous",
    url: "",
    bullets: [
      "Developed Unity/C# front-end features for MMA Manager 2: Ultimate Fight",
      "Built C#/.NET microservices for the back-end infrastructure",
      "Worked with Firebase, PostgreSQL, Kubernetes, Docker, and Jenkins",
    ],
    tech: ["Unity", "C#", ".NET", "Firebase", "PostgreSQL", "Kubernetes", "Docker", "Jenkins"],
  },
  {
    company: "Nodens Health",
    title: "Software Developer",
    range: "Previous",
    url: "",
    bullets: [
      "Developed software solutions for health tech applications",
    ],
    tech: ["C#", ".NET", "SQL"],
  },
  {
    company: "Castling Studios",
    title: "Game Developer",
    range: "Previous",
    url: "",
    bullets: [
      "Built game features and systems using Unity and C#",
    ],
    tech: ["Unity", "C#"],
  },
  {
    company: "Hub43",
    title: "Software Developer",
    range: "Previous",
    url: "",
    bullets: [
      "Developed web and software applications",
    ],
    tech: ["JavaScript", "Node.js", "C#"],
  },
];

export const projects: Project[] = [
  {
    slug: "mma-manager-2",
    title: "MMA Manager 2: Ultimate Fight",
    description:
      "MMA Manager 2: Ultimate Fight is a management game where you have to control and coordinate your own MMA fighters. Built with Unity for the front-end and a robust .NET microservices backend.",
    featured: true,
    cover: "/images/mma2.png",
    external:
      "https://play.google.com/store/apps/details?id=com.funrock.mma.manager&hl=en&gl=US",
    tech: [
      "Unity",
      "C#",
      "JavaScript",
      "Firebase",
      "PostgreSQL",
      "Kubernetes",
      "Docker",
      "Jenkins",
    ],
    bullets: [
      "Developed front-end game features using Unity and C#",
      "Built back-end microservices with C# and .NET",
      "Managed cloud infrastructure with Kubernetes and Docker",
      "Implemented CI/CD pipelines with Jenkins",
    ],
  },
  {
    slug: "ai-avatar",
    title: "AI Avatar Experience",
    description:
      "An AI-powered avatar system for immersive event experiences. Uses LLMs and computer vision to create interactive, personalized avatar interactions.",
    featured: true,
    cover: "",
    external: "",
    tech: ["Python", "LLMs", "Computer Vision", "Unity", "C#"],
    bullets: [
      "Integrated large language models for conversational AI",
      "Built real-time avatar rendering pipeline",
      "Created hardware-software integration for event deployments",
    ],
  },
  {
    slug: "capital-war",
    title: "Capital War",
    description:
      "A strategic game project built with modern web and game technologies.",
    featured: true,
    cover: "/images/capital-war.png",
    external: "",
    tech: ["Unity", "C#", "JavaScript"],
    bullets: [
      "Designed and implemented core game mechanics",
      "Built responsive UI systems",
    ],
  },
  {
    slug: "geolocation-world-flags",
    title: "GeoLocation & World Flags",
    description:
      "An educational geography application featuring world flags and location-based learning.",
    featured: false,
    cover: "",
    external: "",
    tech: ["Unity", "C#", "JavaScript"],
    bullets: [
      "Implemented geolocation services",
      "Created interactive flag recognition system",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const aboutContent = {
  paragraphs: [
    "Hello! Interestingly, I got introduced to Game Development in my post-college study at Information Technology Institute, Egypt where I completed my Game Development Diploma (September 2015 - June 2016).",
    "I have got my Bachelor in Computer Engineering from Alexandria Higher Institute of Engineering and Technology (2007 - 2012).",
    "I'm currently working as a Lead Software Developer at Somnia Solutions, where I build interactive games with software and hardware integrations, develop AI activation systems for events, and create immersive experiences that combine gaming, AI, and physical interactions.",
    "Previously, I worked as a Full-Stack Game Developer at FunRock (part of Fragbite Group) on MMA Manager 2: Ultimate Fight, where I developed Unity/C# front-end features and C#/.NET microservices for the back-end.",
  ],
  education: [
    {
      school: "Information Technology Institute, Egypt",
      degree: "Game Development Diploma",
      range: "2015 - 2016",
      url: "https://www.iti.gov.eg/",
    },
    {
      school: "Alexandria Higher Institute of Engineering and Technology",
      degree: "B.Sc. Computer Engineering",
      range: "2007 - 2012",
      url: "https://www.aiet.edu.eg/",
    },
  ],
};

export const contactContent = {
  heading: "Get In Touch",
  body: "My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.",
  cta: "Say Hello",
};
