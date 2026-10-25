export type CaseStudy = {
  slug: "training-center" | "subh" | "eduflex";
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
    intro:
      "A management platform shaped around the day-to-day work of a training center.",
    overview:
      "The system connects students, trainers, courses, tracks, class schedules, classrooms, payments, and administrative workflows through Next.js, TypeScript, and PostgreSQL.",
    problem:
      "Training operations depend on connected decisions: a class needs a trainer, a course, a room and a schedule; students have enrollment and financial records. Disconnected workflows make updates and reporting difficult.",
    role: "Full-stack development across PostgreSQL database design, Next.js and TypeScript interfaces, backend operations, administrative features, and financial workflows.",
    features: [
      "Role-aware administrative workspaces",
      "Student and trainer management",
      "Training tracks and course organization",
      "Classroom, class, and weekly schedule management",
      "Financial contracts and student payment tracking",
      "Financial summaries and student follow-up workflows",
      "Server-side search, filters, sorting, and pagination",
      "Reusable forms, tables, and confirmation dialogs",
    ],
    challenges: [
      "Keeping related course, trainer, class, and classroom records consistent",
      "Supporting changes to recurring class schedules",
      "Presenting financial records with multiple filters and payment states",
      "Balancing reusable UI components with complex business logic",
    ],
    decisions: [
      "Represent interconnected operational data in PostgreSQL.",
      "Organize administrative workflows by responsibility and entity.",
      "Validate filter and sorting parameters before querying records.",
      "Use confirmation workflows for significant changes to schedules and records.",
    ],
    dataModel:
      "Tracks contain courses. A class references a course and trainer and links to classroom and schedule information. Student and payment records provide the basis for contract monitoring, reporting, and follow-up.",
    security:
      "The system includes authenticated, role-aware administrative workflows and validation for protected operations. Financial records are treated as sensitive business information.",
    experience:
      "Designed around staff tasks with dashboard summaries, readable tables, status indicators, responsive layouts, and search and filtering tools.",
    learning:
      "Real operational requirements and data relationships should drive system structure before interface details are polished.",
    outcome:
      "A connected training-management application demonstrating full-stack work across operations, scheduling, and financial administration. Screenshots should display fictional or redacted data and be shared with permission.",
  },
  subh: {
    slug: "subh",
    eyebrow: "02 / CONTENT PLATFORM",
    title: "One platform, two languages, many stories.",
    intro:
      "A bilingual book and workshop platform with structured content publishing behind its public storefront.",
    overview:
      "Subh combines a React public website with Node.js/Express APIs, PostgreSQL data, and administrative tools for books, authors, categories, media, workshops, and localized CMS pages.",
    problem:
      "Editors need to update book catalogs and bilingual web pages without making code changes or losing consistency between Arabic and English content.",
    role: "Full-stack development across React interfaces, REST APIs, relational data, admin workflows, authentication, CMS structures, media integration, and deployment.",
    features: [
      "Arabic and English content with RTL/LTR presentation",
      "Books, categories, and author relationships",
      "Structured pages, ordered sections, and reusable content templates",
      "Hidden and archived content states",
      "Cloudinary media uploads",
      "Admin authentication and restricted APIs",
      "Book-request and workshop-related administration",
      "Analytics dashboards and event reporting",
    ],
    challenges: [
      "Keeping translations aligned across reusable page sections",
      "Managing book/category/author relationships and media references",
      "Configuring cross-origin cookie authentication across hosting services",
      "Deploying React and Express separately against a managed PostgreSQL database",
    ],
    decisions: [
      "Treat bilingual content as structured data rather than separate sites.",
      "Use PostgreSQL and REST APIs for catalog and admin operations.",
      "Separate the public storefront from protected editorial workflows.",
      "Store uploaded media with Cloudinary and references in the database.",
      "Deploy the application separately from its managed Neon database.",
    ],
    dataModel:
      "Books relate to categories and authors. CMS pages contain structured ordered sections with localized fields and media references. User, request, and workshop-related records support administration and analytics.",
    security:
      "The backend uses JWT authentication with HTTP-only cookies, protected admin routes, validation, and configured CORS origins. Production configuration is part of the project's engineering work.",
    experience:
      "The public site prioritizes reading and bilingual navigation, while admin tools provide forms for content editing, catalog management, and analytics.",
    learning:
      "Content architecture, translation strategy, and deployment configuration influence maintainability as much as visual frontend design does.",
    outcome:
      "A deployed bilingual full-stack platform with CMS, catalog administration, and workshop-related features. Future commerce enhancements should not be presented as already launched.",
  },
  eduflex: {
    slug: "eduflex",
    eyebrow: "04 / ACADEMIC LEARNING PLATFORM",
    title: "One learning journey, three connected experiences.",
    intro:
      "EduFlex is a full-stack Learning Management System developed as an academic training project at HTU, with student, instructor, and administrator experiences.",
    overview:
      "EduFlex separates its React/Vite frontend and Node.js/Express backend into two GitHub repositories. Its PostgreSQL-backed APIs support authentication, course and category management, modules and lessons, enrollment, progress tracking, quizzes, assignments, submissions, and administrative course-review workflows. The frontend provides distinct student, instructor, and admin screens.",
    problem:
      "A training platform needs to coordinate three groups with different responsibilities. Students need to find courses, enroll, follow lessons, and submit work; instructors need to organize content and assess submissions; administrators need to supervise users, courses, categories, and approvals. A shared data model and clearly separated interfaces help support those connected workflows.",
    role: "Full-stack development as part of my HTU academic training work. I worked on the React frontend and its integration with Node.js/Express REST APIs and PostgreSQL-backed learning workflows. The repositories document the system; the exact division of work with any teammates is not asserted here.",
    features: [
      "Three user experiences: student, instructor, and administrator",
      "Login, registration, and JWT-based authentication",
      "Google authentication routes in the backend",
      "Course browsing, search, categories, and enrollment",
      "Student dashboard with enrolled courses and progress indicators",
      "Instructor course creation and editing workflows",
      "Courses organized into modules and lessons",
      "Lesson completion and course-progress endpoints",
      "Assignments, submissions, grading, and feedback workflows",
      "Quizzes and quiz-submission endpoints",
      "Administrative user and category management screens",
      "Pending-course review and course administration",
      "Instructor enrollment reporting and admin usage-report interfaces",
    ],
    challenges: [
      "Keeping student, instructor, and admin flows coherent within one application",
      "Connecting the React frontend to a separately structured Express REST API",
      "Representing the relationships between courses, lessons, enrollment, and assessment activity",
      "Showing each role the tools relevant to its responsibilities",
      "Tracking learning progress and presenting submissions for instructor review",
    ],
    decisions: [
      "Use a React application built with Vite and React Router for a multi-page learning experience.",
      "Use Material UI and reusable components for administrative and learning interfaces.",
      "Organize API endpoints by resource: courses, modules, lessons, enrollments, quizzes, assignments, and submissions.",
      "Use PostgreSQL through the pg client for relational educational data.",
      "Apply JWT checks and input validation to API endpoints; strengthen inconsistent authorization checks before any public deployment.",
      "Keep the frontend and backend codebases in separate repositories.",
    ],
    dataModel:
      "The backend is organized around users and roles, courses and categories, modules and lessons, student enrollments, lesson-completion records, quizzes, assignments, and submissions. These records support the student learning flow, instructor assessment workflow, and administrative course review.",
    security:
      "The code includes JWT middleware, role checks on several routes, Joi validation, Helmet, CORS, and rate limiting. The public repositories also reveal authorization inconsistencies on some endpoints, so the project is presented as academic work rather than a production-hardened service.",
    experience:
      "The frontend includes separate dashboards and navigation for students, instructors, and administrators. Students see enrolled courses and progress; instructors manage courses and view enrollment reporting; administrators access users, categories, course approval, and usage-related screens.",
    learning:
      "EduFlex strengthened my understanding of multi-role product design, relational modeling for learning workflows, connecting separate frontend and backend services, and the difference between hiding actions in the UI and enforcing permissions in the API.",
    outcome:
      "A substantial academic full-stack LMS implementation with two public code repositories. The project demonstrates end-to-end learning workflows; a public live deployment, complete automated test suite, and production readiness have not been verified.",
  },
};
