import type { ProjectConfig } from '../../types/project'

// Import images
import lampOnThumb from './assets/lamp_on.png'
import lampOffThumb from './assets/lamp_off.png'

export const lampConfig: ProjectConfig = {
  slug: 'lamp',
  title: 'The Lamp',
  subtitle: 'Light Study No. 01',
  description: `A sculptural exploration of light and form. This pleated lamp represents our collective's first foray into illumination design—a study in how light transforms space and mood.

When lit, the warm amber glow radiates through the pleated shade, casting dynamic shadows that dance across walls and surfaces. The vertical ridges create a rhythmic interplay of light and shadow. When off, the form stands as a quiet sculptural object, its materiality revealed in subtle tones.

Materials: Pleated translucent shade, matte black base
Dimensions: 10" H × 6" W
Edition: Limited run of 50`,
  year: 2024,
  tags: ['Lighting', 'Product Design', 'Limited Edition'],
  featured: true,
  thumbnail: {
    on: lampOnThumb,
    off: lampOffThumb,
    alt: 'The Lamp - Illuminated glass lamp with brass details',
  },
  images: [
    {
      on: lampOnThumb,
      off: lampOffThumb,
      alt: 'The Lamp - Front view',
    },
  ],
}
