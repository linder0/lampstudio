import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../types/project'
import LampImage from './LampImage'
import { fadeInUp, staggeredTransition } from '../utils/animations'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={staggeredTransition(index)}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block"
      >
        <div className="relative aspect-square">
          <LampImage image={project.thumbnail} className="aspect-square" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-300" />
        </div>

        {/* Info */}
        <div className="mt-3 space-y-1">
          <h3 className="font-serif text-lg text-ink group-hover:text-burgundy transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-burgundy-light">{project.subtitle}</p>
          )}
          <div className="flex items-center gap-2 text-xs text-burgundy-light">
            <span className="font-mono">{project.year}</span>
            {project.tags.length > 0 && (
              <>
                <span>·</span>
                <span>{project.tags[0]}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
