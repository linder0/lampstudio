import type { ProjectConfig } from '../../types/project'

// Import images - replace with your own images when ready
// Add floor_lamp_on.png and floor_lamp_off.png to ./assets/
import floorLampOn from '../lamp/assets/lamp_on.png'
import floorLampOff from '../lamp/assets/lamp_off.png'

export const floorLampConfig: ProjectConfig = {
  slug: 'floor-lamp',
  title: 'The Floor Lamp',
  subtitle: 'Light Study No. 02',
  description: `A standing testament to vertical light. This floor lamp extends our exploration of illumination into the realm of sculptural furniture—a beacon that anchors a room while casting its warm embrace across walls and ceilings.

The slender silhouette rises gracefully, its form inspired by the elegant geometry of mid-century modernism. When lit, light cascades downward and upward simultaneously, creating pools of warmth that define intimate spaces within larger rooms.

Materials: Brushed brass, linen shade, walnut base
Dimensions: 60" H × 12" W
Edition: Limited run of 25`,
  year: 2024,
  tags: ['Lighting', 'Furniture', 'Limited Edition'],
  featured: true,
  thumbnail: {
    on: floorLampOn,
    off: floorLampOff,
    alt: 'The Floor Lamp - Standing floor lamp with brass and linen details',
  },
  images: [
    {
      on: floorLampOn,
      off: floorLampOff,
      alt: 'The Floor Lamp - Full view',
    },
  ],
}
