import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add lantern_on.png and lantern_off.png to ./assets/
import lanternOn from '../lamp/assets/lamp_on.png'
import lanternOff from '../lamp/assets/lamp_off.png'

export const lanternConfig: ProjectConfig = {
  slug: 'lantern',
  title: 'The Lantern',
  subtitle: 'Light Study No. 07',
  description: `Portable illumination. This lantern bridges indoor and outdoor spaces, offering warm, portable light for gardens, patios, and intimate gatherings.

The rechargeable design frees it from cords, while the weighted base ensures stability in outdoor conditions. The frosted glass diffuser creates an even, gentle glow.

Materials: Powder-coated aluminum, frosted glass, leather handle
Dimensions: 12" H × 6" diameter
Edition: Limited run of 60`,
  year: 2025,
  tags: ['Lighting', 'Portable', 'Outdoor'],
  featured: false,
  thumbnail: {
    on: lanternOn,
    off: lanternOff,
    alt: 'The Lantern - Portable rechargeable lantern',
  },
  images: [
    {
      on: lanternOn,
      off: lanternOff,
      alt: 'The Lantern - Outdoor setting',
    },
  ],
}

