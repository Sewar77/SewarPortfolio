import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
  Server,
  Sparkles,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { Terminal } from "@/components/terminal";
import { SubhPreview, TrainingPreview } from "@/components/project-previews";

export function Hero() {
  return (
    <section className="hero section-grid" id="home">
      <div className="shell hero-shell">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="availability-dot" /> Available for opportunities{" "}
              <span className="eyebrow-divider" /> Based in Jordan
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              I build the <em>whole</em>
              <br />
              product.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-lead">
              From the first data model to the last interface detail. I&apos;m
              Sewar, a full stack developer working with React, Next.js,
              TypeScript, Node.js, and PostgreSQL.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">
                View my work <ArrowUpRight size={17} />
              </Link>
              <Link className="button button-secondary" href="#contact">
                Let&apos;s talk <ArrowRight size={17} />
              </Link>
            </div>
            <a
              className="hero-github"
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={0.24}>
          <div className="hero-visual-label">
            <span>01 / SYSTEM THINKING</span>
            <span>
              INTERACTIVE NOTES <ArrowDown size={13} />
            </span>
          </div>
          <div
            className="system-diagram"
            aria-label="Product layers from database through deployment"
          >
            <div className="system-line" />
            <div className="system-node">
              <Database size={18} />
              <span>Database</span>
              <small>structure</small>
            </div>
            <div className="system-node">
              <Server size={18} />
              <span>Backend</span>
              <small>logic</small>
            </div>
            <div className="system-node">
              <Braces size={18} />
              <span>Frontend</span>
              <small>interaction</small>
            </div>
            <div className="system-node">
              <Sparkles size={18} />
              <span>Deployment</span>
              <small>delivery</small>
            </div>
          </div>
          <Terminal />
          <div className="hero-visual-foot">
            <span>Thoughtful interfaces.</span>
            <span>Reliable systems.</span>
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom shell">
        <span>
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </span>
        <span>SELECTED WORK / 2026</span>
      </div>
    </section>
  );
}

