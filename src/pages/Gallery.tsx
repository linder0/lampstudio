import { useState } from 'react'
import ProjectGrid from '../components/ProjectGrid'
import ViewSizer, { type ViewSize } from '../components/ViewSizer'
import { projects } from '../projects'

export default function Gallery() {
  const [viewSize, setViewSize] = useState<ViewSize>('M')

  return (
    <div>
      {/* Page Header */}
      <div className="pb-4 mb-8 border-b border-burgundy/20">
        <h1 className="font-serif text-4xl text-ink mb-4">All Projects</h1>
        <div className="flex items-end justify-between">
          <p className="text-burgundy-light max-w-2xl leading-relaxed">
            A collection of lighting objects exploring the interplay of form, material,
            and illumination. Each piece is designed to transform both spaces and the
            moments within them.
          </p>
          <ViewSizer value={viewSize} onChange={setViewSize} />
        </div>
      </div>

      <ProjectGrid projects={projects} viewSize={viewSize} />
    </div>
  )
}
