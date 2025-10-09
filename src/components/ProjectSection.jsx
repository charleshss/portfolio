import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/config/projects";
import { projectsSection } from "@/config/content";
import { personalInfo } from "@/config/personal";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-[var(--color-bg)] py-24 px-4"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <header className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
            {projectsSection.sectionTitle}{" "}
            <span className="text-[var(--color-accent)]">
              {projectsSection.sectionTitleHighlight}
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
            {projectsSection.subtitle}
          </p>
        </header>

        <div className="grid gap-6 [grid-auto-rows:1fr] sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const hasDemo = Boolean(project.demoUrl);
            const hasSource = Boolean(project.githubUrl);

            return (
              <article
                key={`project-${index}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[var(--shadow-md)] motion-safe:focus-within:-translate-y-0.5 focus-within:shadow-[var(--shadow-md)] motion-reduce:transition-none"
              >
                <div
                  className="relative w-full overflow-hidden bg-[var(--color-surface-2)]"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-5 px-6 py-5 text-[var(--color-text)]">
                  <h3 className="text-lg font-semibold leading-snug">
                    {project.title}
                  </h3>

                  {Array.isArray(project.description) ? (
                    <ul className="space-y-2 text-left text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex gap-2">
                          <span className="text-[var(--color-accent)]">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-left text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {project.description}
                    </p>
                  )}

                  <div
                    className="mt-auto flex flex-wrap gap-2 text-xs"
                    aria-label="Project tech stack"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={`tag-${index}-${tagIndex}`}
                        className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 font-medium text-[var(--color-text)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {(hasDemo || hasSource) && (
                  <footer className="mt-auto flex flex-wrap items-center gap-4 border-t border-[var(--color-border)] px-6 pb-6 pt-4">
                    {hasDemo && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[2.5rem] items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {hasSource && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[2.5rem] items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github size={18} aria-hidden="true" />
                        <span>Source</span>
                      </a>
                    )}
                  </footer>
                )}
              </article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <a
            className="cosmic-button flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href={personalInfo.social.github}
          >
            {projectsSection.ctaText}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
