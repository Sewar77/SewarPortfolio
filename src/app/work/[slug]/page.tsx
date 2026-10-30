
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  LockKeyhole,
  MoveUpRight,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ProjectExternalLinks } from "@/components/home-sections";
import { AqdPreview, EduFlexPreview, SubhPreview, TrainingPreview } from "@/components/project-previews";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.projects.map(({ slug }) => ({ slug }));
}

const projectTitles: Record<string, string> = {
  "training-center": "Training Center Management Platform",
  subh: "Subh",
  eduflex: "EduFlex",
  aqd: "Aqd",
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as CaseStudy["slug"]];

  if (!study) return {};

  const projectTitle = projectTitles[slug] ?? study.title;

  return {
    title: `${projectTitle} — Case Study`,
    description: study.intro,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: study.title,
      description: study.intro,
      url: `/work/${slug}`,
    },
  };
}

function TextBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="case-text-block">
      <span className="case-block-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </Reveal>
  );
}

function ArchitectureContent({ slug }: { slug: string }) {
  switch (slug) {
    case "training-center":
      return (
        <>
          <p>
            The Next.js interface connects to the application backend and
            PostgreSQL database. The platform supports training operations,
            including tracks, courses, classes, scheduling, and financial
            workflows.
          </p>
          <ArchitectureDiagram />
        </>
      );

    case "subh":
      return (
        <p>
          The React storefront and administrative views connect to Express
          REST APIs. The backend manages the catalog, localized content,
          authentication, and media references in PostgreSQL, with Cloudinary
          used for image assets.
        </p>
      );

    case "eduflex":
      return (
        <p>
          EduFlex uses a React and Vite frontend with Material UI, connected
          to a Node.js and Express backend through REST APIs. PostgreSQL
          stores the application data, supporting the student, instructor,
          and administrator experiences.
        </p>
      );

    case "aqd":
      return (
        <p>
          Aqd involved connected frontend, backend, and database
          responsibilities. My contributions included authentication,
          contract management, reusable templates, user and category
          management, reporting, and testing. The original implementation
          details cannot currently be independently verified because I no
          longer have access to the project.
        </p>
      );

    default:
      return null;
  }
}


function ProjectPreview({ slug }: { slug: string }) {
  if (slug === "subh") {
    return (
      <div className="case-preview-band case-preview-subh">
        <div className="shell">
          <Reveal>
            <SubhPreview compact />
          </Reveal>
        </div>
      </div>
    );
  }

  if (slug === "training-center") {
    return (
      <div className="case-preview-band">
        <div className="shell">
          <Reveal>
            <TrainingPreview compact />
          </Reveal>
        </div>
      </div>
    );
  }

  if (slug === "aqd") {
    return (
      <div className="case-preview-band">
        <div className="shell">
          <Reveal>
            <AqdPreview compact />
          </Reveal>
        </div>
      </div>
    );
  }

  if (slug === "eduflex") {
    return (
      <div className="case-preview-band">
        <div className="shell">
          <Reveal>
            <EduFlexPreview compact />
          </Reveal>
        </div>
      </div>
    );
  }



  return null;
}


export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const study = caseStudies[slug as CaseStudy["slug"]];
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!study || !project) notFound();

  const currentIndex = portfolio.projects.findIndex(
    (item) => item.slug === slug
  );

  const next =
    portfolio.projects[(currentIndex + 1) % portfolio.projects.length];

  return (
    <main id="main-content" className="case-page">
      <div className="shell case-back">
        <Link href="/#work">
          <ArrowLeft size={16} />
          Back to work
        </Link>
        <span>CASE STUDY / {project.number}</span>
      </div>

      <header className="case-hero shell">
        <Reveal>
          <p className="kicker">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="case-hero-intro">{study.intro}</p>

          <div className="case-hero-meta">
            <span>
              ROLE <strong>{study.role}</strong>
            </span>
            <span>
              STACK{" "}
              <strong>{project.stack.slice(0, 3).join(" · ") || "Not specified"}</strong>
            </span>
            <span>
              PROJECT <strong>{project.name}</strong>
            </span>
          </div>
        </Reveal>
      </header>

      <ProjectPreview slug={slug} />

      <div className="shell case-body">
        <div className="case-body-main">
          <TextBlock number="01" title="Overview">
            <p>{study.overview}</p>
          </TextBlock>

          <TextBlock number="02" title="The problem">
            <p>{study.problem}</p>
          </TextBlock>

          <TextBlock number="03" title="My role">
            <p>{study.role}</p>

            {study.contributions && (
              <>
                <h3>My contributions</h3>
                <ul className="case-bullet-list">
                  {study.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </TextBlock>

          <TextBlock number="04" title="Architecture">
            <ArchitectureContent slug={slug} />
          </TextBlock>

          <TextBlock number="05" title="Key features">
            <ul className="case-feature-list">
              {study.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </TextBlock>

          <TextBlock number="06" title="Challenges">
            <ul className="case-bullet-list">
              {study.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </TextBlock>

          <TextBlock number="07" title="Engineering decisions">
            <ul className="case-decision-list">
              {study.decisions.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </TextBlock>

          <TextBlock number="08" title="Database & data model">
            <p>{study.dataModel}</p>
          </TextBlock>

          <TextBlock number="09" title="Security">
            <p>{study.security}</p>
            <div className="case-inline-note">
              <LockKeyhole size={16} />
              Access boundaries belong in backend operations, not only in
              the interface.
            </div>
          </TextBlock>

          <TextBlock number="10" title="UI & UX">
            <p>{study.experience}</p>
          </TextBlock>

          <TextBlock number="11" title="What I learned">
            <p>{study.learning}</p>
          </TextBlock>

          <TextBlock number="12" title="Outcome">
            <p>{study.outcome}</p>
          </TextBlock>
        </div>

        <aside className="case-sidebar">
          <div>
            <span className="sidebar-label">TECHNOLOGY STACK</span>
            {project.stack.map((item) => (
              <span className="sidebar-stack" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div>
            <span className="sidebar-label">PROJECT LINKS</span>
            <ProjectExternalLinks
              github={project.github}
              demo={project.demo}
            />
          </div>

          <div className="sidebar-note">
            <MoveUpRight size={17} />
            <p>Built to make the complex parts feel manageable.</p>
          </div>
        </aside>
      </div>

      {next && (
        <div className="shell next-project">
          <span>NEXT PROJECT</span>
          <Link href={`/work/${next.slug}`}>
            <strong>{next.name}</strong>
            <ArrowUpRight size={27} />
          </Link>
        </div>
      )}

      <div className="case-bottom-cta shell">
        <p>Have a role or project in mind?</p>
        <Link className="text-link" href="/#contact">
          Let&apos;s talk <ArrowRight size={17} />
        </Link>
      </div>
    </main>
  );
}
