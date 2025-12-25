import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add sconce_on.png and sconce_off.png to ./assets/
import sconceOn from '../lamp/assets/lamp_on.png'
import sconceOff from '../lamp/assets/lamp_off.png'

export const sconceConfig: ProjectConfig = {
  slug: 'sconce',
  title: 'The Sconce',
  subtitle: 'Light Study No. 04',
  description: `Light against the wall. This sconce transforms vertical surfaces into sources of ambient illumination, washing walls with gentle gradients of warm light that define architectural spaces.

Designed for the liminal spaces of a home—hallways, entryways, beside beds—the sconce provides directional light while remaining visually quiet. Its minimal form disappears into the architecture while its light becomes an integral part of the space.

Materials: Patinated bronze, frosted glass diffuser
Dimensions: 8" H × 4" W × 3" D
Edition: Pairs only, limited run of 40`,
  year: 2025,
  tags: ['Lighting', 'Wall Sconce', 'Bronze'],
  featured: false,
  thumbnail: {
    on: sconceOn,
    off: sconceOff,
    alt: 'The Sconce - Wall-mounted sconce with bronze finish',
  },
  images: [
    {
      on: sconceOn,
      off: sconceOff,
      alt: 'The Sconce - Mounted view',
    },
  ],
}
