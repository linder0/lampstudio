import { motion } from 'framer-motion'

export default function Thesis() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6 italic">
          Our Thesis
        </h1>
        <div className="w-24 h-px bg-burgundy/30 mx-auto" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8 text-lg leading-relaxed text-burgundy"
      >
        <p className="font-serif text-2xl text-ink leading-relaxed">
          Light is not merely illumination—it is the medium through which we
          experience space, time, and emotion.
        </p>

        <p>
          At Lamp Collective, we believe that the objects we live with should do more
          than serve a function. They should tell stories, evoke feelings, and transform
          the spaces they inhabit. Light, in particular, holds a unique power: it can
          make a room feel intimate or expansive, energizing or calming, joyful or
          contemplative.
        </p>

        <p>
          Our work begins with observation. We study how light falls through a window
          at different hours, how shadows move across a wall, how the quality of
          illumination affects our mood and productivity. This deep attention to the
          phenomenology of light informs every design decision we make.
        </p>

        <blockquote className="border-l-2 border-accent pl-6 my-12 font-serif text-xl italic text-ink">
          "We don't design lamps. We design experiences of light."
        </blockquote>

        <p>
          Craft is central to our practice. We work with skilled artisans—glassblowers,
          metalworkers, woodworkers—who bring decades of experience to each piece.
          The slight variations in hand-blown glass, the subtle patina of brass, the
          warm grain of walnut: these imperfections are not flaws but signatures of
          human hands at work.
        </p>

        <p>
          Sustainability guides our material choices. We source recycled metals,
          responsibly harvested woods, and work with local makers whenever possible
          to minimize our environmental footprint. Beautiful objects should not come
          at the expense of the planet.
        </p>

        <p>
          Each piece in our collection is designed to be lived with for years—perhaps
          generations. We reject the disposable culture of fast design in favor of
          objects that age gracefully, developing character and meaning over time.
        </p>

        <div className="pt-12 mt-12 border-t border-burgundy/10 text-center">
          <p className="font-mono text-sm text-burgundy-light uppercase tracking-widest">
            Brooklyn, NY — Est. 2024
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
