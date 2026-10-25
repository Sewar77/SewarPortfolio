/** Edit portfolio content and links here. Null means not publicly available. */
export const portfolio = {
  name: "Sewar Al-Shorman",
  role: "Full Stack Developer & Software Development Trainer",
  location: "Jordan",
  bio: "I design and build full-stack applications, connecting databases, backend services, and intuitive user interfaces to solve real-world problems.",
  socials: {
    github: "https://github.com/Sewar77",
    linkedin: "https://www.linkedin.com/in/sewar-jihad/",
    email: "sewarjihad793@gmail.com",
    cv: "https://drive.google.com/file/d/1w_PSK5J8uSoy-oMtQ_edEs8GGMgBwwUH/view?usp=sharing",
  },
  skills: [
    {
      title: "Building interfaces",
      description:
        "Creating responsive, accessible, and maintainable interfaces.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      title: "Building systems",
      description: "Developing backend services, APIs, and application logic.",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Authorization",
        "JWT",
        "Cookies",
        "Validation",
      ],
    },
    {
      title: "Working with data",
      description: "Designing relational and NoSQL databases.",
      items: [
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "Database design",
        "Migrations",
        "Seeds",
      ],
    },
    {
      title: "Development workflow",
      description:
        "Building, testing, integrating, and deploying applications.",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Deployment",
        "Cloudinary",
        "Testing",
      ],
    },
  ],
  exploring: [
    "Advanced React",
    "Next.js",
    "TypeScript",
    "System design",
    "Problem solving",
    "Software architecture",
    "Backend security",
    "Performance optimization",
  ],
  experience: [
    {
      role: "Full Stack Developer & Trainer",
      company: "SDK Training Center",
      period: "Jan 2026 — Present",
      location: "Jordan",
      description:
        "Developing training-management applications using Next.js, TypeScript, and PostgreSQL, including scheduling, financial management, and backend functionality. I also teach and mentor students in full-stack web development.",
    },
  ],
  projects: [
    {
      slug: "training-center",
      number: "01",
      name: "SDK Training Center",
      category: "Business Management · Full Stack",
      summary:
        "A management system that connects student records, courses, trainers, class scheduling, financial contracts, and payment follow-up in one administrative workspace.",
      stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
      github: null as string | null,
      githubBackend: null as string | null,
      demo: "https://sdkjordan.com",
    },
    {
      slug: "subh",
      number: "02",
      name: "Subh — Books & Workshops",
      category: "Bilingual Content · Full Stack",
      summary:
        "An Arabic-English book and workshop platform with structured content management, catalog administration, media uploads, and analytics.",
      stack: [
        "React",
        "Material UI",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Cloudinary",
      ],
      github: "https://github.com/Sewar77/subh" as string | null,
      githubBackend: null as string | null,
      demo: "https://subh-center.onrender.com/" as string | null,
    },
    {
      slug: "aqd",
      number: "03",
      name: "Aqd — Contract Management Platform",
      category: "LegalTech · Collaborative Project",
      summary:
        "An Arabic RTL contract-management platform developed in collaboration with Ionbit. Its interface includes contract and template management and administrative workflows.",
      stack: [
        "React",
        "Vite",
        "Material UI",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
        "Socket.io",
        "Cookies",
      ],
      github: null as string | null,
      githubBackend: null as string | null,
      demo: null as string | null,
    },
    {
      slug: "eduflex",
      number: "04",
      name: "EduFlex — Learning Management System",

      category: "Education Technology · Academic Full Stack Project",

      summary:
        "An HTU academic training project with dedicated " +
        "student, instructor, and admin experiences for " +
        "course enrollment, lesson progress, assignments, " +
        "quizzes, course review, and learning reports.",

      stack: [
        "React",
        "Vite",
        "Material UI",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
      ],

      github: "https://github.com/Sewar77/EduFlex",

      githubBackend: "https://github.com/Sewar77/EduFlex-LMS",

      demo: null,
    },
  ],
} as const;

export type Project = (typeof portfolio.projects)[number];
