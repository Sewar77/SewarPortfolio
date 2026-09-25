export type CaseStudy = {
  slug: "training-center" | "subh";
  eyebrow: string;
  title: string;
  intro: string;
  overview: string;
  problem: string;
  role: string;
  features: string[];
  challenges: string[];
  decisions: string[];
  dataModel: string;
  security: string;
  experience: string;
  learning: string;
  outcome: string;
};

export const caseStudies: Record<CaseStudy["slug"], CaseStudy> = {
  "training-center": {
    slug: "training-center",
    eyebrow: "01 / OPERATIONS PLATFORM",
    title: "Making the moving parts work together.",
    intro: "A management platform shaped around the actual day-to-day work of a training center.",
    overview: "The platform brings students, trainers, courses, tracks, classes, schedules, classrooms, payments, and administrative workflows into one connected system.",
    problem: "Training operations involve many related decisions. A class needs the right trainer and room; a student needs the right course and payment record. When these live in disconnected workflows, routine changes become hard to track.",
    role: "Full stack development across database design, Node.js services, Next.js interfaces, permissions, and deployment.",
    features: ["Role-aware administration", "Students and trainer management", "Course and track organization", "Class, trainer, and room scheduling", "Searchable and filterable records", "Payment and financial workflows", "Responsive dashboard interfaces"],
    challenges: ["Keeping related records consistent across scheduling and enrollment", "Making dense administrative information easy to scan", "Defining access rules for different operational roles"],
    decisions: ["Use a relational PostgreSQL model for connected operational data.", "Keep permission checks close to protected backend operations.", "Make filters, search, and sorting part of daily administration, not an afterthought.", "Build responsive views around tasks administrators actually perform."],
    dataModel: "The core model connects students and trainers to courses, tracks, class instances, rooms, and schedules. Payments and financial records reference the relevant operational entities, so records can be understood in context.",
    security: "Authentication establishes identity; role-based authorization controls protected actions. Sensitive operations, especially administrative and financial ones, belong behind server-side checks.",
    experience: "The interface is designed as a working tool: clear hierarchy, compact tables, readable schedules, and financial summaries that help staff find the next action quickly.",
    learning: "Complex business software becomes easier to build when the data relationships and permission boundaries are clear before polishing individual screens.",
    outcome: "A coherent full-stack foundation for managing training-center operations. The preview below is illustrative; replace it with verified product screenshots before publishing detailed claims.",
  },
  subh: {
    slug: "subh",
    eyebrow: "02 / CONTENT PLATFORM",
    title: "One platform, two languages, many stories.",
    intro: "A bilingual educational book and content platform with a structured publishing system behind the storefront.",
    overview: "Subh combines a responsive book experience with the administrative tools needed to manage books, authors, categories, media, and bilingual page content.",
    problem: "Educational content needs more than a static catalog. Editors need to update pages, handle Arabic and English versions, manage media, and control what is visible without reshaping the frontend each time.",
    role: "Full stack work across a React frontend, Node.js and Express APIs, PostgreSQL data, content structures, and administrative workflows.",
    features: ["Arabic and English content", "Books, categories, and authors", "Structured page sections", "Reusable content templates", "Hidden and archived content states", "Media uploads with Cloudinary", "Admin dashboard and REST APIs"],
    challenges: ["Keeping translated content aligned across page structures", "Supporting right-to-left and left-to-right reading naturally", "Giving editors flexibility without turning page content into unstructured blobs"],
    decisions: ["Model content as reusable sections with explicit fields and states.", "Treat Arabic and English as first-class content, not an afterthought.", "Separate editorial workflows from the public storefront.", "Use clear API boundaries for catalog, content, and media operations."],
    dataModel: "Books relate to authors and categories. Page templates contain ordered sections with localized content and publication states. Media references are managed separately so images can be reused and maintained.",
    security: "Authenticated administrative routes and authorization rules protect content changes and uploads. Public reading endpoints expose only content intended to be visible.",
    experience: "A quieter editorial visual language gives books room to lead. The storefront supports bilingual navigation and responsive reading, while the CMS focuses on clear editing states.",
    learning: "Bilingual products benefit from content architecture and layout direction decisions made early; retrofitting either later introduces avoidable complexity.",
    outcome: "A structured foundation for publishing and managing bilingual educational content. The preview below is illustrative; actual product screenshots and verified outcomes can be added later.",
  },
};
