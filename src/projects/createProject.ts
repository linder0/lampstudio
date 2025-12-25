import type { Project, ProjectConfig } from '../types/project'
import type { ComponentType } from 'react'

interface CreateProjectOptions {
  Component?: ComponentType<{ config: ProjectConfig }>
}

/**
 * Factory function to create a Project from a ProjectConfig.
 * Eliminates repetitive boilerplate in individual project index files.
 */
export function createProject(
  config: ProjectConfig,
  options: CreateProjectOptions = {}
): Project {
  return {
    ...config,
    ...options,
  }
}
