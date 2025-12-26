import { motion } from 'framer-motion'
import TeamMember from '../components/TeamMember'
import type { TeamMemberData } from '../components/TeamMember'
import { fadeIn, defaultTransition } from '../utils/animations'

const teamMembers: TeamMemberData[] = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    bio: 'Alex founded Lamp Collective with a vision to explore the intersection of light, form, and function. With a background in industrial design and architecture.',
  },
  {
    name: 'Jordan Rivera',
    role: 'Lead Designer',
    bio: 'Jordan brings a sculptural approach to every project, drawing inspiration from natural forms and the way light interacts with materials.',
  },
  {
    name: 'Sam Okonkwo',
    role: 'Materials Specialist',
    bio: 'Sam researches and sources sustainable materials that enhance both the aesthetic and environmental impact of our designs.',
  },
  {
    name: 'Maya Patel',
    role: 'Production Manager',
    bio: 'Maya oversees the fabrication process, ensuring each piece meets our exacting standards for quality and craftsmanship.',
  },
]

export default function Team() {
  return (
    <div>
      {/* Header */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={defaultTransition}
        className="mb-8 pb-4 border-b border-burgundy/20"
      >
        <h1 className="font-serif text-4xl text-ink mb-4">The Team</h1>
        <p className="text-burgundy-light max-w-2xl leading-relaxed">
          We are a small collective of designers, makers, and dreamers united by our
          fascination with light and its transformative power. Based in Brooklyn,
          we craft objects that illuminate both spaces and lives.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  )
}