export function SelectedWork() {
  const [training, subh] = portfolio.projects;
  return (
    <section id="work" className="work-section section-pad">
      <div className="shell">
        <Reveal className="section-intro work-intro">
          <div>
            <p className="kicker">01 / SELECTED WORK</p>
            <h2>
              Built for real
              <br />
              <span>complexity.</span>
            </h2>
          </div>
          <p>
            Two products with different surfaces and the same goal: make complex
            work feel clear.
          </p>
        </Reveal>
        <div className="work-list">
          <Reveal>
            <article className="work-feature work-feature-training">
              <div className="work-feature-top">
                <span className="project-index">01 — OPERATIONS PLATFORM</span>
                <span className="project-type">FULL STACK / SAAS</span>
              </div>
              <div className="work-preview-wrap">
                <TrainingPreview />
                <span className="mockup-label">
                  ILLUSTRATIVE UI · SAMPLE DATA
                </span>
              </div>
              <div className="work-detail">
                <div>
                  <p className="work-category">{training.category}</p>
                  <h3>{training.name}</h3>
                  <p>{training.summary}</p>
                  <div className="tag-row">
                    {training.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="work-links">
                  <Link className="text-link" href={`/work/${training.slug}`}>
                    View case study <ArrowUpRight size={17} />
                  </Link>
                  <ProjectExternalLinks
                    github={training.github}
                    demo={training.demo}
                  />
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article className="work-feature work-feature-subh">
              <div className="work-feature-top">
                <span className="project-index">02 — CONTENT PLATFORM</span>
                <span className="project-type">BILINGUAL / COMMERCE</span>
              </div>
              <div className="work-preview-wrap">
                <SubhPreview />
                <span className="mockup-label">
                  ILLUSTRATIVE UI · SAMPLE CONTENT
                </span>
              </div>
              <div className="work-detail">
                <div>
                  <p className="work-category">{subh.category}</p>
                  <h3>
                    {subh.name}
                    <span className="subh-title-ar" lang="ar">
                      {" "}
                      صُبح
                    </span>
                  </h3>
                  <p>{subh.summary}</p>
                  <div className="tag-row">
                    {subh.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="work-links">
                  <Link className="text-link" href={`/work/${subh.slug}`}>
                    View case study <ArrowUpRight size={17} />
                  </Link>
                  <ProjectExternalLinks github={subh.github} demo={subh.demo} />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProjectExternalLinks({
  github,
  demo,
}: {
  github: string | null;
  demo: string | null;
}) {
  return (
    <div className="external-project-links">
      {github ? (
        <a href={github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
      ) : (
        <span title="Add the project GitHub URL in src/data/portfolio.ts">
          GitHub · link pending
        </span>
      )}
      {demo ? (
        <a href={demo} target="_blank" rel="noreferrer">
          Live demo <ArrowUpRight size={14} />
        </a>
      ) : (
        <span title="Add the live demo URL in src/data/portfolio.ts">
          Live demo · link pending
        </span>
      )}
    </div>
  );
}

export function AboutAndSkills() {
  return (
    <>
      <section id="about" className="about-section section-pad">
        <div className="shell about-layout">
          <Reveal>
            <p className="kicker">02 / ABOUT</p>
            <div className="about-mark">
              <span>S</span>
              <span>.</span>
            </div>
            <p className="about-caption">Developer · trainer · Jordan</p>
          </Reveal>
          <Reveal className="about-copy">
            <h2>
              Good software starts with <em>understanding the problem.</em>
            </h2>
            <p>
              I&apos;m a Computer Science graduate based in Jordan. I work as a
              Full Stack Developer and Software Development Trainer, and I enjoy
              building complete products rather than isolated screens.
            </p>
            <p>
              My work usually starts with the business problem, then moves
              through database design, backend architecture, APIs, frontend
              implementation, and deployment. Teaching has made me pay closer
              attention to readable code, maintainability, and explaining why a
              decision was made.
            </p>
            <div className="about-signoff">
              <span>FROM DATABASE TO INTERFACE</span>
              <span>
                <Database size={15} /> → <Server size={15} /> →{" "}
                <Layers3 size={15} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="skills-section section-pad">
        <div className="shell">
          <Reveal className="skills-heading">
            <p className="kicker">03 / TOOLKIT</p>
            <h2>
              How I work<span>.</span>
            </h2>
            <p>Grouped by the work they help me do.</p>
          </Reveal>
          <div className="skill-list">
            {portfolio.skills.map((group, index) => (
              <Reveal key={group.title} className="skill-row">
                <span className="skill-number">0{index + 1}</span>
                <div className="skill-title">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ExperienceAndTeaching() {
  const experience = portfolio.experience[0];
  return (
    <>
      <section id="experience" className="experience-section section-pad">
        <div className="shell experience-layout">
          <Reveal>
            <p className="kicker">04 / EXPERIENCE</p>
            <h2>
              In practice<span>.</span>
            </h2>
            <p className="experience-intro">
              Building products and helping other developers understand the
              decisions behind them.
            </p>
          </Reveal>
          <Reveal className="timeline">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-head">
                <div>
                  <h3>{experience.role}</h3>
                  <p>
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <span>{experience.period}</span>
              </div>
              <p>{experience.description}</p>
              <div className="timeline-fields">
                <span>Product development</span>
                <span>Backend APIs</span>
                <span>Technical mentoring</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="teaching-section">
        <div className="shell teaching-layout">
          <Reveal>
            <div className="teaching-icon">
              <GraduationCap size={24} />
            </div>
            <p className="kicker">BEYOND THE BUILD</p>
            <h2>
              Building software.
              <br />
              <em>Teaching what I learn.</em>
            </h2>
          </Reveal>
          <Reveal>
            <p>
              I teach developers how the pieces fit together: JavaScript, React,
              Node.js, Express, PostgreSQL, REST APIs, authentication, security,
              validation, and migrations.
            </p>
            <p>
              The goal is practical understanding — code students can read,
              explain, and extend.
            </p>
            <div className="teaching-note">
              <span>IN THE CLASSROOM</span>
              <span>Clear thinking → clearer code</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function ExploringAndGithub() {
  return (
    <section className="explore-section section-pad">
      <div className="shell explore-layout">
        <Reveal className="explore-panel">
          <p className="kicker">05 / CURRENTLY EXPLORING</p>
          <h2>
            Always refining
            <br />
            the approach<span>.</span>
          </h2>
          <p>
            Areas I&apos;m actively sharpening as the work gets more
            interesting.
          </p>
          <div className="explore-items">
            {portfolio.exploring.map((item, index) => (
              <span key={item}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="github-panel">
          <div className="github-panel-head">
            <Github size={25} />
            <span>OPEN SOURCE / CODE</span>
          </div>
          <p className="github-handle">@Sewar77</p>
          <h3>
            See the work
            <br />
            behind the work.
          </h3>
          <p>
            Projects, experiments, and the code I choose to share live on
            GitHub.
          </p>
          <div className="contribution-art" aria-hidden="true">
            {Array.from({ length: 70 }, (_, i) => (
              <i
                key={i}
                className={`level-${(i * 13 + Math.floor(i / 7) * 7) % 5}`}
              />
            ))}
          </div>
          <span className="contribution-note">
            Visual motif · not live contribution data
          </span>
          <a
            className="text-link"
            href={portfolio.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub <ArrowUpRight size={17} />
          </a>
          <div className="featured-repos">
            <span>FEATURED PROJECTS</span>
            {portfolio.projects.map((project) =>
              project.github ? (
                <a
                  key={project.slug}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name} <MoveUpRight size={13} />
                </a>
              ) : (
                <Link key={project.slug} href={`/work/${project.slug}`}>
                  {project.name} <ArrowUpRight size={13} />
                </Link>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="shell">
        <Reveal>
          <p className="kicker">06 / CONTACT</p>
          <div className="contact-headline">
            <h2>
              Let&apos;s build
              <br />
              <em>something useful.</em>
            </h2>
            <ArrowUpRight className="contact-arrow" strokeWidth={1} />
          </div>
          <p className="contact-intro">
            I&apos;m open to Full Stack, Frontend, Backend, and Software
            Engineering opportunities. If you have a role or a project in mind,
            I&apos;d like to hear about it.
          </p>
          <div className="contact-actions">
            {portfolio.socials.email ? (
              <a
                className="button button-primary"
                href={`mailto:${portfolio.socials.email}`}
              >
                Let&apos;s talk <Mail size={17} />
              </a>
            ) : (
              <span
                className="button button-disabled"
                title="Add your email in src/data/portfolio.ts"
              >
                Let&apos;s talk · add email <Mail size={17} />
              </span>
            )}
            {portfolio.socials.cv ? (
              <a
                className="button button-secondary"
                href={portfolio.socials.cv}
                target="_blank"
                rel="noreferrer"
              >
                Download CV <ArrowUpRight size={17} />
              </a>
            ) : (
              <span
                className="button button-disabled"
                title="Add your CV URL in src/data/portfolio.ts"
              >
                Download CV · add file <ArrowUpRight size={17} />
              </span>
            )}
          </div>
          <div className="contact-details">
            <span>
              <MapPin size={15} /> Jordan
            </span>
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
            {portfolio.socials.linkedin ? (
              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
              </a>
            ) : (
              <span title="Add LinkedIn URL in src/data/portfolio.ts">
                <Linkedin size={15} /> LinkedIn · link pending
              </span>
            )}
            {portfolio.socials.email ? (
              <a href={`mailto:${portfolio.socials.email}`}>
                <Mail size={15} /> {portfolio.socials.email}
              </a>
            ) : (
              <span title="Add email in src/data/portfolio.ts">
                <Mail size={15} /> Email · address pending
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>Designed &amp; built by Sewar Al-Shorman.</span>
        <span>© {new Date().getFullYear()}</span>
        <div>
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {portfolio.socials.linkedin && (
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
