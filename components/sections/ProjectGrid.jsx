'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { filters, projects } from '@/data/projects';

/**
 * ProjectGrid — filtered gallery.
 *
 * The filter is client state only; the project data itself is static and
 * comes from data/projects.js, so adding real work never means touching
 * this component. Layout animation is disabled under reduced motion.
 */
export default function ProjectGrid() {
  const [active, setActive] = useState('All');
  const reduced = useReducedMotion();

  const shown =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        Showing {shown.length} {shown.length === 1 ? 'project' : 'projects'}
        {active !== 'All' ? ` in ${active}` : ''}.
      </p>

      <motion.div className="proj-grid" layout={!reduced}>
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.2), ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} tall={i % 3 === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {shown.length === 0 && (
        <p className="lede" style={{ paddingBlock: 48 }}>
          No projects in this category yet. Try another, or{' '}
          <a href="/contact" style={{ textDecoration: 'underline' }}>
            tell us about yours
          </a>
          .
        </p>
      )}
    </>
  );
}
