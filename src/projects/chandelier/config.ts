import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add chandelier_on.png and chandelier_off.png to ./assets/
import chandelierOn from '../lamp/assets/lamp_on.png'
import chandelierOff from '../lamp/assets/lamp_off.png'

export const chandelierConfig: ProjectConfig = {
  slug: 'chandelier',
  title: 'The Chandelier',
  subtitle: 'Light Study No. 06',
  description: `A constellation of light. This chandelier suspends multiple light sources in a carefully orchestrated arrangement, creating a celestial presence in dining rooms and entryways.

Each glass orb is hand-blown, ensuring subtle variations that catch and scatter light in unique ways. The brass armature traces geometric forms inspired by molecular structures.

Materials: Hand-blown glass, brushed brass, fabric-wrapped cord
Dimensions: 36" W × 24" H (adjustable drop)
Edition: Made to order`,
  year: 2024,
  tags: ['Lighting', 'Chandelier', 'Hand-blown Glass'],
  featured: true,
  thumbnail: {
    on: chandelierOn,
    off: chandelierOff,
    alt: 'The Chandelier - Multi-arm glass chandelier',
  },
  images: [
    {
      on: chandelierOn,
      off: chandelierOff,
      alt: 'The Chandelier - Installed view',
    },
  ],
}

