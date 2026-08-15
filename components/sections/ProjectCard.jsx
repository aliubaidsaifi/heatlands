import Link from 'next/link';
import Figure from '../ui/Figure';

/**
 * ProjectCard — shared by the homepage grid and the projects page.
 * Links to /projects for now; when individual project pages exist,
 * point `href` at `/projects/${project.slug}` and nothing else changes.
 */
export default function ProjectCard({ project, tall = false, sizes }) {
  return (
    <Link href="/projects" className={`proj-card ${tall ? 'tall' : ''}`}>
      <Figure
        src={project.image}
        alt={project.alt}
        sizes={sizes || '(max-width: 760px) 100vw, 50vw'}
      />
      <div className="proj-meta">
        <div>
          <span className="proj-cat">{project.category}</span>
          <h3 className="hd hd-3" style={{ marginTop: 8 }}>{project.title}</h3>
        </div>
        <span className="proj-loc">
          {project.location}
          {project.year ? ` · ${project.year}` : ''}
        </span>
      </div>
      <p className="proj-desc">{project.description}</p>
    </Link>
  );
}
