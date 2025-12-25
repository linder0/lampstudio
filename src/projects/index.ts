import type { Project } from '../types/project'
import { lampProject } from './lamp'
import { floorLampProject } from './floor-lamp'
import { pendantProject } from './pendant'
import { sconceProject } from './sconce'
import { deskLampProject } from './desk-lamp'
import { chandelierProject } from './chandelier'
import { lanternProject } from './lantern'
import { arcLampProject } from './arc-lamp'
import { candleHolderProject } from './candle-holder'
import { nightlightProject } from './nightlight'

/**
 * Project Registry
 * 
 * To add a new project:
 * 1. Create a new folder in src/projects/[project-name]/
 * 2. Add config.ts with ProjectConfig
 * 3. Add assets folder with on/off images
 * 4. Add index.ts that exports the project
 * 5. Import and add to the projects array below
 */

export const projects: Project[] = [
  lampProject,
  floorLampProject,
  pendantProject,
  sconceProject,
  deskLampProject,
  chandelierProject,
  lanternProject,
  arcLampProject,
  candleHolderProject,
  nightlightProject,
]

// Helper to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
