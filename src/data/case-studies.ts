export type CaseStudy = {
  slug: "training-center" | "subh" | "eduflex" | "aqd";
  eyebrow: string;
  title: string;
  intro: string;
  overview: string;
  problem: string;
  role: string;
  features: string[];
  contributions: string[];
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
    eyebrow: "01 / PROFESSIONAL EXPERIENCE",
    title: "Bringing training operations into one connected system.",
    intro:
      "Contributing to the development of a centralized management platform designed to connect the academic, operational, and financial workflows of a training center.",
    overview:
      "A full-stack training management platform for coordinating students, trainers, tracks, courses, classes, classrooms, schedules, contracts, and financial operations. Developed collaboratively using Next.js, TypeScript, and PostgreSQL.",
    problem:
      "Running a training center requires staff to coordinate many related activities: organizing tracks and courses, assigning trainers, scheduling classes and classrooms, maintaining student records, and following contracts and payments. These workflows depend on shared and accurate information. When related processes are difficult to coordinate, updates take longer, inconsistencies become harder to spot, and staff have less visibility into day-to-day operations. The platform brings these activities into a centralized system with connected records and dedicated administrative workflows.",
    role: "Full-Stack Developer working as part of a two-developer team. I contributed to the platform's training-management and financial workflows, working across Next.js and TypeScript interfaces, backend functionality, PostgreSQL data operations, reusable components, and application testing. My work involved translating requirements into features, improving existing workflows, debugging issues, and collaborating on changes to the shared codebase.",
    features: [
      "Role-aware administrative workspaces",
      "Student and trainer management",
      "Training track and course organization",
      "Class management with course and trainer assignments",
      "Classroom allocation and schedule management",
      "Recurring weekly class schedules and schedule updates",
      "Financial contracts and student payment tracking",
      "Financial summaries and student follow-up workflows",
      "Server-side search, filtering, sorting, and pagination",
      "Reusable forms, tables, and confirmation dialogs",
      "Class status management and operational tracking",
    ],
    contributions: [
      "Developed and maintained administrative interfaces using Next.js and TypeScript.",
      "Implemented and refined workflows for managing tracks, courses, trainers, classes, and schedules.",
      "Contributed to backend operations and business logic across training and financial functionality.",
      "Worked with PostgreSQL data models, queries, and relationships between operational records.",
      "Contributed to contract, payment-tracking, and student follow-up functionality.",
      "Built and improved reusable UI components, forms, tables, and confirmation dialogs.",
      "Implemented server-side search, filtering, sorting, and pagination for administrative data.",
      "Handled form validation, application states, and error handling within assigned workflows.",
      "Contributed to automated tests, debugging, and resolving TypeScript issues.",
      "Collaborated with another developer to refine requirements and deliver changes within the existing application.",
    ],
    challenges: [
      "Keeping related track, course, trainer, class, classroom, and schedule records consistent.",
      "Supporting trainers assigned to multiple tracks while preserving course and class rules.",
      "Handling recurring schedules and changes to existing class information.",
      "Representing financial records, payment states, and follow-up workflows clearly.",
      "Building reusable components that still support the different needs of each administrative workflow.",
      "Keeping server-side search, filtering, sorting, and pagination consistent across pages.",
      "Extending a shared codebase while maintaining application stability.",
    ],
    decisions: [
      "Used PostgreSQL to represent structured operational data and relationships between business entities.",
      "Organized administrative functionality around the responsibilities of staff and the records they manage.",
      "Kept class editing and related scheduling workflows together to reduce fragmented administration.",
      "Supported assigning trainers to multiple tracks while maintaining the rule that each course belongs to one track and each class is associated with one course and one trainer.",
      "Validated search, filtering, and sorting parameters before using them in database queries.",
      "Used shared UI patterns and reusable components to improve consistency and maintainability.",
      "Added confirmation steps for significant changes to schedules and administrative records.",
      "Used automated tests and type checking to help identify regressions during development.",
    ],
    dataModel:
      "The platform models training operations through related PostgreSQL records. Tracks contain courses; each class belongs to one course and one trainer and is associated with classroom and scheduling information. Student records connect to enrollment, contract, and payment information used in administrative follow-up.",
    security:
      "Contributed to authenticated, role-aware administrative workflows, protected operations, and application-level validation. Financial records are treated as sensitive business information. This description reflects the application's intended access boundaries and does not claim an independent security audit.",
    experience:
      "The administrative experience is organized around staff tasks, using dashboard summaries, structured tables, status indicators, responsive layouts, reusable forms, and search and filtering tools to make operational records easier to manage.",
    learning:
      "Working on a real business application strengthened my experience with collaborative development, evolving business requirements, relational data, scheduling rules, financial workflows, and maintaining a shared codebase. It reinforced the importance of understanding operational constraints before implementing a feature.",
    outcome:
      "Contributed as one of two developers to a centralized training-management application spanning academic operations, scheduling, and financial administration. This case study describes my contribution rather than claiming sole ownership of the platform. Any screenshots should use fictional or redacted data and be shared only with the company's permission.",
  },

  subh: {
    slug: "subh",
    eyebrow: "02 / INDEPENDENT FULL-STACK PROJECT",
    title: "A bilingual platform built around books, learning, and content.",
    intro:
      "An independently developed Arabic and English platform combining a book catalog, workshop-related content, and structured content management.",
    overview:
      "Subh is a full-stack web application built with React and Material UI on the frontend, Node.js and Express for REST APIs, and PostgreSQL for relational data. It combines a public bilingual website with administrative tools for managing books, authors, categories, media, and structured website content.",
    problem:
      "A bilingual content platform needs to keep more than a public catalog in order. Book details must be connected to authors and categories, Arabic and English content need to be managed consistently, and administrators need to update pages without changing application code. Without a structured management workflow, content updates can become repetitive and difficult to maintain. Subh addresses these needs through a public website backed by a centralized administrative interface and structured content model.",
    role: "Independent Full-Stack Developer responsible for the application's design and implementation across frontend, backend, database, authentication, CMS functionality, and deployment configuration. I built the public-facing interfaces and administrative workflows, designed relational data structures, developed REST APIs, and implemented the application logic connecting them.",
    features: [
      "Arabic and English content with RTL/LTR presentation",
      "Book catalog and book information management",
      "Category management and book-author relationships",
      "Structured CMS pages with ordered content sections",
      "Reusable section templates for different content layouts",
      "Content visibility and archiving controls",
      "Cloudinary integration for image uploads",
      "Admin authentication and protected administrative APIs",
      "Workshop-related content and administration",
      "Shopping cart functionality with quantity updates and item removal",
    ],
    contributions: [
      "Designed and developed the application independently across frontend and backend.",
      "Built React interfaces using Material UI for the public website and administrative tools.",
      "Developed REST APIs using Node.js and Express.",
      "Designed PostgreSQL tables and relationships for users, books, authors, categories, and CMS content.",
      "Implemented password hashing and JWT authentication using HTTP-only cookies.",
      "Implemented protected administrative routes and role restrictions.",
      "Designed bilingual content structures for Arabic and English presentation.",
      "Built a structured CMS using predefined section templates, ordering, visibility, and archiving controls.",
      "Integrated Cloudinary for media uploads and stored media references in the database.",
      "Applied request validation and backend business rules to administrative and catalog operations.",
      "Worked on cart operations, including quantity changes, item removal, and stock-related validation.",
      "Configured deployment using Render for the backend and Neon for PostgreSQL.",
    ],
    challenges: [
      "Designing a CMS flexible enough for different page layouts without allowing arbitrary or inconsistent content structures.",
      "Managing localized content while keeping Arabic and English fields organized.",
      "Maintaining relationships between books, categories, and authors.",
      "Configuring cookie-based authentication across separately hosted frontend and backend services.",
      "Managing uploaded media and keeping database references consistent.",
      "Enforcing cart quantity and stock constraints in backend operations.",
      "Keeping public content in sync with administrative edits and visibility states.",
    ],
    decisions: [
      "Used PostgreSQL to store structured content and relational catalog data.",
      "Represented Arabic and English content as localized fields within shared records rather than maintaining separate websites.",
      "Used predefined CMS section templates to give administrators controlled flexibility.",
      "Separated public content access from protected administrative operations.",
      "Used HTTP-only cookies for authentication rather than storing tokens in local storage.",
      "Used Cloudinary for uploaded media and stored references in application data.",
      "Applied backend validation to enforce business rules and protect data integrity.",
    ],
    dataModel:
      "The database models users, books, authors, categories, and structured website content. Books are connected to categories and authors through relational records. CMS pages contain ordered sections with localized fields and media references. Additional application records support workshop-related administration and cart functionality.",
    security:
      "Implemented password hashing, JWT-based authentication with HTTP-only cookies, protected administrative routes, role restrictions, and request validation. The backend avoids returning password hashes and places privileged operations behind administrative authorization.",
    experience:
      "The public website focuses on bilingual browsing and readable content presentation. Administrative interfaces provide structured workflows for managing books, authors, categories, pages, and content sections, including reusable forms and media-upload functionality.",
    learning:
      "Building Subh independently strengthened my ability to take a web application from requirements and data modeling through frontend development, backend APIs, authentication, CMS architecture, and deployment configuration. It also taught me to translate content-management needs into structured, maintainable application designs.",
    outcome:
      "An independently developed bilingual full-stack platform with a public website, administrative content management, catalog functionality, and workshop-related features. The project demonstrates end-to-end development ownership. The case study does not claim that planned or unfinished commerce capabilities are fully launched; only implemented functionality should be shown in portfolio screenshots or demos.",
  },

  eduflex: {
    slug: "eduflex",
    eyebrow: "03 / HTU ACADEMIC PROJECT",
    title: "Connecting students, instructors, and administrators.",
    intro:
      "A multi-role Learning Management System developed as an academic training project at HTU, bringing learning activities and course administration into one application.",
    overview:
      "EduFlex is a full-stack Learning Management System with separate frontend and backend repositories. The React and Vite frontend communicates with Node.js and Express REST APIs backed by PostgreSQL. The platform includes student, instructor, and administrator experiences for course access, learning activities, assessments, and course administration.",
    problem:
      "An online learning environment needs to support people with different responsibilities. Students need to discover courses, enroll, access lessons, track progress, and submit work. Instructors need to organize course content and review student assessments. Administrators need to manage users, categories, and course approval. EduFlex was developed to bring these connected workflows into one system while providing interfaces appropriate to each role.",
    role: "Full-Stack Developer on an academic training project at HTU. I worked with the React frontend and its integration with Node.js and Express REST APIs backed by PostgreSQL. The project is presented as academic work; this case study does not claim that it was an official HTU production system or assign unverified ownership of every feature to me.",
    features: [
      "Separate student, instructor, and administrator experiences",
      "Registration, login, and JWT-based authentication",
      "Backend routes for Google authentication",
      "Course browsing, search, categories, and enrollment",
      "Student dashboard with enrolled courses and progress indicators",
      "Instructor course creation and editing workflows",
      "Courses organized into modules and lessons",
      "Lesson completion and course-progress functionality",
      "Assignments, submissions, grading, and feedback workflows",
      "Quizzes and quiz-submission functionality",
      "Administrative user and category management",
      "Pending-course review and course administration",
      "Instructor enrollment reporting and admin usage-report interfaces",
    ],
    contributions: [
      "Worked on the React frontend built with Vite and Material UI.",
      "Integrated frontend workflows with Node.js and Express REST APIs.",
      "Worked with PostgreSQL-backed application data and relational entities.",
      "Contributed to authentication-related workflows using JWT.",
      "Worked on course, category, and learning-management functionality.",
      "Contributed to student enrollment and course-progress workflows.",
      "Worked with role-specific interfaces for students, instructors, and administrators.",
      "Contributed to assignment, submission, quiz, and assessment-related functionality.",
      "Used React Router to organize navigation across application sections.",
      "Worked with backend middleware and request validation.",
    ],
    challenges: [
      "Organizing one application around three user roles with different responsibilities.",
      "Connecting a separate React frontend to an Express REST API.",
      "Representing relationships between courses, modules, lessons, enrollments, and assessments.",
      "Presenting each role with the workflows relevant to its responsibilities.",
      "Connecting learning-progress information with student and instructor experiences.",
      "Supporting instructor review of student submissions and assessment activity.",
    ],
    decisions: [
      "Used React, Vite, and React Router for the frontend application.",
      "Used Material UI and reusable components for consistent learning and administrative interfaces.",
      "Organized REST API resources around courses, modules, lessons, enrollments, quizzes, assignments, and submissions.",
      "Used PostgreSQL through the pg client for relational educational data.",
      "Used JWT middleware, role checks, and request validation for backend operations.",
      "Kept the frontend and backend in separate repositories.",
    ],
    dataModel:
      "The backend is organized around users and roles, courses and categories, modules and lessons, student enrollments, lesson-completion records, quizzes, assignments, and submissions. These records support student learning, instructor assessment, and administrative course review.",
    security:
      "The codebase includes JWT middleware, role checks on several routes, Joi validation, Helmet, CORS, and rate limiting. Authorization coverage is not consistent across every endpoint, so EduFlex is presented as an academic implementation rather than a production-hardened service.",
    experience:
      "The frontend provides separate dashboards and navigation for students, instructors, and administrators. Students can view enrolled courses and progress; instructors have course and assessment workflows; administrators have user, category, course-review, and usage-related interfaces.",
    learning:
      "EduFlex strengthened my understanding of multi-role application design, relational modeling for learning workflows, connecting separate frontend and backend services, and authentication and authorization. It also highlighted why backend permissions must be enforced independently of what the frontend displays.",
    outcome:
      "An academic full-stack LMS implementation supported by separate frontend and backend repositories. It demonstrates experience with multi-role interfaces, REST API integration, relational data, authentication, and connected learning workflows. A public live deployment, complete automated test suite, and production readiness have not been verified.",
  },

  aqd: {
    slug: "aqd",
    eyebrow: "04 / COLLABORATIVE PROFESSIONAL PROJECT",
    title: "Structuring contract management through connected workflows.",
    intro:
      "A collaborative LegalTech project focused on organizing contract-related operations through an administrative platform with an Arabic-first interface.",
    overview:
      "Aqd is a contract management platform developed collaboratively with Ionbit. The project includes workflows for contracts, reusable templates, users, categories, reports, and registration and approval processes. My contribution covered requirements, frontend and backend development, database work, authentication, contract and template functionality, reporting, and testing. The exact framework and database product names are not included here because they have not been confirmed in the available project information.",
    problem:
      "Contract-related work involves more than storing documents. Teams need ways to organize contract information, reuse templates, manage users and categories, and follow registration and approval processes. When these activities are handled through disconnected workflows, it becomes harder to keep information organized and understand the status of administrative work. Aqd was developed to bring these activities into a more structured contract-management platform.",
    role: "Full-Stack Developer working collaboratively with the Ionbit team. My contribution spanned requirements analysis, frontend and backend development, database design and operations, authentication, contract management, reusable templates, reporting, and testing. I worked on translating business requirements into application functionality and connecting administrative interfaces with backend operations. This description reflects my contribution and does not claim sole ownership of the project.",
    features: [
      "Contract management workflows",
      "Reusable contract templates",
      "User management and administration",
      "Category management",
      "Registration and approval workflows",
      "Administrative reports and dashboards",
      "Arabic RTL interface",
    ],
    contributions: [
      "Participated in understanding business requirements and translating them into application functionality.",
      "Developed frontend interfaces for contract-related and administrative workflows.",
      "Contributed to backend functionality and API operations.",
      "Worked on database design and organizing application data.",
      "Implemented authentication-related functionality and protected application workflows.",
      "Developed contract-management functionality.",
      "Worked on reusable contract-template functionality.",
      "Contributed to reporting and dashboard features.",
      "Worked on user and category management workflows.",
      "Tested application functionality, identified issues, and contributed to debugging and improvements.",
      "Collaborated with the team to connect frontend functionality with backend business logic.",
    ],
    challenges: [
      "Translating contract-related business requirements into structured application workflows.",
      "Organizing contract information and reusable templates.",
      "Keeping frontend forms, backend operations, and database records consistent.",
      "Implementing authentication and protected administrative functionality.",
      "Supporting Arabic RTL presentation across the interface.",
      "Connecting reporting functionality with application data.",
      "Testing workflows across connected frontend and backend functionality.",
    ],
    decisions: [
      "Organized the application around contract management and related administrative responsibilities.",
      "Used reusable templates to support structured contract workflows.",
      "Separated contract, user, and category management into distinct administrative areas.",
      "Considered frontend, backend, and database behavior together when implementing business workflows.",
      "Included Arabic RTL presentation as part of the interface requirements.",
      "Used testing and debugging to validate functionality during development.",
    ],
    dataModel:
      "The available project information identifies contracts, reusable templates, users, and categories as core application entities. Database design and data operations were part of my contribution, but the exact schema and entity relationships cannot be verified because I no longer have access to the original project.",
    security:
      "Contributed to authentication and protected application workflows. Specific authentication mechanisms, authorization rules, document-storage controls, and security configurations cannot currently be independently verified, so no more detailed security claims are made.",
    experience:
      "The platform included administrative areas for contracts, templates, users, categories, and reports, with an Arabic RTL interface intended to support the application's users.",
    learning:
      "Aqd strengthened my experience in collaborative full-stack development and turning business requirements into software workflows. Working across frontend, backend, database operations, authentication, reporting, and testing gave me broader exposure to the considerations involved in building business-oriented applications.",
    outcome:
      "Contributed to a collaborative contract-management platform developed with Ionbit. My work covered requirements, frontend and backend development, database work, authentication, contracts, templates, reports, and testing. The project was submitted to the company, after which I no longer had access or permissions to the project. Its current deployment, implementation state, and subsequent maintenance therefore cannot be independently verified. This case study describes my contribution based on my experience, not the current state of the company's system.",
  },
};
