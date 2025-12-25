import { motion } from 'framer-motion'
import { fadeInUp, staggeredTransition } from '../utils/animations'

export interface TeamMemberData {
  name: string
  role: string
  bio: string
  image?: string
}

interface TeamMemberProps {
  member: TeamMemberData
  index: number
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  // Generate initials for placeholder
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={staggeredTransition(index)}
      className="group"
    >
      {/* Headshot */}
      <div className="aspect-[3/4] bg-cream-dark mb-4 overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream-dark to-burgundy/10">
            <span className="font-serif text-4xl text-burgundy/30">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-serif text-xl text-ink mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-burgundy-light uppercase tracking-wide mb-3">
        {member.role}
      </p>
      <p className="text-sm text-burgundy leading-relaxed">
        {member.bio}
      </p>
    </motion.div>
  )
}
