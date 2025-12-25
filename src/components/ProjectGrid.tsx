import ProjectCard from './ProjectCard'
import type { Project } from '../types/project'
import type { ViewSize } from './ViewSizer'

interface ProjectGridProps {
  projects: Project[]
  viewSize?: ViewSize
}

const gridClasses: Record<ViewSize, string> = {
  S: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4',
  M: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8',
  L: 'grid-cols-1 sm:grid-cols-2 gap-12',
}

export default function ProjectGrid({ projects, viewSize = 'M' }: ProjectGridProps) {
  return (
    <div className={`grid ${gridClasses[viewSize]}`}>
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}
