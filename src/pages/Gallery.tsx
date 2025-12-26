import { useState } from 'react'
import ProjectGrid from '../components/ProjectGrid'
import ViewSizer, { type ViewSize } from '../components/ViewSizer'
import { projects } from '../projects'

export default function Gallery() {
  const [viewSize, setViewSize] = useState<ViewSize>('M')

  return (
    <div>
      {/* Page Header */}
      <div className="pb-4 mb-8 border-b border-burgundy/20 flex items-center justify-between">
        <h1 className="font-serif text-4xl text-ink">All Projects</h1>
        <ViewSizer value={viewSize} onChange={setViewSize} />
      </div>

      <ProjectGrid projects={projects} viewSize={viewSize} />
    </div>
  )
}
