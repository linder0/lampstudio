import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add pendant_on.png and pendant_off.png to ./assets/
import pendantOn from '../lamp/assets/lamp_on.png'
import pendantOff from '../lamp/assets/lamp_off.png'

export const pendantConfig: ProjectConfig = {
  slug: 'pendant',
  title: 'The Pendant',
  subtitle: 'Light Study No. 03',
  description: `Suspended contemplation. This pendant light hovers in space, a luminous orb that draws the eye upward and transforms the ceiling into a canvas of soft, diffused light.

Inspired by celestial bodies and the quiet drama of a single light source, the pendant creates an intimate atmosphere that encourages gathering and conversation. Its form is simple yet commanding—a perfect sphere that conceals complexity within its glowing surface.

Materials: Hand-blown glass, blackened steel, cloth cord
Dimensions: 14" diameter
Edition: Limited run of 30`,
  year: 2024,
  tags: ['Lighting', 'Pendant', 'Hand-blown Glass'],
  featured: true,
  thumbnail: {
    on: pendantOn,
    off: pendantOff,
    alt: 'The Pendant - Suspended pendant light with hand-blown glass',
  },
  images: [
    {
      on: pendantOn,
      off: pendantOff,
      alt: 'The Pendant - Suspended view',
    },
  ],
}
