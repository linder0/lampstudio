import { ComponentType } from 'react'

export interface ProjectImage {
  on: string   // Image when lamp is ON
  off: string  // Image when lamp is OFF
  alt: string
}

export interface ProjectConfig {
  slug: string
  title: string
  subtitle?: string
  description: string
  year: number
  tags: string[]
  thumbnail: ProjectImage
  images: ProjectImage[]
  featured?: boolean
}

export interface Project extends ProjectConfig {
  // Optional custom component for unique project layouts
  Component?: ComponentType<{ config: ProjectConfig }>
}
