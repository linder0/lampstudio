import { motion } from 'framer-motion'

export type ViewSize = 'S' | 'M' | 'L'

interface ViewSizerProps {
  value: ViewSize
  onChange: (size: ViewSize) => void
}

const sizes: ViewSize[] = ['S', 'M', 'L']

export default function ViewSizer({ value, onChange }: ViewSizerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className="relative px-2 py-1 cursor-pointer"
          >
            <span
              className={`text-sm font-sans transition-colors ${
                value === size
                  ? 'text-burgundy'
                  : 'text-burgundy-light hover:text-burgundy'
              }`}
            >
              {size}
            </span>
            {value === size && (
              <motion.div
                layoutId="view-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-burgundy"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
