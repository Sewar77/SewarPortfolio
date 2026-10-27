# 👩🏻‍💻 Sewar Al-Shorman — Developer Portfolio

<div align="center">

### Full Stack Developer · Software Development Trainer

Building modern web applications, creating practical learning experiences, and continuously growing as a software engineer.

📍 Jordan

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit_Website-black?style=for-the-badge\&logo=vercel)](https://YOUR-PORTFOLIO-URL.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sewar_Al--Shorman-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/sewar-jihad)
[![GitHub](https://img.shields.io/badge/GitHub-Sewar77-181717?style=for-the-badge\&logo=github)](https://github.com/Sewar77)

</div>

---

## ✨ About This Portfolio

This is my personal developer portfolio, built to showcase my experience as a **Full Stack Developer and Software Development Trainer**.

The website highlights my development work, technical skills, professional experience, teaching background, case studies, current areas of learning, GitHub activity, and ways to contact me.

The goal was to create something that feels more like a real software product than a traditional static portfolio.

It was built with a strong focus on:

* Clean architecture
* Performance
* Accessibility
* Responsive design
* Reusable components
* Modern UI/UX
* Clear project storytelling
* Maintainable TypeScript code

---

## 🚀 Live Portfolio

### [→ Visit My Portfolio](https://sewarportfolio.onrender.com/)

> Replace `https://YOUR-PORTFOLIO-URL.com` with the final deployed domain.

---

## 🖼️ Preview

<!--
Add your final screenshot here after deploying the website.

Example:

![Sewar Al-Shorman Portfolio](public/portfolio-screenshot.png)
-->

The homepage includes:

* 💻 Interactive developer terminal
* 🚀 Selected projects
* 👩🏻‍💻 About me
* 🧰 Technical skills
* 💼 Professional experience
* 👩🏻‍🏫 Training & teaching experience
* 📚 Current areas of study
* 🐙 GitHub section
* 📩 Contact section

Two detailed case studies are also available:

* `/work/training-center`
* `/work/subh`

> Product previews currently use custom HTML/CSS concepts with sample data. They are not screenshots of production systems or evidence of project results.

---

# 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge\&logo=framer\&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

</div>

### Core Technologies

| Technology        | Usage                                |
| ----------------- | ------------------------------------ |
| **Next.js**       | Application framework and App Router |
| **React**         | Component-based user interfaces      |
| **TypeScript**    | Type-safe application development    |
| **Tailwind CSS**  | Styling and responsive design        |
| **Framer Motion** | Animations and transitions           |
| **Lucide React**  | Icons                                |
| **Vercel**        | Production deployment                |

---

# 🧠 Architecture

The portfolio uses the **Next.js App Router** and keeps content, presentation, and reusable components clearly separated.

```text
src/
│
├── app/
│   ├── work/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── navigation
│   ├── project previews
│   ├── animated reveals
│   ├── page sections
│   └── architecture components
│
└── data/
    ├── portfolio.ts
    └── case-studies.ts

public/
│
├── projects/
│   ├── training-center/
│   └── subh/
│
└── cv.pdf
```

### Rendering Strategy

Most of the website is rendered using **Server Components**.

Client Components are only used when browser-side interaction is actually required, including:

* Navigation state
* Theme behavior
* Interactive terminal
* Scroll-based animations
* Interactive UI elements

This keeps unnecessary client-side JavaScript to a minimum.

---

# 🌟 Featured Projects

## 🏢 SDK Training Center Platform

A professional training-center management platform developed as part of my work with SDK Training Center.

The system includes functionality across training and administrative workflows, with emphasis on structured data, maintainability, and practical business requirements.

### Technologies

`Next.js` · `TypeScript` · `PostgreSQL` · `React` · `REST APIs`

### Case Study

[`/work/training-center`](https://YOUR-PORTFOLIO-URL.com/work/training-center)

---

## 📚 Subh

A bilingual Arabic/English platform designed for selling books and educational materials and supporting workshops and content management.

The system includes frontend, backend, authentication, admin functionality, structured content management, and e-commerce-related features.

### Technologies

`React` · `Node.js` · `Express.js` · `PostgreSQL` · `Material UI` · `JWT` · `REST APIs`

### Repository

[View Subh on GitHub →](https://github.com/Sewar77/subh)

### Case Study

[`/work/subh`](https://YOUR-PORTFOLIO-URL.com/work/subh)

---

# 👩🏻‍💻 Development Experience

My development work focuses primarily on modern JavaScript and TypeScript applications.

### Frontend

* React.js
* Next.js
* TypeScript
* JavaScript ES6+
* Tailwind CSS
* Material UI
* Bootstrap
* Responsive Design
* React Query
* Redux Toolkit
* Zustand
* React Hook Form
* Zod

### Backend

* Node.js
* Express.js
* REST APIs
* Authentication & Authorization
* JWT
* HTTP-only Cookies
* Role-Based Access Control
* Joi Validation
* File Uploads
* Cloudinary

### Database

* PostgreSQL
* MongoDB
* Mongoose
* Prisma
* SQL
* Relational database design

### Development Tools

* Git
* GitHub
* Postman
* Docker
* Vercel
* Render
* Neon
* VS Code

---

# 👩🏻‍🏫 Teaching & Training

Alongside software development, I work as a **Software Development Trainer**.

My teaching experience includes topics such as:

* HTML & CSS
* JavaScript
* DOM
* React
* Node.js
* Express.js
* PostgreSQL
* MongoDB
* REST APIs
* Authentication
* JWT & Cookies
* Database design
* Git & GitHub
* Secure development
* Full-stack application development

I enjoy turning technical concepts into practical exercises and helping students understand not only **how** something works, but **why** it works.

---

# ⚡ Interactive Terminal

The portfolio includes a small interactive terminal inspired by the developer workflow.

Visitors can use commands to explore different areas of the portfolio in a more interactive way.

The terminal is intentionally lightweight and built directly into the application rather than using an external terminal library.

---

# 📂 Project Structure

### `src/app/`

Contains:

* App Router pages
* Global styles
* Metadata
* Open Graph image configuration
* Sitemap
* Robots configuration
* Web manifest

### `src/components/`

Contains reusable UI components such as:

* Navigation
* Animated reveals
* Project previews
* Homepage sections
* Architecture visualizations

### `src/data/portfolio.ts`

The main editable portfolio configuration.

It contains:

* Personal information
* Social links
* Skills
* Experience
* Projects
* External URLs
* Portfolio content

Most portfolio information can be updated from this file without modifying page components.

### `src/data/case-studies.ts`

Contains the long-form project case studies displayed under `/work/[slug]`.

### `public/projects/`

Reserved for real project screenshots and media.

```text
public/projects/
├── training-center/
└── subh/
```

---

# 💻 Running the Project Locally

### Requirements

* Node.js **20.9+**
* npm

Clone the repository:

```bash
git clone https://github.com/Sewar77/SewarPortfolio.git
```

Move into the project:

```bash
cd SewarPortfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# ✅ Before Production

Run the following checks before deploying:

```bash
npm run typecheck
npm run lint
npm run build
```

Format the source code when needed:

```bash
npm run format
```

The portfolio does **not** require:

* Backend server
* Database
* API keys
* Authentication
* Private secrets

---

# ⚙️ Environment Variables

Create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

`NEXT_PUBLIC_SITE_URL` is used for:

* Canonical URLs
* Metadata
* Open Graph information
* Sitemap
* Structured data
* Social sharing

An example configuration is available in:

```text
.env.example
```

---

# 🎨 Customization

Before publishing the portfolio, review the following areas.

### 1. Personal Links

Update:

```text
src/data/portfolio.ts
```

Set the correct:

```ts
socials.email
socials.linkedin
socials.cv
```

Add your CV to:

```text
public/cv.pdf
```

Then configure:

```ts
cv: "/cv.pdf"
```

A hosted CV URL can also be used.

---

### 2. Project Links

Add the real GitHub and live-demo URLs for each project in:

```text
src/data/portfolio.ts
```

Until real links are provided, the interface intentionally avoids sending users to broken placeholder destinations.

---

### 3. Case Studies

Review:

```text
src/data/case-studies.ts
```

Every technical statement should reflect the real implementation of the project.

Avoid presenting conceptual UI previews as production functionality unless the corresponding feature actually exists.

---

### 4. Real Project Screenshots

Add screenshots to:

```text
public/projects/training-center/
```

and:

```text
public/projects/subh/
```

Then replace:

```tsx
<TrainingPreview />
```

and:

```tsx
<SubhPreview />
```

with optimized Next.js images:

```tsx
import Image from "next/image";
```

Always provide:

* Meaningful `alt` text
* Image dimensions

or use:

```tsx
fill
```

inside a properly sized container.

---

### 5. Production URL

Set:

```env
NEXT_PUBLIC_SITE_URL=https://your-final-domain.com
```

before the final production deployment.

---

# ☁️ Deployment

The project is designed to deploy easily on **Vercel**.

### Deploy with Vercel

1. Push the repository to GitHub.
2. Open [Vercel](https://vercel.com/new).
3. Import the repository.
4. Add:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

5. Deploy.

Vercel automatically detects the Next.js configuration.

After connecting a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy so that canonical URLs, the sitemap, metadata, and social previews use the correct production domain.

---

# ♿ Accessibility

Accessibility was considered throughout the portfolio.

The site includes:

* Semantic HTML sections
* Keyboard-accessible navigation
* Visible focus states
* Skip-to-content navigation
* Reduced-motion support
* Accessible interactive controls
* Descriptive labels
* Responsive layouts
* Keyboard-operable terminal controls

---

# ⚡ Performance

The portfolio is designed to remain lightweight.

Performance considerations include:

* Server Components by default
* Limited Client Components
* No unnecessary remote content dependencies
* CSS-based project previews
* Optimized rendering
* Responsive assets
* Minimal JavaScript where possible
* Next.js production optimizations

When real screenshots are added, they should be compressed and rendered using `next/image`.

---

# 🔒 Privacy & Security

This portfolio does not require:

* Authentication
* User accounts
* Database credentials
* Private API keys
* Sensitive environment variables

Only public portfolio information is included in the application.

---

# 📈 Future Improvements

Planned improvements include:

* Real product screenshots
* More project case studies
* Additional project demos
* Improved project storytelling
* Performance monitoring
* Additional accessibility testing
* Expanded technical writing
* More detailed GitHub integration

---

# 🤝 Let's Connect

I'm open to opportunities involving:

* Full Stack Development
* Frontend Development
* React / Next.js Development
* JavaScript / TypeScript Development
* Software Engineering
* Programming & Software Development Training

<div align="center">

### 📬 Get in Touch

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect_with_me-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/sewar-jihad)

[![GitHub](https://img.shields.io/badge/GitHub-View_my_work-181717?style=for-the-badge\&logo=github)](https://github.com/Sewar77)

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit_Website-black?style=for-the-badge\&logo=vercel)](https://YOUR-PORTFOLIO-URL.com)

---

### Sewar Al-Shorman

**Full Stack Developer · Software Development Trainer**

Jordan 🇯🇴

</div>
