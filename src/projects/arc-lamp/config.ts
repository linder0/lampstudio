import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add arc_lamp_on.png and arc_lamp_off.png to ./assets/
import arcLampOn from '../lamp/assets/lamp_on.png'
import arcLampOff from '../lamp/assets/lamp_off.png'

export const arcLampConfig: ProjectConfig = {
  slug: 'arc-lamp',
  title: 'The Arc',
  subtitle: 'Light Study No. 08',
  description: `A sweeping gesture in light. This arc lamp extends gracefully over seating areas, providing overhead illumination without the need for ceiling fixtures.

The dramatic curve creates a sense of enclosure and intimacy, defining spaces within open floor plans. The counterweighted base allows for stable positioning at various extensions.

Materials: Blackened steel, marble base, natural linen shade
Dimensions: 84" H × 72" reach
Edition: Limited run of 20`,
  year: 2025,
  tags: ['Lighting', 'Floor Lamp', 'Statement Piece'],
  featured: true,
  thumbnail: {
    on: arcLampOn,
    off: arcLampOff,
    alt: 'The Arc - Sweeping arc floor lamp',
  },
  images: [
    {
      on: arcLampOn,
      off: arcLampOff,
      alt: 'The Arc - Living room setting',
    },
  ],
}

