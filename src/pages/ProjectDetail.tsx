import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '../projects'
import LampImage from '../components/LampImage'
import { fadeIn, fadeInUp, staggeredTransition, defaultTransition } from '../utils/animations'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()

  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="text-center py-24">
        <h1 className="font-serif text-3xl text-ink mb-4">Project Not Found</h1>
        <p className="text-burgundy-light mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-burgundy hover:text-ink underline underline-offset-4"
        >
          Back to Gallery
        </Link>
      </div>
    )
  }

  // Use custom component if available
  if (project.Component) {
    return <project.Component config={project} />
  }

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={defaultTransition}
    >
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-burgundy-light hover:text-burgundy mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={staggeredTransition(index)}
            >
              <LampImage image={image} className="aspect-[4/5]" />
            </motion.div>
          ))}
        </div>

        {/* Info */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={staggeredTransition(0, 0.2)}
          >
            {/* Title */}
            <h1 className="font-serif text-5xl text-ink mb-2">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-lg text-burgundy-light mb-6">
                {project.subtitle}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-burgundy-light mb-8 pb-8 border-b border-burgundy/10">
              <span className="font-mono">{project.year}</span>
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-cream-dark rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-burgundy">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-burgundy leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
