import { useLamp } from '../context/LampContext'
import type { ProjectImage } from '../types/project'

interface LampImageProps {
  image: ProjectImage
  className?: string
}

/**
 * Renders an image that crossfades between on/off states based on lamp state.
 * Consolidates the duplicated on/off image pattern used throughout the app.
 */
export default function LampImage({ image, className = '' }: LampImageProps) {
  const { isLampOn } = useLamp()

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* OFF image - base layer */}
      <img
        src={image.off}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: isLampOn ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
      />
      {/* ON image - top layer */}
      <img
        src={image.on}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: isLampOn ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
      />
    </div>
  )
}
