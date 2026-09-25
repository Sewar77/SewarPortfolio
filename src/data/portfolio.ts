/** Edit this file to update portfolio content and links. Null means not supplied yet. */
export const portfolio = {
  name: "Sewar Al-Shorman",
  role: "Full Stack Developer & Software Development Trainer",
  location: "Jordan",
  bio: "I build complete products, from data model and API to the interface people use.",
  socials: {
    github: "https://github.com/Sewar77",
    linkedin: null as string | null, // LINKEDIN_URL
    email: null as string | null, // EMAIL, for example hello@example.com
    cv: null as string | null, // CV_URL, or /cv.pdf after adding public/cv.pdf
  },
  skills: [
    { title: "Building interfaces", description: "The parts people see and use.", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Material UI", "Bootstrap"] },
    { title: "Building systems", description: "The logic that keeps products useful.", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization", "JWT", "Cookies", "Validation"] },
    { title: "Working with data", description: "Models that make complex work manageable.", items: ["PostgreSQL", "MongoDB", "SQL", "Database design", "Migrations", "Seeds"] },
    { title: "Development workflow", description: "From local changes to production.", items: ["Git", "GitHub", "Postman", "Deployment", "Cloudinary", "Testing"] },
  ],
  exploring: ["Advanced React", "Next.js", "TypeScript", "System design", "Problem solving", "Software architecture", "Backend security", "Performance"],
  experience: [{ role: "Full Stack Developer & Trainer", company: "SDK Training Center", period: "Jan 2026 — Present", location: "Jordan", description: "Developing full-stack business applications and teaching modern web development. My work spans interfaces, APIs, PostgreSQL, access control, and deployment; in the classroom, I mentor students and explain engineering decisions clearly." }],
  projects: [
    {
      slug: "training-center",
      number: "01",
      name: "Training Center Management Platform",
      category: "Operations platform · Full stack",
      summary: "A connected workspace for the moving parts of a training center: people, courses, schedules, classrooms, and finances.",
      stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      github: null as string | null, // PROJECT_GITHUB_URLS.trainingCenter
      demo: null as string | null, // PROJECT_DEMO_URLS.trainingCenter
    },
    {
      slug: "subh",
      number: "02",
      name: "Subh",
      category: "Educational content · Commerce",
      summary: "A bilingual platform for educational books and content, with a structured publishing workflow behind the storefront.",
      stack: ["React", "Material UI", "Node.js", "Express", "PostgreSQL"],
      github: null as string | null, // PROJECT_GITHUB_URLS.subh
      demo: null as string | null, // PROJECT_DEMO_URLS.subh
    },
  ],
} as const;

export type Project = (typeof portfolio.projects)[number];
